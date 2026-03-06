import { Course } from "../../types/courses";

export const specialisationInnBeautifullsoup: Course = {
    _id: "master-web-scraping-with-beautifulsoup4",
    title:" [B][R]Master Web Scraping with Beautifulsoup4[/R][B] | Web Scraping Mastery in Python with BeautifulSoup",
    
    slug: "master-web-scraping-with-beautifulsoup4",
    rating: 5,
    totalRatings: 10,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    hours: "8+",
    // startDate: "Starting On 22nd March (Weekend Batch)",
    price: 2500,
    originalPrice: 7500,
    enrolledStudents: 12000,
    category: "Web Scraping & Data Extraction",
    shortDescription: "Weekend Live Batch",
    paymentLink: "https://rzp.io/rzp/GTSqlejo  ",
    backgroundImage: "/assets/AI (1).jpg",

    learningOutcomes: [
        "HTML/XML Parsing",
        "Data Extraction Techniques",
        "Handling Dynamic Content",
        "API Integration with Scraping",
        "Anti-Scraping Bypass",
        "Data Cleaning & Storage",
        "Ethical Scraping Best Practices"
    ],

    features: [
        "Real-World Scraping Projects",
        "Technical Support for 90 Days",
        "Premium #13 Python Community"
    ],

    skills: [
        "HTML/CSS Selectors",
        "XPath Queries",
        "Request Handling",
        "Data Parsing",
        "Pagination Handling",
        "Session Management",
        "CSV/JSON Export",
        "Scrapy Integration (Bonus)"
    ],
    requirements: [
        "Basic Python Knowledge",
        "Familiarity with HTML",
        "No prior scraping experience needed"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",


    module: [
        {
            id: 1,
            title: "Introduction to Web Scraping & BeautifulSoup4",
            description: "Learn the fundamentals of web scraping and how BeautifulSoup4 fits in.",
            content: [
                "What is Web Scraping? (Legality & Ethics)",
                "BeautifulSoup4 vs Scrapy vs Selenium",
                "Installing BS4 (`pip install beautifulsoup4`)",
                "Basic HTML Structure for Scraping"
            ]
        },
        {
            id: 2,
            title: "Setting Up Your Scraping Environment",
            description: "Configure Python, BS4, and libraries like `requests` and `lxml`.",
            content: [
                "Installing `requests` and `lxml`",
                "Choosing a Parser (`html.parser` vs `lxml`)",
                "Making Your First HTTP Request",
                "Inspecting Websites (DevTools)"
            ]
        },
        {
            id: 3,
            title: "Parsing HTML with BeautifulSoup4",
            description: "Master navigating the DOM tree and extracting data.",
            content: [
                "`soup.find()` vs `soup.find_all()`",
                "Extracting Text (`element.text`)",
                "Getting Attributes (`element.get('href')`)",
                "CSS Selectors (`soup.select()`)"
            ]
        },
        {
            id: 4,
            title: "Advanced Data Extraction",
            description: "Scrape tables, lists, nested elements, and paginated data.",
            content: [
                "Scraping Tables to Pandas DataFrames",
                "Handling Pagination (Next Page Logic)",
                "Nested Data Extraction (e.g., Product Reviews)",
                "Regex with BeautifulSoup"
            ]
        },
        {
            id: 5,
            title: "Handling Dynamic Content & Anti-Scraping",
            description: "Learn to bypass CAPTCHAs, rate limits, and JavaScript-heavy sites.",
            content: [
                "User-Agents and Headers",
                "Proxies & Rotation (Avoiding IP Bans)",
                "Delays & Backoff Strategies",
                "Selenium + BS4 Hybrid Approach"
            ]
        },
        {
            id: 6,
            title: "APIs and Web Scraping",
            description: "Combine APIs with scraping for efficient data collection.",
            content: [
                "Reverse-Engineering APIs from Websites",
                "Scraping + API Hybrid Workflows",
                "JSON Parsing with BS4",
                "Rate Limit Handling"
            ]
        },
        {
            id: 7,
            title: "Real-World Scraping Projects",
            description: "Build practical scrapers for e-commerce, news, and social media.",
            content: [
                "Amazon Product Price Tracker",
                "News Headline Scraper (BBC, CNN)",
                "Twitter Trends Extraction",
                "Job Listings Aggregator (LinkedIn/Indeed)"
            ]
        },
        {
            id: 8,
            title: "Deployment & Best Practices",
            description: "Schedule scrapers, store data, and avoid legal pitfalls.",
            content: [
                "Scheduling Scrapers (Cron Jobs)",
                "Storing Data (CSV, SQLite, MongoDB)",
                "Robots.txt & Ethical Guidelines",
                "Deploying to Cloud (AWS Lambda)"
            ]
        }
    ],
    

    highlights: [
        { number: "8", description: "Modules" },
        { number: "10+", description: "Hours of Learning" },
        { number: "4+", description: "Hands-On Projects" }
    ],

    certificateImage: "/assets/certificate/beautifulsoup.jpg",

  
    project: [
        {  
            icon:"",
            title: "E-Commerce Price Monitor",
            description: "Scrape Amazon/Flipkart to track price drops and alert via email.",
            skills: ["BS4", "SMTP", "Pandas"]
        },
        {
            icon:"",
            title: "News Aggregator",
            description: "Extract headlines from 5+ news sites and summarize them.",
            skills: ["BS4", "API Integration", "NLP (Basic)"]
        },
        {
            icon:"",
            title: "LinkedIn Job Scraper",
            description: "Scrape job listings by keyword and save to Google Sheets.",
            skills: ["BS4", "Google Sheets API", "Authentication"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "Data Scientists" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "Startup Founders –", text: "Digital Marketers" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "Researchers" },
        { src: "/assets/cources/courseDetails/terraform/Infrastructure Engineers.jpg", alt: "Solopreneurs ", text: "Startup Founders " },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/terraform/Site Reliability Engineers (SRE).jpg", alt: "Product Managers ", text: "Product Managers " },
        { src: "/assets/cources/courseDetails/terraform/Technical Co-Founders.jpg", alt: "Technical Managers", text: "Data Analytics Specialist" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Architects", text: "Python Developers" },
        { src: "/assets/cources/courseDetails/terraform/IT Professionals seeking to enhance their DevOps skills.png", alt: "Working IT Professionals", text: "Freelancers" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "College Students", text: "Natural Language Engineer" }
    ],

    toolsData: {
        sectionTitle: "Complete Web Scraping Program",
        category: "Data Extraction & Automation",
        toolsCount: "10+",
        displayImage: "/assets/cources/courseDetails/bs4/bs4.jpg",
        tools: [
            {
                id: "bs4",
                icon: "TrendingUp",
                title: "Master BeautifulSoup4 for HTML/XML Parsing"
            },
            {
                id: "selenium",
                icon: "BarChart",
                title: "Handle JavaScript-Rendered Pages"
            },
            {
                id: "apis",
                icon: "TrendingUp",
                title: "Integrate APIs with Scraping Workflows"
            },
            {
                id: "storage",
                icon: "Cpu",
                title: "Store Data in CSV, SQL, or NoSQL"
            },
            {
                id: "ethics",
                icon: "TrendingUp",
                title: "Learn Ethical Scraping Practices"
            }
        ]
    },
    programBy: "Vimal Daga"
}