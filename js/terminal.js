// Main Terminal Controller
class Terminal {
    constructor() {
        this.filesystem = null;
        this.typewriter = null;
        this.commands = null;
        this.inputElement = null;
        this.outputElement = null;
        this.promptElement = null;
        this.cursorElement = null;
        this.isInitialized = false;
        this.currentInput = '';
        this.completionCache = [];
        this.tabCompletionIndex = 0;
    }

    // Initialize terminal
    async init() {
        if (this.isInitialized) return;

        // Initialize core components
        this.filesystem = new FileSystem(danielData);
        this.typewriter = new Typewriter();
        this.commands = new Commands(this.filesystem, this.typewriter, danielData);

        // Get DOM elements
        this.inputElement = document.getElementById('command-input');
        this.outputElement = document.getElementById('output');
        this.promptElement = document.getElementById('prompt');
        this.cursorElement = document.getElementById('cursor');

        // Setup event listeners
        this.setupEventListeners();

        // Display welcome sequence
        await this.displayWelcome();

        // Update prompt
        this.updatePrompt();

        // Position cursor correctly on initial load (with small delay for DOM rendering)
        setTimeout(() => {
            this.updateCursorPosition();
        }, 50);

        this.isInitialized = true;
    }

    // Setup event listeners
    setupEventListeners() {
        // Input handling
        this.inputElement.addEventListener('keydown', (e) => this.handleKeyDown(e));
        this.inputElement.addEventListener('input', (e) => this.handleInput(e));

        // Focus management
        document.addEventListener('click', () => this.focusInput());
        window.addEventListener('focus', () => this.focusInput());

        // Prevent context menu on right click (terminal-like behavior)
        document.addEventListener('contextmenu', (e) => e.preventDefault());

        // Handle window resize for responsive behavior
        window.addEventListener('resize', () => this.handleResize());

        // Prevent form submission
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target === this.inputElement) {
                e.preventDefault();
            }
        });
    }

    // Handle keyboard input
    async handleKeyDown(event) {
        const key = event.key;
        
        // Prevent default for special keys
        if (['Enter', 'Tab', 'ArrowUp', 'ArrowDown', 'Escape'].includes(key)) {
            event.preventDefault();
        }

        switch (key) {
            case 'Enter':
                await this.executeCommand();
                break;
                
            case 'Tab':
                this.handleTabCompletion();
                break;
                
            case 'ArrowUp':
                this.handleHistoryUp();
                break;
                
            case 'ArrowDown':
                this.handleHistoryDown();
                break;
                
            case 'Escape':
                this.clearInput();
                break;
                
            case 'l':
                if (event.ctrlKey || event.metaKey) {
                    event.preventDefault();
                    this.clearTerminal();
                }
                break;
                
            case 'c':
                if (event.ctrlKey || event.metaKey) {
                    event.preventDefault();
                    this.interruptCommand();
                }
                break;
        }
    }

    // Handle input changes
    handleInput(event) {
        this.currentInput = event.target.value;
        this.updateCursorPosition();
        this.resetTabCompletion();
    }

    // Execute command
    async executeCommand() {
        const input = this.inputElement.value.trim();
        this.clearInput();
        
        if (input) {
            await this.commands.executeCommand(input, this.outputElement);
            this.updatePrompt();
            // Update cursor position after prompt changes (for cd commands)
            setTimeout(() => {
                this.updateCursorPosition();
            }, 10);
        }
        
        this.scrollToBottom();
        this.focusInput();
    }

    // Handle tab completion
    handleTabCompletion() {
        const input = this.inputElement.value;
        const completions = this.commands.getCompletions(input);
        
        if (completions.length === 0) return;
        
        if (completions.length === 1) {
            // Single completion - auto-complete
            this.inputElement.value = completions[0];
            this.currentInput = completions[0];
            this.updateCursorPosition();
        } else {
            // Multiple completions - cycle through them
            if (this.completionCache.length === 0 || 
                JSON.stringify(this.completionCache) !== JSON.stringify(completions)) {
                this.completionCache = completions;
                this.tabCompletionIndex = 0;
            }
            
            this.inputElement.value = this.completionCache[this.tabCompletionIndex];
            this.currentInput = this.completionCache[this.tabCompletionIndex];
            this.tabCompletionIndex = (this.tabCompletionIndex + 1) % this.completionCache.length;
            this.updateCursorPosition();
        }
    }

    // Handle command history navigation
    handleHistoryUp() {
        const previousCommand = this.commands.getPreviousCommand();
        if (previousCommand !== null) {
            this.inputElement.value = previousCommand;
            this.currentInput = previousCommand;
            this.updateCursorPosition();
        }
    }

    handleHistoryDown() {
        const nextCommand = this.commands.getNextCommand();
        if (nextCommand !== null) {
            this.inputElement.value = nextCommand;
            this.currentInput = nextCommand;
            this.updateCursorPosition();
        }
    }

    // Reset tab completion
    resetTabCompletion() {
        this.completionCache = [];
        this.tabCompletionIndex = 0;
    }

    // Clear input
    clearInput() {
        this.inputElement.value = '';
        this.currentInput = '';
        this.updateCursorPosition();
        this.resetTabCompletion();
        this.commands.resetHistoryIndex();
    }

    // Clear terminal
    clearTerminal() {
        this.outputElement.innerHTML = '';
        this.scrollToBottom();
    }

    // Interrupt current command (Ctrl+C)
    interruptCommand() {
        if (this.typewriter.isCurrentlyTyping()) {
            this.typewriter.clearQueue();
            this.typewriter.instant('\n^C', this.outputElement, { className: 'error-output' });
            this.clearInput();
        }
    }

    // Update cursor position
    updateCursorPosition() {
        const prompt = this.promptElement;
        const input = this.inputElement;
        const cursor = this.cursorElement;
        
        if (prompt && input && cursor) {
            // Calculate position after prompt + input text
            const promptWidth = prompt.offsetWidth;
            
            // Create temporary span to measure input text width
            const tempSpan = document.createElement('span');
            tempSpan.style.visibility = 'hidden';
            tempSpan.style.position = 'absolute';
            tempSpan.style.whiteSpace = 'pre';
            tempSpan.style.font = window.getComputedStyle(input).font;
            tempSpan.textContent = input.value || '';
            
            document.body.appendChild(tempSpan);
            const inputTextWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);
            
            // Position cursor after prompt + input text with proper spacing
            const gapWidth = 8; // Single space between $ and cursor
            const charWidth = 8.4; // Approximate width of one character in monospace font
            cursor.style.left = `${promptWidth + inputTextWidth + gapWidth + charWidth}px`;
        }
    }

    // Update prompt with current directory
    updatePrompt() {
        if (this.promptElement && this.commands) {
            const prompt = this.commands.getPrompt();
            this.promptElement.textContent = prompt;
        }
    }

    // Focus input element
    focusInput() {
        if (this.inputElement) {
            this.inputElement.focus();
        }
    }

    // Scroll to bottom
    scrollToBottom() {
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    }

    // Handle window resize
    handleResize() {
        this.updateCursorPosition();
        this.scrollToBottom();
    }

    // Display welcome sequence
    async displayWelcome() {
        const bannerElement = document.getElementById('ascii-banner');
        const welcomeElement = document.getElementById('welcome-message');

        // Display ASCII banner instantly
        this.typewriter.instant(danielData.asciiBanner, bannerElement, {
            className: 'ascii-banner',
            preserveNewlines: true
        });

        // Display welcome message instantly
        const welcomeText = `Welcome to Daniel's terminal resume!

Type 'help' to see available commands or 'resume' for a quick overview.
Navigate through the filesystem with 'ls', 'cd', and 'cat' commands.

Quick tips:
• Use Tab for auto-completion
• Up/Down arrows for command history
• Type 'linkedin' or 'github' for direct profile links
`;

        this.typewriter.instant(welcomeText, welcomeElement, {
            className: 'welcome-message',
            preserveNewlines: true
        });
    }

    // Add startup animation
    async playStartupAnimation() {
        const terminalContainer = document.querySelector('.terminal-container');
        
        // Add startup glow effect
        terminalContainer.classList.add('terminal-glow');
        
        // Boot sequence messages
        const bootElement = document.createElement('div');
        this.outputElement.appendChild(bootElement);
        
        await this.typewriter.typeBootSequence(bootElement);
        
        // Remove glow after startup
        setTimeout(() => {
            terminalContainer.classList.remove('terminal-glow');
        }, 3000);
    }

    // Add system information
    displaySystemInfo() {
        const sysInfo = `
System Information:
OS: Terminal OS v1.0
Kernel: Daniel-Resume-Kernel
Architecture: x64
Shell: /bin/daniel-shell
Terminal: daniel-terminal 1.0.0
`;
        
        this.typewriter.instant(sysInfo, this.outputElement, {
            className: 'system-info'
        });
    }

    // Add easter egg for specific key combinations
    setupEasterEggs() {
        let konamiCode = [];
        const konamiSequence = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];

        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.code);
            
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
                this.commands.konami(this.outputElement);
                konamiCode = [];
            }
        });
    }

    // Performance optimization
    optimizePerformance() {
        // Limit output history to prevent memory issues
        const maxOutputLines = 1000;
        const outputLines = this.outputElement.children;
        
        if (outputLines.length > maxOutputLines) {
            for (let i = 0; i < outputLines.length - maxOutputLines; i++) {
                this.outputElement.removeChild(outputLines[i]);
            }
        }
    }

    // Mobile touch handling
    setupMobileSupport() {
        if ('ontouchstart' in window) {
            // Prevent zoom on double tap
            document.addEventListener('touchstart', (e) => {
                if (e.touches.length > 1) {
                    e.preventDefault();
                }
            });

            // Virtual keyboard handling
            this.inputElement.addEventListener('focus', () => {
                setTimeout(() => this.scrollToBottom(), 500);
            });
        }
    }

    // Get terminal state for debugging
    getState() {
        return {
            currentPath: this.filesystem.getCurrentPath(),
            commandHistory: this.commands.commandHistory,
            isTyping: this.typewriter.isCurrentlyTyping(),
            queueLength: this.typewriter.getQueueLength()
        };
    }

    // Cleanup resources
    cleanup() {
        this.typewriter.clearQueue();
        this.completionCache = [];
        this.isInitialized = false;
    }
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
    const terminal = new Terminal();
    
    try {
        await terminal.init();
        
        // Optional: Add startup animation
        // await terminal.playStartupAnimation();
        
        // Setup easter eggs
        terminal.setupEasterEggs();
        
        // Setup mobile support
        terminal.setupMobileSupport();
        
        // Performance monitoring
        setInterval(() => {
            terminal.optimizePerformance();
        }, 30000); // Every 30 seconds
        
        console.log('Terminal initialized successfully!');
        console.log('Try typing "help" to get started.');
        
    } catch (error) {
        console.error('Failed to initialize terminal:', error);
    }
});

// Export for testing/debugging
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Terminal;
}