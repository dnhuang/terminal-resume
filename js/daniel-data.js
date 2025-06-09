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
• Python       - Primary language for data pipelines and automation
• Java         - Enterprise applications and backend development  
• SQL          - Database queries, optimization, and data analysis
• C            - Systems programming and performance-critical code
• Golang       - Microservices and cloud-native applications
• HTML5        - Modern web markup and semantic structure
• CSS          - Responsive design and user interface styling
• JavaScript   - Frontend interactivity and Node.js development
• XML          - Data interchange and configuration management
• zsh          - Shell scripting and automation
• VBA          - Office automation and macro development
• Matlab       - Scientific computing and data analysis

SPECIALTIES:
• ETL pipeline development and optimization
• Automation script creation for non-technical users
• Data visualization and dashboard creation
• Performance optimization and code refactoring`
                        },
                        "databases-cloud.txt": {
                            type: "file",
                            content: `DATABASES & CLOUD TECHNOLOGIES

DATABASES:
• MySQL        - Relational database design and optimization
• PostgreSQL   - Advanced SQL features and performance tuning
• SQLite       - Lightweight database for applications
• MongoDB      - NoSQL document store for flexible schemas
• Databricks   - Big data analytics and machine learning platform

CLOUD PLATFORMS:
• AWS EC2      - Virtual server management and scaling
• AWS S3       - Object storage and data archival
• AWS Lambda   - Serverless function development

CLOUD EXPERTISE:
• Infrastructure as Code (IaC) principles
• Cloud-native application development
• Serverless architecture design
• Data lake and warehouse implementation
• Cost optimization and resource management`
                        },
                        "data-science.txt": {
                            type: "file",
                            content: `DATA SCIENCE & ANALYTICS

STATISTICAL METHODS:
• Hypothesis testing     - A/B testing and significance analysis
• Bayesian hierarchical  - Advanced modeling for complex datasets
• GLMs                   - Generalized Linear Models for prediction
• Machine learning       - Supervised and unsupervised algorithms

ANALYSIS TECHNIQUES:
• Multiple hypothesis testing with corrections (Bonferroni, B-H)
• A/B testing framework design and implementation
• Ensemble model development and validation
• Time series analysis and forecasting
• Correlation analysis and causality investigation

MACHINE LEARNING:
• Ensemble methods (Random Forest, Gradient Boosting)
• Model validation and cross-validation techniques
• Feature engineering and selection
• Predictive analytics for business applications
• Performance metrics and model evaluation

TOOLS & FRAMEWORKS:
• Scikit-learn for machine learning pipelines
• Pandas for data manipulation and analysis
• NumPy for numerical computing
• Statistical analysis with R and Python`
                        },
                        "tools.txt": {
                            type: "file",
                            content: `DEVELOPMENT TOOLS & METHODOLOGIES

VERSION CONTROL:
• Git          - Advanced branching, merging, and collaboration
• GitHub       - Repository management and open source contributions
• Clean version control practices and merge conflict resolution

DEVELOPMENT TOOLS:
• Docker       - Containerization and deployment
• Jira         - Project management and issue tracking  
• Confluence   - Documentation and knowledge management
• Tableau      - Business intelligence and data visualization

METHODOLOGIES:
• Agile development principles and practices
• Code review processes and best practices
• Test-driven development (TDD)
• Continuous integration and deployment (CI/CD)
• Documentation-driven development

AUTOMATION & EFFICIENCY:
• Custom script development for workflow automation
• Macro creation for repetitive tasks
• User-friendly tool development for non-technical teams
• Process optimization and bottleneck identification
• Performance monitoring and optimization`
                        }
                    }
                },
                "experience": {
                    type: "directory",
                    contents: {
                        "biointelligence.txt": {
                            type: "file",
                            content: `BIOINTELLIGENCE, INC.
Software Engineer | Aug 2024 - Present

COMPANY OVERVIEW:
Healthcare technology company developing FDA-cleared multi-patient 
monitoring devices and data annotation solutions.

KEY ACHIEVEMENTS:

📊 Data Annotation Modernization
• Integrated Label Studio with company's AWS cloud infrastructure
• Eliminated need for physical notes in clinical workflows
• Significantly reduced time spent by partner physicians
• Streamlined data annotation process for healthcare professionals

🏥 FDA Clearance Contribution  
• Refined ETL pipelines for clinical data processing
• Developed data visualizations highlighting key device metrics
• Contributed to FDA clearance for multi-patient use devices
• Enabled new revenue growth opportunities through regulatory approval

🔧 Internal Tool Development
• Created portable software tools for clinical study workflows
• Developed user-friendly automation scripts for research teams
• Built macros to streamline repetitive clinical processes
• Focused on accessibility for non-technical research staff

TECHNICAL FOCUS:
• Healthcare data pipeline development
• AWS cloud infrastructure integration
• Clinical workflow automation
• FDA-compliant data visualization
• Cross-functional collaboration with medical professionals

IMPACT:
• Improved efficiency of clinical data annotation workflows
• Supported successful FDA device clearance process
• Enhanced productivity of non-technical research teams
• Contributed to company's regulatory and revenue milestones`
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

📈 Executive Reporting & Analytics
• Provided KPI insights to directors and managers
• Created curated visualizations for annual all-hands meeting
• Developed dashboards enabling data-informed decision making
• Presented complex data in accessible, actionable formats

🔄 Administrative Automation
• Wrote customized scripts for various administrative tasks
• Developed programs accessible to non-technical users
• Improved overall company efficiency through automation
• Created user-friendly interfaces for complex processes

TECHNICAL CONTRIBUTIONS:
• Real estate data pipeline architecture
• Business intelligence dashboard development
• Process automation for administrative workflows
• Cross-departmental tool development

BUSINESS IMPACT:
• Massive reduction in manual processing time
• Enhanced data accuracy and consistency
• Improved executive decision-making capabilities
• Increased operational efficiency across departments

SKILLS DEVELOPED:
• Real estate domain expertise
• Business process analysis and optimization
• Executive-level data presentation
• User experience design for internal tools`
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

LEADERSHIP & MANAGEMENT:
👥 Team Leadership
• Managed team of 7 developers and data scientists
• Delegated tasks based on individual strengths and expertise
• Maintained project timeline and milestone tracking
• Facilitated regular team meetings and progress reviews

🔧 Technical Management
• Enforced clean version control practices
• Minimized merge conflicts through pure function architecture
• Established coding standards and review processes
• Coordinated integration of different model components

DATA ENGINEERING:
📊 Data Collection & Processing
• Scraped World Cup records from multiple diverse sources
• Cleaned and consolidated data from various formats
• Transformed raw data into machine learning-ready datasets
• Handled missing data and inconsistencies across sources

MACHINE LEARNING:
🤖 Model Development
• Trained ensemble model combining multiple algorithms
• Implemented cross-validation for model reliability
• Fine-tuned hyperparameters for optimal performance
• Validated predictions against historical tournaments

RESULTS:
🏆 Predictions & Validation
• Predicted Argentina, Brazil, and Italy as potential winners
• Argentina actually won the tournament! 🇦🇷
• Demonstrated strong model performance and team execution
• Successfully delivered project on time with high accuracy

KEY LEARNINGS:
• Team management in technical projects
• Large-scale data integration challenges
• Ensemble method implementation
• Sports analytics and prediction modeling`
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
📊 Hypothesis Testing Framework
• Multiple hypothesis testing with proper corrections
• Naive, Bonferroni, and Benjamini-Hochberg (B-H) corrections
• A/B testing methodologies for significance validation
• Robust statistical inference procedures

🔍 Key Findings - GDP & Mobility
• Discovered significant correlation between GDP changes and residential mobility
• Confirmed statistical significance through multiple testing corrections
• Established robustness of findings across different analytical approaches
• Demonstrated economic-demographic relationship patterns

ADVANCED MODELING:
🧮 Bayesian Hierarchical Modeling
• Constructed sophisticated Bayesian hierarchical models
• Modeled complex, multi-level data structures
• Incorporated prior knowledge and uncertainty quantification
• Compared performance against traditional GLM approaches

⚖️ Model Comparison & Validation
• Contrasted Bayesian models with Generalized Linear Models (GLMs)
• Evaluated model fit and predictive performance
• Assessed assumption validity and model robustness
• Interpreted results in context of domain knowledge

INFRASTRUCTURE & SAFETY ANALYSIS:
🚗 Traffic Fatality Investigation
• Analyzed relationship between infrastructure spending and traffic fatalities
• Applied hierarchical modeling to multi-level government data
• Controlled for confounding variables and regional differences
• Investigated causal pathways and policy implications

TECHNICAL IMPLEMENTATION:
• Python for data processing and statistical analysis
• R for advanced Bayesian modeling
• Statistical libraries (scipy, statsmodels, PyMC3)
• Data visualization for result communication

RESEARCH IMPACT:
• Demonstrated sophisticated statistical analysis capabilities
• Contributed to understanding of economic-demographic relationships
• Provided insights into infrastructure investment effectiveness
• Showcased advanced modeling technique proficiency`
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
🔬 A/B Testing Framework
• Designed rigorous A/B testing methodology
• Established control and treatment group definitions
• Applied statistical significance testing
• Controlled for confounding variables and biases

📊 Statistical Analysis
• Implemented hypothesis testing for gender differences
• Calculated effect sizes and confidence intervals
• Applied multiple comparison corrections
• Validated results through cross-validation techniques

DATA COLLECTION:
🕸️ Web Scraping Operation
• Scraped publicly available "bio" data from computer science course staff
• Collected data across multiple semesters for temporal validation
• Ensured compliance with public data access policies
• Maintained data anonymization and privacy standards

📈 Dataset Characteristics
• Multi-semester longitudinal data collection
• Computer science academic context
• Standardized bio format for consistency
• Sufficient sample size for statistical power

KEY FINDINGS:
✅ Primary Research Results
• Established statistical significance in proper case usage differences
• Demonstrated measurable gender-based communication patterns
• Validated findings across multiple analytical approaches
• Confirmed robustness through sensitivity analysis

🔍 Peripheral Discovery
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
• Revealed broader implications beyond initial hypothesis

ETHICAL CONSIDERATIONS:
• Used only publicly available data
• Maintained participant anonymity
• Followed research ethics guidelines
• Considered broader implications of findings`
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
• Desire for data-driven personal financial insights
• Goal to optimize spending allocation and budgeting

DATA ENGINEERING:
💳 Data Consolidation
• Integrated credit card transaction data from all bank accounts
• Standardized data formats across different financial institutions
• Cleaned and normalized transaction descriptions and categories
• Handled data quality issues and duplicate transactions

🔄 ETL Pipeline Development
• Built automated data extraction processes
• Implemented data transformation for analysis readiness
• Created data validation and quality assurance steps
• Established data refresh and update mechanisms

ANALYTICAL INSIGHTS:
📊 Spending Pattern Analysis
• Categorized all transactions into meaningful spending categories
• Calculated percentage allocation across different expense types
• Identified seasonal and temporal spending patterns
• Analyzed transaction frequency and amount distributions

🍔 Key Finding - Food Expenditure Dominance
• Discovered food expenditures comprised 46% of total spending
• Identified this as significantly higher than expected
• Revealed opportunity for budget optimization
• Demonstrated value of data-driven personal insights

DASHBOARD DEVELOPMENT:
📈 Interactive Tableau Dashboard
• Created comprehensive interactive visualization platform
• Implemented drill-down capabilities for detailed analysis
• Designed user-friendly interface for self-service analytics
• Enabled dynamic filtering and time-based analysis

🎯 Dashboard Features
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
✅ Immediate Benefits
• Comprehensive understanding of personal finances
• Identification of largest spending category (food - 46%)
• Creation of sustainable monitoring framework
• Development of actionable insights for budget optimization

🚀 Long-term Value
• Ongoing dashboard for continuous financial monitoring
• Framework for future financial goal tracking
• Skills development in personal data analytics
• Template for similar personal optimization projects`
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
📊 Data Science Core
• Statistical analysis and hypothesis testing
• Machine learning algorithms and applications
• Data visualization and communication
• Programming for data science (Python, R, SQL)

💰 Economics Emphasis
• Microeconomic and macroeconomic theory
• Econometric analysis and modeling
• Economic data analysis and interpretation
• Policy analysis and economic research methods

🔬 Research & Analysis Skills
• Experimental design and A/B testing
• Causal inference and statistical modeling
• Data collection and survey methodology
• Quantitative research project management

KEY COURSEWORK:
• Principles of Data Science
• Statistical Methods for Data Science
• Machine Learning and Statistical Learning
• Economic Analysis and Policy
• Econometric Analysis
• Data Structures and Algorithms
• Database Systems and SQL

TECHNICAL SKILLS DEVELOPED:
• Python programming for data analysis
• R for statistical computing
• SQL for database management
• Statistical software (Stata, SPSS)
• Data visualization tools
• Version control with Git

ACADEMIC PROJECTS:
• Multi-semester data science capstone projects
• Economic research with real-world datasets
• Statistical analysis of policy interventions
• Machine learning applications to economic problems

UC BERKELEY EXPERIENCE:
🎓 Academic Excellence
• Rigorous quantitative curriculum
• Emphasis on practical application
• Integration of theory and hands-on experience
• Preparation for data-driven career paths

🌉 Campus & Community
• Access to cutting-edge research facilities
• Collaboration with world-class faculty
• Diverse academic and professional network
• Silicon Valley proximity and industry connections

PREPARATION FOR CAREER:
• Strong foundation in statistical analysis
• Practical experience with real-world datasets
• Understanding of economic principles and applications
• Technical skills in high-demand programming languages
• Critical thinking and problem-solving capabilities`
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
        
        // Easter egg commands
        'matrix': 'Matrix rain effect',
        'banner': 'Display ASCII art banner',
        'fortune': 'Random programming quotes',
        'cowsay': 'ASCII cow with message',
        'konami': 'Konami code easter egg'
    },

    // Fortune quotes for easter egg
    fortunes: [
        "The best way to predict the future is to implement it. - Alan Kay",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
        "First, solve the problem. Then, write the code. - John Johnson",
        "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
        "In order to be irreplaceable, one must always be different. - Coco Chanel",
        "Code is like humor. When you have to explain it, it's bad. - Cory House",
        "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
        "Debugging is twice as hard as writing the code in the first place. - Brian Kernighan",
        "Walking on water and developing software from a specification are easy if both are frozen. - Edward V. Berard"
    ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = danielData;
}