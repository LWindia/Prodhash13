import { Course } from "../../types/courses";

export const specialisationInawssysops: Course = {
    _id: "specialisation-in-awssysops",
  title: "[B][R]AWS SysOps Administrator: Cloud Infrastructure Management[/R][B]",
  slug: "specialisation-in-awssysops",
  rating: 5,
  totalRatings: 10,
  duration: "Beginner to Advanced",
  globalStatus: "GLOBALLY RECOGNISED PROGRAM",
  hours: "30+",
  price: 2500,
  originalPrice: 7500,
  enrolledStudents: 12000,
  category: "Cloud Computing",
  shortDescription: "Next Batch: 19th - 20th April, 2025 (Sat - Sun)",
  paymentLink: "https://rzp.io/rzp/JLv8cEhD",
  backgroundImage: "/assets/cources/courseDetails/6course/aws-sysops3 (1).jpg",

  learningOutcomes: [
    "Automate deployments with AWS CloudFormation",
    "Monitor infrastructure using CloudWatch & SNS",
    "Configure VPCs, Subnets & Security Groups",
    "Implement IAM policies & security best practices",
    "Manage EC2, S3, RDS & Lambda services",
    "Set up backup & disaster recovery solutions",
    "Optimize AWS costs & resource utilization"
  ],

  features: [
    "Hands-on labs with AWS Free Tier",
    "24/7 access to AWS sandbox environment",
    "Expert-led troubleshooting sessions",
    "AWS Certified SysOps exam prep kit",
    "Lifetime access to course updates"
  ],

  skills: [
    "Infrastructure as Code (IaC)",
    "Cloud monitoring & alerting",
    "Network & security configuration",
    "CLI & SDK automation",
    "High availability architectures",
    "Disaster recovery planning",
    "Cost optimization strategies"
  ],

  requirements: [
    "Basic understanding of cloud concepts",
    "Familiarity with Linux commands",
    "No prior AWS experience required (we start from fundamentals)"
  ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",


    module: [
        {
            id: 1,
            title: "Introduction to AWS SysOps",
            description: "Understand the role of a SysOps administrator and core AWS services for operations.",
            content: [
                "AWS Shared Responsibility Model",
                "Core AWS services overview (EC2, S3, VPC, IAM)",
                "AWS Management Tools (CloudWatch, CloudTrail, Systems Manager)",
                "SysOps vs DevOps vs Solutions Architect roles"
            ]
        },
        {
            id: 2,
            title: "Monitoring and Logging",
            description: "Implement metrics, alarms, and filters using AWS monitoring services.",
            content: [
                "Amazon CloudWatch Logs and Logs Insights",
                "AWS CloudTrail log collection and analysis",
                "Creating CloudWatch alarms and metric filters",
                "Building CloudWatch dashboards",
                "Configuring SNS notifications",
                "Service Quotas and AWS Health events",
                "Amazon EventBridge rule configurations"
            ]
        },
        {
            id: 3,
            title: "Reliability and Business Continuity",
            description: "Design highly available and fault-tolerant architectures.",
            content: [
                "AWS Auto Scaling plans configuration",
                "Implementing RDS and Aurora replicas",
                "Loosely coupled architectures",
                "Horizontal vs vertical scaling strategies",
                "ELB configuration and Route 53 health checks",
                "Single AZ vs Multi-AZ deployments",
                "Implementing fault tolerance with EFS and Elastic IPs",
                "Route 53 routing policies (Failover, Weighted, Latency)"
            ]
        },
        {
            id: 4,
            title: "Deployment and Automation",
            description: "Automate cloud resource provisioning and management.",
            content: [
                "Creating and managing AMIs with EC2 Image Builder",
                "AWS CloudFormation stack management",
                "Cross-region/account deployments with RAM and StackSets",
                "Deployment strategies (Blue/Green, Rolling, Canary)",
                "Troubleshooting deployment issues",
                "Automated patch management with Systems Manager",
                "Scheduled tasks with EventBridge"
            ]
        },
        {
            id: 5,
            title: "Security and Compliance",
            description: "Implement and manage security policies in AWS.",
            content: [
                "IAM features (Password policies, MFA, Roles, SAML)",
                "Auditing with CloudTrail and IAM Access Analyzer",
                "Service Control Policies and Permissions Boundaries",
                "Multi-account strategies with Control Tower",
                "Data protection with KMS and Certificate Manager",
                "Secrets management with Secrets Manager",
                "Security monitoring with GuardDuty and Security Hub"
            ]
        },
        {
            id: 6,
            title: "Networking and Content Delivery",
            description: "Configure and troubleshoot AWS networking services.",
            content: [
                "VPC components (Subnets, Route Tables, NACLs)",
                "Private connectivity (VPC endpoints, peering, VPN)",
                "Network protection (WAF, Shield)",
                "Route 53 hosted zones and record management",
                "CloudFront and S3 OAI configurations",
                "Troubleshooting with VPC Flow Logs and ELB logs",
                "Hybrid connectivity issues resolution"
            ]
        },
        {
            id: 7,
            title: "Cost and Performance Optimization",
            description: "Implement strategies for cost reduction and performance improvement.",
            content: [
                "Cost allocation tags implementation",
                "Identifying unused resources with Trusted Advisor",
                "AWS Budgets and billing alarms",
                "EC2 Spot Instances utilization",
                "EBS performance optimization",
                "S3 performance features (Transfer Acceleration)",
                "RDS Performance Insights and Proxy",
                "Enhanced EC2 networking capabilities"
            ]
        },
        {
            id: 8,
            title: "Real-World SysOps Scenarios",
            description: "Hands-on labs simulating enterprise operations challenges.",
            content: [
                "Multi-tier application deployment",
                "Disaster recovery drill implementation",
                "Security incident response simulation",
                "Cost optimization audit exercise",
                "Performance troubleshooting workshop",
                "Certification exam practice tests"
            ]
        }
    ]
    ,

    highlights: [
        {
            number: "6",
            description: "Hands-On Labs"
        },
        {
            number: "30+",
            description: "Hours of Cloud Practice"
        },
        {
            number: "4",
            description: "Real-World AWS Scenarios"
        },
        {
            number: "100%",
            description: "Exam-Aligned Content"
        },
        {
            number: "24/7",
            description: "AWS Sandbox Access"
        }
    ],
    certificateImage: "/assets/certificate/AWS-Sysops.jpg",

    project: [
        {
            icon: "",
            title: "Multi-Tier Application Deployment",
            description: "Deploy a fault-tolerant web application with auto-scaling frontend and managed database backend.",
            skills: ["EC2 Auto Scaling", "RDS", "CloudFormation"]
        },
        {
            icon: "",
            title: "Disaster Recovery Drill",
            description: "Implement and test a cross-region recovery plan for critical infrastructure.",
            skills: ["S3 Cross-Region Replication", "Route 53 Failover", "AMI Backup"]
        },
        {
            icon: "",
            title: "Cost Optimization Audit",
            description: "Analyze and optimize AWS spend using Trusted Advisor and Cost Explorer.",
            skills: ["Cost Explorer", "Trusted Advisor", "Resource Tagging"]
        },
        {
            icon: "",
            title: "Security Compliance Dashboard",
            description: "Build a real-time monitoring dashboard for security events across AWS services.",
            skills: ["CloudWatch", "GuardDuty", "Security Hub"]
        },
        {
            icon: "",
            title: "CI/CD Pipeline for Serverless Apps",
            description: "Create an automated deployment pipeline for Lambda functions with rollback capability.",
            skills: ["CodePipeline", "CodeDeploy", "Lambda"]
        }
    ]
,    

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
        sectionTitle: "AWS SysOps Administrator Program",
        category: "Cloud Infrastructure & Operations Management",
        toolsCount: "15+",
        displayImage: "/assets/cources/courseDetails/aws-sysops/aws-sysops.jpg",
        tools: [
            {
                id: "monitoring",
                icon: "TrendingUp",
                title: "Master CloudWatch for monitoring and alarms"
            },
            {
                id: "deployment",
                icon: "BarChart",
                title: "Automate deployments with CloudFormation"
            },
            {
                id: "security",
                icon: "Shield",
                title: "Implement IAM policies and security best practices"
            },
            {
                id: "scaling",
                icon: "Cpu",
                title: "Configure Auto Scaling and Load Balancing"
            },
            {
                id: "networking",
                icon: "BarChart",
                title: "Manage VPCs, subnets, and network security"
            },
            {
                id: "recovery",
                icon: "BarChart",
                title: "Design disaster recovery solutions"
            },
            {
                id: "cost",
                icon: "TrendingUp",
                title: "Optimize costs using AWS budgeting tools"
            }
        ]
    },
    programBy: "Vimal Daga"
}