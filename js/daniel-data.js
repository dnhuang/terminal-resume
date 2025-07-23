// Daniel Huang Resume Data
const danielData = {
    // Personal Information
    personal: {
        name: "Daniel Huang",
        email: "daniel.n.huang@gmail.com",
        linkedin: "linkedin.com/in/dnhuang",
        github: "github.com/dnhuang",
        title: "Software Engineer",
        location: "United States"
    },

    // ASCII Art Banner
    asciiBanner: `
 ____    _    _   _ ___ _____ _       _   _ _   _    _    _   _  ____ 
|  _ \\  / \\  | \\ | |_ _| ____| |     | | | | | | |  / \\  | \\ | |/ ___|
| | | |/ _ \\ |  \\| || ||  _| | |     | |_| | | | | / _ \\ |  \\| | |  _ 
| |_| / ___ \\| |\\  || || |___| |___  |  _  | |_| |/ ___ \\| |\\  | |_| |
|____/_/   \\_\\_| \\_|___|_____|_____| |_| |_|\\___//_/   \\_\\_| \\_|\\____|

Software Engineer | Data Science | UC Berkeley
`,

    // Welcome message
    welcomeMessage: `Welcome to Daniel's terminal resume!
Type 'help' to see available commands or 'resume' for a quick overview.
Navigate through the filesystem with 'ls', 'cd', and 'cat' commands.

guest@resume:~$ `,

    // File system structure
    filesystem: {
        "/": {
            type: "directory",
            contents: {
                "about.txt": {
                    type: "file",
                    content: `ABOUT DANIEL HUANG

Software Engineer with a strong passion in automation and all things data.
Currently modernizing healthcare data workflows at BioIntelliSense, Inc.

BACKGROUND:
• UC Berkeley Data Science graduate
• Experience in healthcare tech and real estate technology sectors
• Driven to streamline and automate complex business processes.

CURRENT FOCUS:
• Modernizing clinical data annotation workflows
• Contributing to FDA clearance processes for medical devices
• Developing automation tools for clinical research teams

INTERESTS:
• Automation and workflow improvement
• Statistical analysis and machine learning`
                },
                "contact.txt": {
                    type: "file",
                    content: `CONTACT INFORMATION

Email:     daniel.n.huang@gmail.com
LinkedIn:  linkedin.com/in/dnhuang
GitHub:    github.com/dnhuang

PROFESSIONAL PROFILES:
• LinkedIn: Connect for professional networking
• GitHub: Check out my code repositories and contributions
• Email: Best way to reach me for opportunities

LOCATION: United States

AVAILABILITY: Open to new opportunities and interesting projects`
                },
                "skills": {
                    type: "directory",
                    contents: {
                        "programming.txt": {
                            type: "file",
                            content: `PROGRAMMING LANGUAGES & TECHNOLOGIES

LANGUAGES:
• Python
• Java
• C
• Go
• JavaScript
• HTML/CSS
• zsh`
                        },
                        "databases-cloud.txt": {
                            type: "file",
                            content: `DATABASES & CLOUD TECHNOLOGIES

DATABASES & CLOUD PLATFORMS:
• SQL (PostgreSQL, MySQL)
• MongoDB
• AWS (S3, EC2, Lambda)
• Databricks`
                        },
                        "data-science.txt": {
                            type: "file",
                            content: `DATA SCIENCE & ANALYTICS

STATISTICAL METHODS:
• Hypothesis testing
• Bayesian hierarchical
• GLMs
• Machine learning

TOOLS & FRAMEWORKS:
• Scikit-learn for machine learning pipelines
• Pandas for data manipulation and analysis
• NumPy for numerical computing
• Statistical analysis with R and Python`
                        },
                        "tools.txt": {
                            type: "file",
                            content: `DEVELOPMENT TOOLS & METHODOLOGIES

DEVELOPMENT TOOLS:
• Git
• Docker
• Jira`
                        }
                    }
                },
                "experience": {
                    type: "directory",
                    contents: {
                        "biointellisense.txt": {
                            type: "file",
                            content: `BIOINTELLISENSE, INC.
Software Engineer | Aug 2024 - Present

COMPANY OVERVIEW:
Healthcare technology company developing FDA-cleared multi-patient 
monitoring devices and data annotation solutions.

KEY ACHIEVEMENTS:

Data Annotation Pipeline
• Integrated Label Studio with company's AWS cloud infrastructure
• Eliminated need for physical notes in clinical workflows
• Significantly reduced time spent by partner physicians
• Streamlined data annotation process for healthcare professionals

FDA Clearance Contribution  
• Refined ETL pipelines for clinical data processing
• Developed data visualizations highlighting key device metrics
• Contributed to FDA clearance for multi-patient use devices
• Enabled new revenue growth opportunities through regulatory approval

Internal Tool Development
• Created portable software tools for clinical study workflows
• Developed user-friendly automation scripts for research teams
• Built macros to streamline repetitive clinical processes
• Focused on accessibility for non-technical research staff`
                        },
                        "entrust-group.txt": {
                            type: "file",
                            content: `THE ENTRUST GROUP
Real Estate Associate | Jul 2023 - Jan 2024

COMPANY OVERVIEW:
Real estate investment and transaction management company
focused on process optimization and data-driven decisions.

KEY ACHIEVEMENTS:

⚡ ETL Pipeline Automation
• Designed and implemented comprehensive ETL pipeline
• Automated real estate transaction reporting processes
• Reduced hundreds of manual work hours to single program run
• Ensured strict adherence to business requirements and compliance

Executive Reporting & Analytics
• Provided KPI insights to directors and managers
• Created curated visualizations for annual all-hands meeting
• Developed dashboards enabling data-informed decision making
• Presented complex data in accessible, actionable formats

Administrative Automation
• Wrote customized scripts for various administrative tasks
• Developed programs accessible to non-technical users
• Improved overall company efficiency through automation
• Created user-friendly interfaces for complex processes`
                        }
                    }
                },
                "projects": {
                    type: "directory",
                    contents: {
                        "fifa-predictor.txt": {
                            type: "file",
                            content: `FIFA WORLD CUP 2022 PREDICTOR
Team Leadership & Machine Learning Project

PROJECT OVERVIEW:
Led a team of seven to develop an ensemble machine learning model
for predicting FIFA World Cup 2022 winners using historical data.

TECHNOLOGIES USED:
• Python for data processing and model development
• Machine learning libraries (scikit-learn, pandas, numpy)
• Web scraping tools for data collection
• Git for version control and team collaboration

RESULTS:
• Predicted Argentina, Brazil, and Italy as potential winners
• Argentina actually won the tournament! 🇦🇷
• Demonstrated strong model performance and team execution`
                        },
                        "mobility-gdp.txt": {
                            type: "file",
                            content: `MOBILITY AND US GDP RELATIONSHIP STUDY
Statistical Analysis & Bayesian Modeling Project

PROJECT OVERVIEW:
Comprehensive statistical analysis investigating the relationship
between economic indicators and population mobility patterns,
with additional research into traffic safety factors.

RESEARCH QUESTIONS:
• How do GDP changes correlate with residential mobility patterns?
• What is the relationship between infrastructure spending and traffic fatalities?
• Can we establish statistical significance in these relationships?

STATISTICAL METHODOLOGY:
Hypothesis Testing Framework
• Multiple hypothesis testing with proper corrections
• Naive, Bonferroni, and Benjamini-Hochberg (B-H) corrections
• A/B testing methodologies for significance validation

Key Findings - GDP & Mobility
• Discovered significant correlation between GDP changes and residential mobility
• Confirmed statistical significance through multiple testing corrections
• Established robustness of findings across different analytical approaches
• Demonstrated economic-demographic relationship patterns

Bayesian Hierarchical Modeling
• Constructed sophisticated Bayesian hierarchical models
• Modeled complex, multi-level data structures
• Compared performance against traditional GLM approaches

Traffic Fatality Investigation
• Analyzed relationship between infrastructure spending and traffic fatalities
• Applied hierarchical modeling to multi-level government data
• Controlled for confounding variables and regional differences`
                        },
                        "gender-case-study.txt": {
                            type: "file",
                            content: `GENDER PROPER CASE USAGE ANALYSIS
A/B Testing & Data Collection Project

PROJECT INSPIRATION:
Inspired by a friendly debate among friends about writing patterns,
this project investigates gender differences in "proper case usage"
in digital communication.

RESEARCH OBJECTIVE:
Analyze whether there are statistically significant differences
in proper case usage between genders in professional contexts.

METHODOLOGY:
A/B Testing Framework
• Designed rigorous A/B testing methodology
• Established control and treatment group definitions
• Applied statistical significance testing
• Controlled for confounding variables and biases

Statistical Analysis
• Implemented hypothesis testing for gender differences
• Calculated effect sizes and confidence intervals
• Applied multiple comparison corrections
• Validated results through cross-validation techniques

DATA COLLECTION:
Web Scraping Operation
• Scraped publicly available "bio" data from computer science course staff
• Collected data across multiple semesters for temporal validation
• Ensured compliance with public data access policies
• Maintained data anonymization and privacy standards

Dataset Characteristics
• Multi-semester longitudinal data collection
• Computer science academic context
• Standardized bio format for consistency
• Sufficient sample size for statistical power

KEY FINDINGS:
Primary Research Results
• Established statistical significance in proper case usage differences
• Demonstrated measurable gender-based communication patterns
• Validated findings across multiple analytical approaches
• Confirmed robustness through sensitivity analysis

Peripheral Discovery
• Uncovered evidence of gender hiring gap in academic settings
• Identified unexpected patterns in faculty composition
• Highlighted broader diversity and inclusion considerations
• Demonstrated value of exploratory data analysis

TECHNICAL IMPLEMENTATION:
• Python for web scraping and data processing
• Statistical analysis with scipy and statsmodels
• Data visualization with matplotlib and seaborn
• Text processing and natural language analysis

RESEARCH SIGNIFICANCE:
• Demonstrated ability to turn casual observations into rigorous research
• Showcased end-to-end research project management
• Applied statistical rigor to social science questions
• Revealed broader implications beyond initial hypothesis`
                        },
                        "spending-dashboard.txt": {
                            type: "file",
                            content: `PERSONAL SPENDING DASHBOARD
Data Integration & Visualization Project

PROJECT OVERVIEW:
Comprehensive personal finance analysis project involving
data consolidation from multiple financial accounts and
interactive dashboard development.

BUSINESS PROBLEM:
• Lack of unified view across multiple bank accounts
• Need for spending pattern identification and analysis

DATA ENGINEERING:
Data Consolidation
• Integrated credit card transaction data from all bank accounts
• Standardized data formats across different financial institutions
• Cleaned and normalized transaction descriptions and categories
• Handled data quality issues and duplicate transactions

ETL Pipeline Development
• Built automated data extraction processes
• Implemented data transformation for analysis readiness
• Created data validation and quality assurance steps
• Established data refresh and update mechanisms

ANALYTICAL INSIGHTS:
Spending Pattern Analysis
• Categorized all transactions into meaningful spending categories
• Calculated percentage allocation across different expense types
• Identified seasonal and temporal spending patterns
• Analyzed transaction frequency and amount distributions

Key Finding - Food Expenditure Dominance
• Discovered food expenditures comprised 46% of total spending
• Identified this as significantly higher than expected
• Revealed opportunity for budget optimization
• Demonstrated value of data-driven personal insights

DASHBOARD DEVELOPMENT:
Interactive Tableau Dashboard
• Created comprehensive interactive visualization platform
• Implemented drill-down capabilities for detailed analysis
• Designed user-friendly interface for self-service analytics
• Enabled dynamic filtering and time-based analysis

Dashboard Features
• Monthly and yearly spending trend visualization
• Category-wise spending breakdown with percentages
• Transaction-level detail views and filtering
• Budget vs actual spending comparison tools
• Spending prediction and forecasting capabilities

TECHNICAL IMPLEMENTATION:
• Data extraction from multiple banking APIs and CSV exports
• Python for data processing and transformation
• SQL for data storage and complex queries
• Tableau for interactive dashboard development
• Data validation and quality assurance processes

PERSONAL IMPACT:
• Achieved clear visibility into personal spending patterns
• Enabled data-driven budgeting decisions
• Identified specific areas for spending optimization
• Created ongoing monitoring and tracking system

PROJECT OUTCOMES:
Immediate Benefits
• Comprehensive understanding of personal finances
• Identification of largest spending category (food - 46%)
• Creation of sustainable monitoring framework
• Development of actionable insights for budget optimization`
                        }
                    }
                },
                "education": {
                    type: "directory",
                    contents: {
                        "uc-berkeley.txt": {
                            type: "file",
                            content: `UNIVERSITY OF CALIFORNIA, BERKELEY
Bachelor of Arts, Data Science | December 2022

DEGREE DETAILS:
Program: Bachelor of Arts in Data Science
Emphasis: Economics
Graduation: December 2022
Institution: University of California, Berkeley

ACADEMIC FOCUS:
Data Science Core
• Statistical analysis and hypothesis testing
• Machine learning algorithms and applications
• Data visualization and communication
• Programming for data science (Python, SQL)

Economics Emphasis
• Microeconomic theory
• Econometric analysis and modeling
• Economic data analysis and interpretation

KEY COURSEWORK:
• Principles of Data Science
• Statistical Methods for Data Science
• Machine Learning and Statistical Learning
• Data Structures and Algorithms
• Database Systems and SQL
• Probabilty and Discrete Math

TECHNICAL SKILLS DEVELOPED:
• Python programming for data analysis
• SQL for database management
• Data visualization tools
• Version control with Git`
                        }
                    }
                }
            }
        }
    },

    // Command help information
    commands: {
        // Standard Unix commands
        'ls': 'List directory contents',
        'cd': 'Change directory',
        'cat': 'Display file contents',
        'pwd': 'Print working directory',
        'clear': 'Clear terminal screen',
        'help': 'Display available commands',
        'history': 'Show command history',
        'tree': 'Display directory tree structure',
        
        // Custom resume commands
        'resume': 'Display complete resume overview',
        'skills': 'Show technical skills summary',
        'experience': 'List work experience',
        'projects': 'Display portfolio projects',
        'contact': 'Show contact information',
        'whoami': 'Personal introduction',
        'education': 'Show education background',
    },

    // Fortune quotes for easter egg
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = danielData;
}