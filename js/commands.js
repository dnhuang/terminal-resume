// Commands Module - Handles all terminal commands
class Commands {
    constructor(filesystem, typewriter, data) {
        this.filesystem = filesystem;
        this.typewriter = typewriter;
        this.data = data;
        this.commandHistory = [];
        this.historyIndex = -1;
    }

    // Execute command and return result
    async executeCommand(input, outputElement) {
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        // Add to history
        this.addToHistory(trimmedInput);

        // Parse command and arguments
        const parts = trimmedInput.split(/\s+/);
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Echo command to output
        await this.echoCommand(trimmedInput, outputElement);

        // Execute command
        try {
            switch (command) {
                // Standard Unix commands
                case 'ls':
                    await this.ls(args, outputElement);
                    break;
                case 'cd':
                    await this.cd(args, outputElement);
                    break;
                case 'cat':
                    await this.cat(args, outputElement);
                    break;
                case 'pwd':
                    await this.pwd(outputElement);
                    break;
                case 'clear':
                    this.clear(outputElement);
                    break;
                case 'help':
                    await this.help(outputElement);
                    break;
                case 'history':
                    await this.history(outputElement);
                    break;
                case 'tree':
                    await this.tree(args, outputElement);
                    break;

                // Custom resume commands
                case 'resume':
                    await this.resume(outputElement);
                    break;
                case 'whoami':
                    await this.whoami(outputElement);
                    break;

                // Social links
                case 'linkedin':
                    this.openLink('https://linkedin.com/in/dnhuang', outputElement);
                    break;
                case 'github':
                    this.openLink('https://github.com/dnhuang', outputElement);
                    break;

                default:
                    await this.commandNotFound(command, outputElement);
            }
        } catch (error) {
            await this.typewriter.typeCommandOutput(
                `Error executing command: ${error.message}`,
                outputElement,
                true
            );
        }
    }

    // Echo command to output
    async echoCommand(command, element) {
        const prompt = this.getPrompt();
        await this.typewriter.instant(`${prompt}${command}`, element, {
            className: 'command-echo'
        });
    }

    // Get current prompt
    getPrompt() {
        const path = this.filesystem.getPathBreadcrumb();
        return `guest@resume:${path}$ `;
    }

    // LS command - list directory contents
    async ls(args, element) {
        const result = this.filesystem.listDirectory();
        
        if (result.error) {
            await this.typewriter.typeCommandOutput(result.error, element, true);
            return;
        }

        if (result.contents.length === 0) {
            await this.typewriter.typeCommandOutput('(empty directory)', element);
            return;
        }

        // Format output
        let output = '';
        result.contents.forEach(item => {
            const icon = item.type === 'directory' ? '📁' : '📄';
            output += `${icon} ${item.displayName}\n`;
        });

        await this.typewriter.typeCommandOutput(output.trim(), element);
    }

    // CD command - change directory
    async cd(args, element) {
        const target = args[0] || '';
        const result = this.filesystem.changeDirectory(target);
        
        if (result.error) {
            await this.typewriter.typeCommandOutput(result.error, element, true);
        }
        // No output on successful cd (like real Unix)
    }

    // CAT command - display file contents
    async cat(args, element) {
        if (args.length === 0) {
            await this.typewriter.typeCommandOutput(
                'cat: missing file operand\nTry \'help\' for more information.',
                element,
                true
            );
            return;
        }

        const filename = args[0];
        const result = this.filesystem.readFile(filename);
        
        if (result.error) {
            await this.typewriter.typeCommandOutput(result.error, element, true);
            return;
        }

        await this.typewriter.typeFileContent(result.content, element, filename);
    }

    // PWD command - print working directory
    async pwd(element) {
        const path = this.filesystem.getCurrentPath();
        await this.typewriter.typeCommandOutput(path, element);
    }

    // CLEAR command - clear terminal
    clear(element) {
        const terminalContent = document.getElementById('terminal-content');
        const output = document.getElementById('output');
        if (output) {
            output.innerHTML = '';
        }
    }

    // HELP command - show available commands
    async help(element) {
        let helpText = `AVAILABLE COMMANDS:

NAVIGATION:
  ls          List directory contents
  cd [dir]    Change directory
  cat [file]  Display file contents
  pwd         Show current directory
  tree        Display directory structure

RESUME COMMANDS:
  resume      Complete resume overview
  whoami      Personal introduction

UTILITY:
  clear       Clear terminal screen
  history     Show command history
  help        Display this help message

SOCIAL:
  linkedin    Open LinkedIn profile
  github      Open GitHub profile

TIPS:
• Use tab for auto-completion
• Use up/down arrows for command history
• Navigate like a real Unix filesystem!
• Explore Daniel's resume using 'ls', 'cd', and 'cat' commands
`;

        await this.typewriter.typePreformatted(helpText, element);
    }

    // HISTORY command - show command history
    async history(element) {
        if (this.commandHistory.length === 0) {
            await this.typewriter.typeCommandOutput('No commands in history.', element);
            return;
        }

        let historyText = '';
        this.commandHistory.forEach((cmd, index) => {
            historyText += `${index + 1}  ${cmd}\n`;
        });

        await this.typewriter.typeCommandOutput(historyText.trim(), element);
    }

    // TREE command - display directory structure
    async tree(args, element) {
        const path = args[0] || this.filesystem.getCurrentPath();
        const treeStructure = this.filesystem.getDirectoryTree(path);
        
        if (!treeStructure) {
            await this.typewriter.typeCommandOutput(
                `tree: ${path}: No such file or directory`,
                element,
                true
            );
            return;
        }

        const header = `${path}\n`;
        await this.typewriter.typeCommandOutput(header + treeStructure, element);
    }

    // RESUME command - complete overview
    async resume(element) {
        const resumeText = `DANIEL HUANG - SOFTWARE ENGINEER

${this.data.personal.email} | ${this.data.personal.linkedin} | ${this.data.personal.github}

CURRENT POSITION:
Software Engineer at BioIntelliSense, Inc. (Aug 2024 - Present)
• Modernizing clinical data annotation workflows
• Contributing to FDA clearance processes for medical devices
• Developing automation tools for clinical research teams

RECENT EXPERIENCE:
Real Estate Associate at The Entrust Group (Jul 2023 - Jan 2024)
• Built ETL pipelines reducing hundreds of hours to single program run
• Created executive dashboards for data-driven decision making

EDUCATION:
UC Berkeley - Bachelor of Arts, Data Science (Economics Emphasis) - Dec 2022

KEY SKILLS:
• Languages: Python, Java, SQL, C, Golang, JavaScript, HTML5, CSS
• Cloud: AWS (EC2, S3, Lambda), Databricks
• Data: Machine Learning, Statistical Analysis 
• Tools: Docker, Git, Tableau, Agile Development

FEATURED PROJECTS:
• FIFA World Cup 2022 Predictor (Team of 7, predicted Argentina's win!)
• Mobility & GDP Statistical Analysis (Bayesian modeling)
• Personal Spending Dashboard (46% food spending discovery!)
`;

        await this.typewriter.typeCommandOutput(resumeText, element);
    }

    // WHOAMI command - personal introduction
    async whoami(element) {
        const whoamiText = `daniel

You are currently viewing the terminal résumé of Daniel Huang,
a Software Engineer with a strong track record of simplifying
complex business workflows and driving efficiency through automation.

CURRENT STATUS:
• Modernizing healthcare workflows at BioIntelliSense, Inc.
• UC Berkeley Data Science graduate (Economics emphasis)
• Passionate about efficient, user-friendly solutions

PERSONALITY:
• Problem solver who turns manual processes into automated solutions
• Data enthusiast who finds insights in unexpected places
• Bridge-builder between technical and non-technical teams

INTERESTS:
• Automation and workflow improvement
• Statistical analysis and machine learning

Type 'resume' for the complete overview!
`;

        await this.typewriter.typeCommandOutput(whoamiText, element);
    }

    // Open external link
    openLink(url, element) {
        window.open(url, '_blank');
        this.typewriter.typeCommandOutput(`Opening ${url}...`, element);
    }

    // Command not found error
    async commandNotFound(command, element) {
        await this.typewriter.typeCommandOutput(
            `bash: ${command}: command not found\nType 'help' for available commands.`,
            element,
            true
        );
    }

    // Add command to history
    addToHistory(command) {
        this.commandHistory.push(command);
        this.historyIndex = this.commandHistory.length;
    }

    // Get previous command from history
    getPreviousCommand() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            return this.commandHistory[this.historyIndex];
        }
        return null;
    }

    // Get next command from history
    getNextCommand() {
        if (this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            return this.commandHistory[this.historyIndex];
        } else if (this.historyIndex === this.commandHistory.length - 1) {
            this.historyIndex++;
            return '';
        }
        return null;
    }

    // Get command completions for tab completion
    getCompletions(input) {
        const commandList = Object.keys(this.data.commands);
        const parts = input.split(' ');
        
        if (parts.length === 1) {
            // Complete command names
            return commandList.filter(cmd => cmd.startsWith(input));
        } else {
            // Complete file/directory names with full command
            const fileCompletions = this.filesystem.getCompletions(parts[parts.length - 1], commandList);
            const commandPrefix = parts.slice(0, -1).join(' ') + ' ';
            
            return fileCompletions.map(completion => commandPrefix + completion);
        }
    }

    // Reset history index
    resetHistoryIndex() {
        this.historyIndex = this.commandHistory.length;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Commands;
}