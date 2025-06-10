// File System Simulation Module
class FileSystem {
    constructor(data) {
        this.data = data;
        this.currentPath = '/';
        this.pathHistory = ['/'];
    }

    // Get current directory contents
    getCurrentDirectory() {
        const pathParts = this.currentPath.split('/').filter(part => part !== '');
        let current = this.data.filesystem['/'];
        
        for (const part of pathParts) {
            if (current.contents && current.contents[part]) {
                current = current.contents[part];
            } else {
                return null;
            }
        }
        
        return current;
    }

    // List directory contents
    listDirectory(path = null) {
        let targetPath;
        
        if (!path) {
            targetPath = this.currentPath;
        } else if (path.startsWith('/')) {
            // Absolute path
            targetPath = path;
        } else {
            // Relative path
            if (this.currentPath === '/') {
                targetPath = '/' + path;
            } else {
                targetPath = this.currentPath + '/' + path;
            }
        }
        
        // Normalize the path
        targetPath = this.normalizePath(targetPath);
        
        const dir = this.getDirectoryAtPath(targetPath);
        
        if (!dir) {
            return { error: `ls: cannot access '${path || targetPath}': No such file or directory` };
        }
        
        if (dir.type !== 'directory') {
            return { error: `ls: cannot access '${path || targetPath}': Not a directory` };
        }

        const contents = [];
        if (dir.contents) {
            for (const [name, item] of Object.entries(dir.contents)) {
                contents.push({
                    name: name,
                    type: item.type,
                    displayName: item.type === 'directory' ? `${name}/` : name
                });
            }
        }

        // Sort directories first, then files
        contents.sort((a, b) => {
            if (a.type === 'directory' && b.type !== 'directory') return -1;
            if (a.type !== 'directory' && b.type === 'directory') return 1;
            return a.name.localeCompare(b.name);
        });

        return { contents, path: targetPath };
    }

    // Change directory
    changeDirectory(targetPath) {
        if (!targetPath || targetPath === '') {
            this.currentPath = '/';
            return { success: true, path: this.currentPath };
        }

        let newPath;
        
        if (targetPath === '..') {
            // Go up one directory
            const pathParts = this.currentPath.split('/').filter(part => part !== '');
            pathParts.pop();
            newPath = pathParts.length > 0 ? '/' + pathParts.join('/') : '/';
        } else if (targetPath === '.') {
            // Stay in current directory
            newPath = this.currentPath;
        } else if (targetPath.startsWith('/')) {
            // Absolute path
            newPath = targetPath;
        } else {
            // Relative path
            const pathParts = this.currentPath.split('/').filter(part => part !== '');
            pathParts.push(targetPath);
            newPath = '/' + pathParts.join('/');
        }

        // Clean up path (remove double slashes, etc.)
        newPath = this.normalizePath(newPath);

        // Check if directory exists
        const targetDir = this.getDirectoryAtPath(newPath);
        if (!targetDir) {
            return { error: `cd: no such file or directory: ${targetPath}` };
        }
        
        if (targetDir.type !== 'directory') {
            return { error: `cd: not a directory: ${targetPath}` };
        }

        this.currentPath = newPath;
        this.pathHistory.push(newPath);
        return { success: true, path: this.currentPath };
    }

    // Get file or directory at specific path
    getDirectoryAtPath(path) {
        const normalizedPath = this.normalizePath(path);
        const pathParts = normalizedPath.split('/').filter(part => part !== '');
        
        let current = this.data.filesystem['/'];
        
        for (const part of pathParts) {
            if (current.contents && current.contents[part]) {
                current = current.contents[part];
            } else {
                return null;
            }
        }
        
        return current;
    }

    // Read file contents
    readFile(filename) {
        let filePath;
        
        if (filename.startsWith('/')) {
            // Absolute path
            filePath = filename;
        } else {
            // Relative path - can include subdirectories
            if (this.currentPath === '/') {
                filePath = '/' + filename;
            } else {
                filePath = this.currentPath + '/' + filename;
            }
        }

        // Normalize the path
        filePath = this.normalizePath(filePath);
        
        const file = this.getDirectoryAtPath(filePath);
        
        if (!file) {
            return { error: `cat: ${filename}: No such file or directory` };
        }
        
        if (file.type === 'directory') {
            return { error: `cat: ${filename}: Is a directory` };
        }
        
        return { content: file.content, filename: filename };
    }

    // Get current working directory path
    getCurrentPath() {
        return this.currentPath;
    }

    // Normalize path (remove double slashes, resolve . and ..)
    normalizePath(path) {
        if (!path || path === '') return '/';
        
        const parts = path.split('/').filter(part => part !== '' && part !== '.');
        const normalizedParts = [];
        
        for (const part of parts) {
            if (part === '..') {
                normalizedParts.pop();
            } else {
                normalizedParts.push(part);
            }
        }
        
        return normalizedParts.length > 0 ? '/' + normalizedParts.join('/') : '/';
    }

    // Get directory tree structure
    getDirectoryTree(path = '/', prefix = '', isLast = true) {
        const dir = this.getDirectoryAtPath(path);
        if (!dir || dir.type !== 'directory') {
            return '';
        }

        let tree = '';
        const contents = dir.contents || {};
        const entries = Object.entries(contents).sort(([,a], [,b]) => {
            if (a.type === 'directory' && b.type !== 'directory') return -1;
            if (a.type !== 'directory' && b.type === 'directory') return 1;
            return 0;
        });

        entries.forEach(([name, item], index) => {
            const isLastItem = index === entries.length - 1;
            const currentPrefix = isLastItem ? '└── ' : '├── ';
            const nextPrefix = prefix + (isLastItem ? '    ' : '│   ');
            
            const displayName = item.type === 'directory' ? `${name}/` : name;
            tree += `${prefix}${currentPrefix}${displayName}\n`;
            
            if (item.type === 'directory') {
                const childPath = path === '/' ? `/${name}` : `${path}/${name}`;
                tree += this.getDirectoryTree(childPath, nextPrefix, isLastItem);
            }
        });

        return tree;
    }

    // Tab completion for commands and paths
    getCompletions(input, commandsList = []) {
        const completions = [];
        
        // Handle path completion
        if (input.includes('/')) {
            // Path with directory separator
            const pathParts = input.split('/');
            const partialName = pathParts.pop();
            const dirPath = pathParts.join('/');
            
            let targetPath;
            if (input.startsWith('/')) {
                // Absolute path
                targetPath = '/' + dirPath;
            } else {
                // Relative path
                if (this.currentPath === '/') {
                    targetPath = dirPath ? '/' + dirPath : '/';
                } else {
                    targetPath = dirPath ? this.currentPath + '/' + dirPath : this.currentPath;
                }
            }
            
            targetPath = this.normalizePath(targetPath);
            const targetDir = this.getDirectoryAtPath(targetPath);
            
            if (targetDir && targetDir.type === 'directory' && targetDir.contents) {
                for (const [name, item] of Object.entries(targetDir.contents)) {
                    if (name.startsWith(partialName)) {
                        const completion = item.type === 'directory' ? `${name}/` : name;
                        const fullPath = dirPath ? `${dirPath}/${completion}` : completion;
                        completions.push(fullPath);
                    }
                }
            }
        } else {
            // Simple filename completion in current directory
            const currentDir = this.getCurrentDirectory();
            if (currentDir && currentDir.contents) {
                for (const [name, item] of Object.entries(currentDir.contents)) {
                    if (name.startsWith(input)) {
                        const completion = item.type === 'directory' ? `${name}/` : name;
                        completions.push(completion);
                    }
                }
            }
            
            // Complete command names
            for (const command of commandsList) {
                if (command.startsWith(input)) {
                    completions.push(command);
                }
            }
        }
        
        return completions;
    }

    // Check if path exists
    pathExists(path) {
        return this.getDirectoryAtPath(path) !== null;
    }

    // Get file type
    getFileType(path) {
        const item = this.getDirectoryAtPath(path);
        return item ? item.type : null;
    }

    // Get path breadcrumb for display
    getPathBreadcrumb() {
        if (this.currentPath === '/') {
            return '~';
        }
        
        const parts = this.currentPath.split('/').filter(part => part !== '');
        return '~/' + parts.join('/');
    }

    // Get parent directory path
    getParentPath() {
        if (this.currentPath === '/') {
            return '/';
        }
        
        const parts = this.currentPath.split('/').filter(part => part !== '');
        parts.pop();
        return parts.length > 0 ? '/' + parts.join('/') : '/';
    }

    // Search for files/directories by name
    searchFiles(query, searchPath = '/') {
        const results = [];
        
        const search = (path, dir) => {
            if (!dir || !dir.contents) return;
            
            for (const [name, item] of Object.entries(dir.contents)) {
                if (name.toLowerCase().includes(query.toLowerCase())) {
                    const fullPath = path === '/' ? `/${name}` : `${path}/${name}`;
                    results.push({
                        name: name,
                        path: fullPath,
                        type: item.type
                    });
                }
                
                if (item.type === 'directory') {
                    const childPath = path === '/' ? `/${name}` : `${path}/${name}`;
                    search(childPath, item);
                }
            }
        };
        
        const startDir = this.getDirectoryAtPath(searchPath);
        search(searchPath, startDir);
        
        return results;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FileSystem;
}