import { Course } from "../../types/courses";

export const specialisationInAWSCSA: Course = {
    _id: "aws-certified-solutions-architect",
    title: "[B][R] AWS Certified Solutions Architect (CSA) - Associate Training[/R][/B] ",
    slug: "aws-certified-solutions-architect",
    rating: 5,
    totalRatings: 15,
    duration: "Beginner to Advance",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Your Name",
    hours: "28+",
    price: 4500 ,
    originalPrice: 16000,
    enrolledStudents: 15000,
    category: "Cloud Computing",
    shortDescription: "End-to-End, Hands-On AWS Training Designed for Real-World Cloud Architects Covers 25+ Core AWS Services Including EC2, VPC, Lambda, CloudFormation, and RDS With Production-Grade Deployments, Security, and Cost Optimization Strategies",
    paymentLink: "https://rzp.io/rzp/rb2ViI5f",
    backgroundImage: "/assets/cources/courseDetails/6course/aws-csa1 (1).jpg",

    learningOutcomes: [
        "AWS Core Services & Architecture Principles",
        "High Availability & Scalable Systems Design",
        "Security & Compliance in AWS",
        "Cost-Optimization Strategies",
        "Disaster Recovery Planning",
        "Network Architecture Design"
    ],

    features: [
        "Official AWS Certification Exam Preparation",
        "Technical Support for 120 days",
        "Real-World Architecture Projects",
        "Premium AWS Community Access",
        "Practice Tests & Quizzes"
    ],

    skills: [
        "AWS Services Management",
        "Cloud Architecture Design",
        "Security Implementation",
        "Cost Optimization",
        "High Availability Design",
        "Disaster Recovery",
        "Performance Optimization",
        "Migration Planning"
    ],

    requirements: [
        "Basic IT knowledge",
        "Understanding of basic networking concepts",
        "Familiarity with operating systems",
        "Basic understanding of databases"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",

   
    module: [
       
            {
              id: 1,
              title: "AWS Cloud Introduction",
              description: "Understanding the fundamentals of AWS and cloud adoption",
              content: [
                "AWS Regions & Availability Zones",
                "EC2 Overview & Instance Types",
                "Introduction to AWS CLI"
              ]
            },
            {
              id: 2,
              title: "EC2 & Networking",
              description: "Set up and manage EC2 instances, VPC & Networking",
              content: [
                "EC2 Setup & Key Pair Management",
                "VPC Configuration & Subnetting",
                "Security Groups, NACLs, and Route Tables"
              ]
            },
            {
              id: 3,
              title: "Elastic Load Balancing (ELB)",
              description: "Distribute traffic efficiently using ELB",
              content: [
                "Classic Load Balancer, ALB, and NLB Setup",
                "Auto Scaling Integration with ELB",
                "Health Checks & Security"
              ]
            },
            {
              id: 4,
              title: "Storage & Databases",
              description: "Leverage AWS storage solutions",
              content: [
                "EBS, S3, Glacier & their use cases",
                "S3 Versioning, Encryption, and Access Control",
                "RDS, DynamoDB, and Database Replication"
              ]
            },
            {
              id: 5,
              title: "AWS Identity and Access Management (IAM)",
              description: "Secure access control for AWS resources",
              content: [
                "IAM Roles, Users, and Policies",
                "MFA Setup & Best Practices",
                "Temporary Security Credentials with STS"
              ]
            },
            {
              id: 6,
              title: "Serverless Architecture with AWS Lambda",
              description: "Build scalable serverless applications",
              content: [
                "Lambda Functions and Triggers",
                "API Gateway Integration",
                "DynamoDB Integration with Lambda"
              ]
            },
            {
              id: 7,
              title: "CloudFormation & Infrastructure as Code (IaC)",
              description: "Automate infrastructure provisioning",
              content: [
                "CloudFormation Templates",
                "Stacks & Change Sets",
                "CloudFormation and AWS CLI Integration"
              ]
            },
            {
              id: 8,
              title: "Monitoring & Security",
              description: "Track resources and monitor system health",
              content: [
                "AWS CloudWatch & Alarms",
                "CloudTrail for auditing and security",
                "AWS Shield & WAF for enhanced security"
              ]
            },
            {
              id: 9,
              title: "Networking in AWS",
              description: "Set up VPC and configure network services",
              content: [
                "Creating Private & Public Subnets",
                "VPN, Direct Connect, and Peering Connections",
                "Route 53 DNS Configuration"
              ]
            },
            {
              id: 10,
              title: "High Availability & Fault Tolerance",
              description: "Design for high availability in AWS",
              content: [
                "Multi-AZ and Multi-Region Deployments",
                "Elastic Load Balancing & Auto Scaling",
                "S3 Cross-Region Replication"
              ]
            },
            {
              id: 11,
              title: "AWS Elastic Beanstalk",
              description: "Deploy and manage web applications easily",
              content: [
                "Beanstalk Environment Setup",
                "Version Management & Rolling Updates",
                "Integrating with RDS and DynamoDB"
              ]
            },
            {
              id: 12,
              title: "Content Delivery & CDN with CloudFront",
              description: "Deliver content globally with CloudFront",
              content: [
                "Setting Up CloudFront Distributions",
                "Caching, Security, and Custom Domains",
                "Performance Optimization with Edge Locations"
              ]
            },
            {
              id: 13,
              title: "AWS Lambda & Step Functions",
              description: "Orchestrate serverless workflows",
              content: [
                "Integrating AWS Step Functions with Lambda",
                "Event-Driven Architectures",
                "Step Functions Workflow Design"
              ]
            },
            {
              id: 14,
              title: "Database Solutions in AWS",
              description: "Understand AWS database services",
              content: [
                "RDS, Aurora, and DynamoDB",
                "Database Migration Services (DMS)",
                "Redundancy and Backup Options"
              ]
            },
            {
              id: 15,
              title: "Security Best Practices",
              description: "Secure AWS resources and data",
              content: [
                "Implementing IAM Best Practices",
                "Encryption with KMS & CloudHSM",
                "Securing Data in Transit & At Rest"
              ]
            },
            {
              id: 16,
              title: "Cost Management & Optimization",
              description: "Control AWS costs and billing",
              content: [
                "AWS Pricing Calculator & Billing Dashboard",
                "EC2 Reserved Instances & Savings Plans",
                "Cost Optimization with S3 Lifecycle Policies"
              ]
            },
            {
              id: 17,
              title: "Exam Preparation & Final Review",
              description: "Prepare for the AWS Certified Solutions Architect - Associate exam",
              content: [
                "Exam Overview & Tips",
                "Practice Tests and Mock Exams",
                "Final Q&A and Review"
              ]
            }
          
          
    ],

    highlights: [
        {
            number: "17",
            description: "Modules"
        },
        {
            number: "28+",
            description: "Hours of learning"
        },
        {
            number: "4",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/AWS Certified Solutions Architect (CSA) - Associate Training (1).jpg",

    project: [
        {
            icon: "",
            title: "Highly Available Web Application",
            description: "Design and deploy a fault-tolerant web application architecture",
            skills: ["EC2", "Auto Scaling", "Load Balancing", "RDS Multi-AZ"]
        },
        {
            icon: "",
            title: "Serverless Data Processing",
            description: "Build a serverless data processing pipeline",
            skills: ["Lambda", "S3", "DynamoDB", "API Gateway"]
        },
        {
            icon: "",
            title: "Disaster Recovery Solution",
            description: "Implement a cross-region disaster recovery solution",
            skills: ["Route 53", "S3 Replication", "Aurora Global Database"]
        },
        {
            icon: "",
            title: "Microservices Architecture",
            description: "Design a containerized microservices architecture",
            skills: ["ECS", "ECR", "VPC", "Application Load Balancer"]
        }
    ],

    programFor: [
        { src: "/assets/cources/programFor/programfor1.jpg", alt: "Solutions Architects", text: "Solutions Architects" },
        { src: "/assets/cources/programFor/programfor2.jpg", alt: "Cloud Engineers", text: "Cloud Engineers" },
        { src: "/assets/cources/programFor/programfor3.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/programFor/programfor4.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/programFor/programfor5.jpg", alt: "IT Managers", text: "IT Managers" },
        { src: "/assets/cources/programFor/programfor6.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/programFor/programfor7.jpg", alt: "Technical Consultants", text: "Technical Consultants" },
        { src: "/assets/cources/programFor/programfor8.jpg", alt: "College Students", text: "College Students" },
        { src: "/assets/cources/programFor/programfor9.jpg", alt: "Cloud Architects", text: "Cloud Architects" },
        { src: "/assets/cources/programFor/programfor10.jpg", alt: "Infrastructure Engineers", text: "Infrastructure Engineers" }
    ],

    toolsData: {
        sectionTitle: "Complete AWS Solutions Architect Associate Program",
        category: "Cloud Computing",
        toolsCount: "15+",
        displayImage: "/assets/tools1/9.png",
        tools: [
            {
                id: "Compute:",
                icon: "TrendingUp",
                title: " EC2, Lambda, Auto Scaling, Elastic Load Balancer"
            },
            {
                id: "Networking",
                icon: "Cpu",
                title: "VPC, CloudFront, API Gateway, Route 53"
              },
              {
                id: "Storage",
                icon: "Database",
                title: "S3, EBS, Glacier, EFS, Storage Gateway"
              },
              {
                id: "Security & Access",
                icon: "Shield",
                title: "IAM, Role-Based Access Control (RBAC), Cognito, KMS"
              },
              {
                id: "Serverless",
                icon: "TrendingUp",
                title: "AWS Lambda, API Gateway, DynamoDB, Step Functions"
              },
              {
                id: "Deployment & Automation",
                icon: "Cpu",
                title: "AWS CLI, CloudFormation, CodePipeline"
              },
              {
                id: "Monitoring & Analytics",
                icon: "BarChart",
                title: "CloudWatch, CloudTrail, AWS X-Ray, Kinesis"
              }
        ]
    },

};