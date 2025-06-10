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

#### Getting Around
```bash
ls                    # See what's in the current folder
ls education          # Check out my education folder
cd education          # Jump into the education directory
cd ..                 # Go back up
cat about.txt         # Read my about file
cat education/uc-berkeley.txt  # Dive into my Berkeley experience
pwd                   # Where am I right now?
tree                  # See the whole file structure
```

#### Learning About Me
```bash
resume                # Get the full overview of my background
whoami                # Who am I? (spoiler: I'm Daniel!)
help                  # Show all the commands you can use
```

#### Handy Utilities
```bash
clear                 # Clean up the screen
history               # See what commands you've used
linkedin              # Jump to my LinkedIn profile
github                # Check out my GitHub repos
```

### 🎯 Additional Features
- **Command History**: Use up/down arrows to cycle through previous commands
- **Tab Completion**: Autocompletes paths and commands 
- **Keyboard Shortcuts**:
  - `Ctrl+L` - Clear the screen
  - `Ctrl+C` - Stop whatever's happening
  - `↑/↓` - Browse your command history
