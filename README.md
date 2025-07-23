# Terminal Resume

Interactive terminal-themed resume website to showcase my background. It simulates a real Unix command-line interface where you can navigate through my professional story using actual terminal commands.

## Usage 

Open `index.html` in your browser. Type `help` to see commands. 

## Features 

### Unix Terminal Feeling
- **Classic Look**: That nostalgic green-on-black terminal vibe with a blinking cursor
- **Authentic Behavior**: Proper spacing, monospace fonts, and realistic terminal window

### File System
- **Real Unix Commands**: Use `ls`, `cd`, `cat`, `pwd`, `tree`, `clear`, `history`, `help` like a pro
- **Smart Paths**: Works with both relative (`education/uc-berkeley.txt`) and absolute (`/education/uc-berkeley.txt`) paths
- **Tab Completion**: Because who wants to type everything out? Hit tab to auto-complete!

### ⌨️ Commands

#### Navigation 
```bash
ls                    # See what's in the current folder
ls <folder>           # Check out a specific folder
cd <folder>           # Jump into a directory
cd ..                 # Go back up one level
cat <file.txt>        # Read a file
cat <folder>/<file.txt>  # Show file in a subdirectory
pwd                   # Present working directory
tree                  # See the whole file structure
```

#### Resume Commands 
```bash
resume                # Background overview 
whoami                # daniel 
help                  # Show all available commands 
```

#### Utilities
```bash
clear                 # Clean up the screen
history               # See what commands you've used
linkedin              # Open LinkedIn profile 
github                # Open GitHub profile 
```

### Additional Features
- **Command History**: Use up/down arrows to cycle through previous commands
- **Tab Completion**: Autocompletes paths and commands 
- **Keyboard Shortcuts**:
  - `Ctrl+L` - Clear the screen
  - `Ctrl+C` - Stop whatever's happening
  - `↑/↓` - Browse your command history
