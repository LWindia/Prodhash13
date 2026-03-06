import { Course } from "../../types/courses";

export const specialisationInnlp: Course = {
    _id: "specialisation-in-nlp",
    title: "[B][R]Natural Language Processing (NLP) Training[/R][/B]",
    slug: "specialisation-in-nlp",
    rating: 4.8,
    totalRatings: 420,
    duration: "Intermediate",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    hours: "16+",
    price: 9999,
    originalPrice: 21999,
    enrolledStudents: 18200,
    category: "Artificial Intelligence",
    shortDescription: "Industry Relevant & Recognized Training | Gain Hands-On Experience | Best-In-Class Content | Real-World Use Cases.",
    paymentLink: "https://rzp.io/l/aws-devops-july2025",
    backgroundImage: "/assets/cources/courseDetails/6course/Natural-Language-Processing-(NLP)-Training.jpg",

learningOutcomes: [
    "Sentiment Analysis with TextBlob & Real-World Datasets",
    "Tokenization & Text Preprocessing Techniques",
    "Hands-On with NLP Libraries: NLTK & spaCy",
    "Named Entity Recognition (NER) and Rule-Based Matching",
        "Custom Attributes and Token Extension in spaCy",
        "Text Classification Techniques & TF-IDF Implementation",
        "And much more…"

    ],

features: [
    "Real-World NLP Projects to Boost Your Portfolio",
    "Lifetime Access to Training Materials & Updates",
    "Technical Support for 90 days",
    "Premium NLP Community Membership"

    ],

    skills: [
        "AWS CodeSuite (CodeBuild, CodePipeline, CodeDeploy)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Docker & Kubernetes on AWS",
        "Serverless CI/CD with Lambda",
        "Security & Compliance (AWS Config, GuardDuty)",
        "Cost optimization strategies"
    ],

    requirements: [
        "Basic AWS knowledge (EC2, S3, IAM)",
        "Familiarity with Linux commands",
        "Understanding of DevOps principles"
    ],

    level: "Intermediate",
    language: "English",
    lastUpdated: "2024-07",

    module: [
        
                {
                  id: 1,
                  title: "Introduction to NLP & Sentiment Analysis",
                  description: "Understand the difference between NLP and NLU. Learn how to extract sentiment from raw text using TextBlob.",
                  content: [
                    "Difference between NLP and NLU",
                    "Introduction to Sentiment Analysis",
                    "Implementation of TextBlob",
                    "Polarity, Subjectivity, Objectivity"
                  ]
                },
                {
                  id: 2,
                  title: "Sentiment Analysis with Data",
                  description: "Learn to handle text data using pandas and apply sentiment models to real-world datasets.",
                  content: [
                    "Dataset Handling using Pandas",
                    "Applying TextBlob on Dataset"
                  ]
                },
                {
                  id: 3,
                  title: "Tokenization & Text Preprocessing",
                  description: "Learn how to clean and prepare text data using NLP fundamentals.",
                  content: [
                    "Tokenization",
                    "Lemmatization",
                    "Stemming",
                    "Implementation using NLTK"
                  ]
                },
                {
                  id: 4,
                  title: "NLP Libraries: NLTK & spaCy",
                  description: "Explore advanced libraries for more efficient and accurate NLP workflows.",
                  content: [
                    "NLTK Installation",
                    "WordNet",
                    "spaCy Overview",
                    "Text Lowercasing Automation"
                  ]
                },
                {
                  id: 5,
                  title: "Natural Language Understanding (NLU)",
                  description: "Understand token representations and how spaCy interprets language at token level.",
                  content: [
                    "Introduction to spaCy",
                    "Token ID",
                    "Read Token",
                    "Token Mapping"
                  ]
                },
                {
                  id: 6,
                  title: "Named Entity Recognition (NER)",
                  description: "Extract meaningful named entities from text using rule-based and phrase matching.",
                  content: [
                    "NER in spaCy",
                    "Rule-Based Matching",
                    "Phrase Matcher",
                    "Hosting on Local IP"
                  ]
                },
                {
                  id: 7,
                  title: "spaCy Pipeline & Tokenizer",
                  description: "Customize and optimize NLP pipelines using spaCy’s advanced features.",
                  content: [
                    "spaCy Pipeline",
                    "Tokenizer",
                    "Analyze & Add Pipe",
                    "@language Decorator"
                  ]
                },
                {
                  id: 8,
                  title: "Custom Attributes in spaCy",
                  description: "Create and use your own metadata with tokens to build powerful language models.",
                  content: [
                    "spaCy Token Extension",
                    "Registering Custom Attributes"
                  ]
                },
                {
                  id: 9,
                  title: "Text Classification Techniques",
                  description: "Explore traditional NLP classification methods using preprocessed text data.",
                  content: [
                    "Use Case: Text Classification",
                    "Stemming vs Lemmatization"
                  ]
                },
                {
                  id: 10,
                  title: "TF-IDF & Final Model",
                  description: "Implement TF-IDF vectorization and build a complete classification model.",
                  content: [
                    "TF-IDF",
                    "Text Classification Model"
                  ]
                }
              
              
    ],

    highlights: [
        { number: "7", description: "Hands-On Modules" },
        { number: "20+", description: "AWS Labs" },
        { number: "3", description: "Capstone Projects" }
    ],

    certificateImage: "/assets/tools1/NLP1.jpg",

    project: [
        {
            icon: "/assets/icons/cicd.svg",
            title: "Multi-Stage CI/CD Pipeline",
            description: "Build a secure pipeline with CodeBuild and CodeDeploy",
            skills: ["CodePipeline", "IAM Roles", "Canary Testing"]
        },
        {
            icon: "/assets/icons/terraform.svg",
            title: "Infrastructure Automation",
            description: "Provision a VPC with Terraform modules",
            skills: ["Terraform", "Modules", "DRY Principles"]
        },
        {
            icon: "/assets/icons/kubernetes.svg",
            title: "EKS Cluster with GitOps",
            description: "Deploy apps using ArgoCD on EKS",
            skills: ["Kubernetes", "GitOps", "Helm Charts"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "Digital Marketers" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "Startup Founders –", text: "Startup Founders" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Infrastructure Engineers.jpg", alt: "Solopreneurs ", text: "Solopreneurs " },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/terraform/Site Reliability Engineers (SRE).jpg", alt: "Product Managers ", text: "Product Managers " },
        { src: "/assets/cources/courseDetails/terraform/Technical Co-Founders.jpg", alt: "Technical Managers", text: "Data Analytics Specialist" },
        { src: "/assets/cources/courseDetails/shell-scripting/Cloud Administrators.jpg", alt: "Cloud Architects", text: "Artificial Intelligence Consultant" },
        { src: "/assets/cources/courseDetails/terraform/IT Professionals seeking to enhance their DevOps skills.png", alt: "Working IT Professionals", text: "Working IT Professionals" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "College Students", text: "Natural Language Engineer" }
    ],

    toolsData: {
        sectionTitle: "Master NLP Concepts & Language Understanding",
        category: "",
        toolsCount: "",
        displayImage: "/assets/cources/courseDetails/6course/NLP.jpg",
        tools: [
                {
                  id: "python-libraries",
                  icon: "TrendingUp",
                  title: "Python Libraries: TextBlob, NLTK, spaCy, Pandas"
                },
                {
                  id: "nlu",
                  icon: "BarChart",
                  title: "Natural Language Understanding (NLU)"
                },
                {
                  id: "text-processing",
                  icon: "Cpu",
                  title: "Tokenization, Lemmatization, Stemming"
                },
                {
                  id: "ner-classification",
                  icon: "TrendingUp",
                  title: "NER, Phrase Matching, Text Classification"
                },
                {
                  id: "tfidf-logistic",
                  icon: "BarChart",
                  title: "TF-IDF, Logistic Regression, Confusion Matrix"
                }
              
              
        ]
    },
    programBy: "Vimal Daga"
};