// Typewriter Effect Module
class Typewriter {
    constructor() {
        this.isTyping = false;
        this.queue = [];
        this.defaultSpeed = 30; // milliseconds per character
        this.fastSpeed = 15;
        this.slowSpeed = 60;
        this.currentSpeed = this.defaultSpeed;
    }

    // Add text to typing queue
    type(text, element, options = {}) {
        return new Promise((resolve) => {
            this.queue.push({
                text: text,
                element: element,
                options: {
                    speed: options.speed || this.defaultSpeed,
                    preserveNewlines: options.preserveNewlines !== false,
                    className: options.className || '',
                    callback: resolve
                }
            });
            
            if (!this.isTyping) {
                this.processQueue();
            }
        });
    }

    // Process the typing queue
    async processQueue() {
        if (this.queue.length === 0) {
            this.isTyping = false;
            return;
        }

        this.isTyping = true;
        const item = this.queue.shift();
        
        await this.typeText(item.text, item.element, item.options);
        
        if (item.options.callback) {
            item.options.callback();
        }
        
        // Process next item in queue
        this.processQueue();
    }

    // Display text instantly (no typing animation)
    async typeText(text, element, options) {
        if (!element) return;

        const preserveNewlines = options.preserveNewlines;
        const className = options.className;

        // Create container for this text block
        const textContainer = document.createElement('div');
        if (className) {
            textContainer.className = className;
        }
        
        element.appendChild(textContainer);

        // Display text instantly
        if (preserveNewlines !== false) {
            textContainer.innerHTML = text.replace(/\n/g, '<br>');
        } else {
            textContainer.textContent = text;
        }
        
        // Scroll to bottom
        this.scrollToBottom();
    }

    // Type text instantly (no animation)
    instant(text, element, options = {}) {
        if (!element) return;

        const textContainer = document.createElement('div');
        if (options.className) {
            textContainer.className = options.className;
        }
        
        if (options.preserveNewlines !== false) {
            textContainer.innerHTML = text.replace(/\n/g, '<br>');
        } else {
            textContainer.textContent = text;
        }
        
        element.appendChild(textContainer);
        this.scrollToBottom();
    }

    // Clear typing queue
    clearQueue() {
        this.queue = [];
        this.isTyping = false;
    }

    // Skip current typing animation
    skipCurrent() {
        // This would be implemented to fast-forward current typing
        this.currentSpeed = 0;
    }

    // Type with different speeds
    typefast(text, element, options = {}) {
        return this.type(text, element, { ...options, speed: this.fastSpeed });
    }

    typeSlow(text, element, options = {}) {
        return this.type(text, element, { ...options, speed: this.slowSpeed });
    }

    // Type with cursor effect
    async typeWithCursor(text, element, options = {}) {
        const speed = options.speed || this.defaultSpeed;
        const cursorChar = options.cursor || '█';
        
        const textContainer = document.createElement('div');
        if (options.className) {
            textContainer.className = options.className;
        }
        
        element.appendChild(textContainer);

        // Add cursor
        const cursor = document.createElement('span');
        cursor.textContent = cursorChar;
        cursor.classList.add('cursor');
        textContainer.appendChild(cursor);

        // Type each character before cursor
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            // Insert character before cursor
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            textContainer.insertBefore(charSpan, cursor);
            
            this.scrollToBottom();
            await this.delay(speed);
        }

        // Remove cursor after typing
        if (options.removeCursor !== false) {
            cursor.remove();
        }
    }

    // Type ASCII art with special formatting
    async typeAsciiArt(asciiText, element, options = {}) {
        const artContainer = document.createElement('pre');
        artContainer.className = 'ascii-banner';
        element.appendChild(artContainer);

        const lines = asciiText.split('\n');
        
        for (const line of lines) {
            const lineElement = document.createElement('div');
            artContainer.appendChild(lineElement);
            
            // Type each line relatively quickly for ASCII art
            for (let i = 0; i < line.length; i++) {
                lineElement.textContent += line[i];
                await this.delay(5); // Very fast for ASCII art
            }
        }
        
        this.scrollToBottom();
    }

    // Type command output with proper formatting
    async typeCommandOutput(output, element, isError = false) {
        const outputClass = isError ? 'error-output' : 'command-output';
        return this.type(output, element, {
            className: outputClass,
            preserveNewlines: true,
            speed: this.fastSpeed
        });
    }

    // Type preformatted text that preserves all spacing
    async typePreformatted(text, element, options = {}) {
        const preContainer = document.createElement('pre');
        if (options.className) {
            preContainer.className = options.className;
        } else {
            preContainer.className = 'command-output';
        }
        
        preContainer.textContent = text;
        element.appendChild(preContainer);
        this.scrollToBottom();
    }

    // Type file contents with syntax highlighting potential
    async typeFileContent(content, element, filename = '') {
        const fileContainer = document.createElement('div');
        fileContainer.className = 'file-content';
        element.appendChild(fileContainer);

        // Add file header
        if (filename) {
            const header = document.createElement('div');
            header.className = 'file-header';
            header.textContent = `=== ${filename} ===`;
            fileContainer.appendChild(header);
        }

        // Type content with preserved formatting
        return this.type(content, fileContainer, {
            preserveNewlines: true,
            speed: this.fastSpeed
        });
    }

    // Type directory listing with colors
    async typeDirectoryListing(items, element) {
        const listContainer = document.createElement('div');
        listContainer.className = 'file-list';
        element.appendChild(listContainer);

        for (const item of items) {
            const itemElement = document.createElement('div');
            itemElement.className = `file-item ${item.type}`;
            
            await this.type(item.displayName, itemElement, {
                speed: 10,
                preserveNewlines: false
            });
            
            listContainer.appendChild(itemElement);
        }
    }

    // Utility delay function
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Scroll terminal to bottom
    scrollToBottom() {
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    }

    // Matrix rain effect for easter egg
    createMatrixRain() {
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-rain';
        document.body.appendChild(matrixContainer);

        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const columns = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = i * 20 + 'px';
            column.style.animationDuration = (Math.random() * 3 + 2) + 's';
            column.style.animationDelay = Math.random() * 2 + 's';

            let columnText = '';
            const height = Math.floor(Math.random() * 20) + 10;
            for (let j = 0; j < height; j++) {
                columnText += chars[Math.floor(Math.random() * chars.length)] + '\n';
            }
            
            column.textContent = columnText;
            matrixContainer.appendChild(column);
        }

        // Remove matrix effect after 5 seconds
        setTimeout(() => {
            matrixContainer.remove();
        }, 5000);
    }

    // Loading animation with dots
    createLoadingAnimation(element, duration = 3000) {
        const loadingContainer = document.createElement('div');
        loadingContainer.className = 'loading-dots';
        loadingContainer.innerHTML = 'Loading<span>.</span><span>.</span><span>.</span>';
        element.appendChild(loadingContainer);

        return new Promise(resolve => {
            setTimeout(() => {
                loadingContainer.remove();
                resolve();
            }, duration);
        });
    }

    // Boot sequence animation
    async typeBootSequence(element) {
        const bootMessages = [
            'Initializing terminal...',
            'Loading Daniel\'s resume data...',
            'Establishing file system...',
            'Terminal ready!'
        ];

        for (const message of bootMessages) {
            const bootLine = document.createElement('div');
            bootLine.className = 'boot-sequence';
            await this.type(message, bootLine, { speed: 20 });
            element.appendChild(bootLine);
            await this.delay(500);
        }
    }

    // Type with rainbow effect (for special occasions)
    async typeRainbow(text, element, options = {}) {
        const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
        const container = document.createElement('div');
        element.appendChild(container);

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.style.color = colors[i % colors.length];
            container.appendChild(charSpan);
            
            await this.delay(options.speed || 100);
        }
    }

    // Get typing status
    isCurrentlyTyping() {
        return this.isTyping;
    }

    // Get queue length
    getQueueLength() {
        return this.queue.length;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Typewriter;
}