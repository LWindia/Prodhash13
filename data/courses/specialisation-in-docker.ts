
import { Course } from "../../types/courses";

export const specialisationInDocker: Course = {
    _id: "docker-certified-associate-2024",
    title: "[B][R]  Docker Certified Associate (DCA)[/R]  [/B]  | Simplify Application Containerization using Docker",
    slug: "docker-certified-associate-2024",
    rating: 5,
    totalRatings: 10,
    duration: "20 Hours",
    globalStatus: "Globally Recognized Docker Certification Program",
    programBy: "Vimal Daga",
    hours: "20+",
    price: 1650,
    originalPrice: 7000,
    enrolledStudents: 12000,
    category: "DevOps",
    shortDescription: "Industry-Certified Docker DCA Training | Hands-On Labs | Real-World Projects | Best-In-Class Curriculum",
    paymentLink: "https://rzp.io/rzp/8bK6xmYz",
    backgroundImage: "/assets/cources/courseDetails/Hero.jpeg",

    learningOutcomes: [
        "Containerization Fundamentals & Docker Basics",
        "Multi-Container Application Management",
        "Docker Swarm Orchestration & Clustering",
        "Container Networking & Storage",
        "Security Best Practices",
        "Docker Enterprise Features"
    ],

    features: [
        "Industry-Recognized Docker Certification Training",
        "Technical Support for 90 days",
        "Real-World Container Projects",
        "Premium #13 Docker Community"
    ],

    skills: [
        "Container Management",
        "Docker CLI",
        "Docker Compose",
        "Docker Swarm",
        "Container Networking",
        "Storage Management",
        "Security Practices",
        "Container Orchestration"
    ],

    requirements: [
        "Basic understanding of Linux",
        "Familiarity with command line",
        "Basic knowledge of virtualization concepts"
    ],

    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    

    module: [
        {
          id: 1,
          title: "Introduction to Docker",
          description: "Understanding Docker and its basics",
          content: [
            "Understanding Docker: Introduction and Basics",
            "History of Docker",
            "Main Use of an Operating System in Containerization",
            "Four Different Ways of Installing an Operating System"
          ]
        },
        {
          id: 2,
          title: "Containerization and Docker Ecosystem",
          description: "Exploring containerization and real-world applications",
          content: [
            "Containerization",
            "Case Study on Hotstar: Real-world Application",
            "Scaling and Tech Stack",
            "Understanding Bare Metal vs. Cloud Computing vs. Virtualization",
            "Introduction to AWS Cloud and EC2 Instance"
          ]
        },
        {
          id: 3,
          title: "Getting Started with Docker",
          description: "Installing Docker and working with container images",
          content: [
            "Installing Docker and Starting Docker Service",
            "Understanding Container Image and Docker Hub",
            "Working with Ubuntu and Docker Engine",
            "Operating System Images"
          ]
        },
        {
          id: 4,
          title: "Docker Basic Commands and Operations",
          description: "Managing containers and web servers using Docker commands",
          content: [
            "Docker Engine and Image",
            "Launching Containers and Web Servers",
            "Managing Containers: rm Command and Networking",
            "Configuring Web Servers: Install httpd and Networking Basics"
          ]
        },
        {
          id: 5,
          title: "Advanced Docker Operations",
          description: "Exploring Docker commands and web server configurations",
          content: [
            "Exploring Docker Info and Echo Commands",
            "Creating Web Pages and Web Servers",
            "Configuring Containers as Web Servers and Database Servers",
            "Introduction to WordPress and Three-Tier Architecture"
          ]
        },
        {
          id: 6,
          title: "Docker Networking and Infrastructure",
          description: "Understanding Docker networking fundamentals",
          content: [
            "Understanding Docker Networking and Firewall",
            "Networking Basics: LAN, NAT, ISP, SDN",
            "Exploring Bridge and IPAM",
            "Custom Network Infrastructure and Docker Compose"
          ]
        },
        {
          id: 7,
          title: "Docker Compose and Multicontainer Applications",
          description: "Managing multi-container applications with Docker Compose",
          content: [
            "Introduction to Docker Compose Tool",
            "Understanding Multicontainer Applications and 3-Tier Architecture",
            "Writing YAML Code and Running Containers in Detached Mode",
            "Docker Compose Compatibility Matrix and Installation in RHEL"
          ]
        },
        {
          id: 8,
          title: "Image Management and Optimization",
          description: "Creating and optimizing Docker images",
          content: [
            "Creating Own Images and Docker Files",
            "Understanding Docker Commit and Run Keywords",
            "Docker Registry and Docker Hub Operations",
            "Integrating Docker File and Docker Compose for Various Applications"
          ]
        },
        {
          id: 9,
          title: "Advanced Docker Concepts",
          description: "Exploring advanced Docker concepts and swarm clusters",
          content: [
            "Exploring Container Namespace and Resource Isolation",
            "Understanding Process and Nested Process in Docker",
            "Swarm Clusters: Introduction and Setup",
            "Docker Engine, Bridge, and Distributed Network"
          ]
        },
        {
          id: 10,
          title: "Docker Orchestration and High Availability",
          description: "Scaling and orchestrating Docker applications",
          content: [
            "Creating Clusters using Docker Swarm",
            "Multi-Tier Applications and Fault Tolerance",
            "Horizontal Scaling and Load Balancing",
            "Docker Compose with Swarm and Stack Creation"
          ]
        },
        {
          id: 11,
          title: "Advanced Networking and Security",
          description: "Implementing advanced networking and security in Docker",
          content: [
            "Overlay Network and Packet Encryption",
            "Exploring VXLAN and Opt Options",
            "Docker Networking with Single Node and Distributed Environment",
            "Implementing Docker Compose File with Redis and other services",
            "Server Hardening and Security Best Practices",
            "Docker Performance Optimization Techniques"
          ]
        }
      ],
      

    highlights: [
        {
            number: "11",
            description: "Modules"
        },
        {
            number: "20+",
            description: "Hours of learning"
        },
        {
            number: "3",
            description: "Capstone Projects"
        }
    ],

    certificateImage: "/assets/certificate/docker_Certificate.jpg",

    project: [
        {
            icon: "",
            title: "Microservices Deployment",
            description: "Deploy a multi-container microservices application",
            skills: ["Docker Compose", "Networking", "Service Discovery"]
        },
        {
            icon: "",
            title: "Container Orchestration",
            description: "Build a scalable container cluster with Docker Swarm",
            skills: ["Docker Swarm", "Load Balancing", "High Availability"]
        },
        {
            icon: "",
            title: "CI/CD Pipeline",
            description: "Create a containerized CI/CD pipeline",
            skills: ["Docker Registry", "Automation", "DevOps Integration"]
        }
    ],

    programFor: [
        { src: "/assets/cources/courseDetails/shell-scripting/DevOps Engineers.jpg", alt: "DevOps Engineers", text: "DevOps Engineers" },
        { src: "/assets/cources/courseDetails/mongodb/System Administrators.jpg", alt: "System Administrators", text: "System Administrators" },
        { src: "/assets/cources/courseDetails/terraform/Cloud Engineers.jpg", alt: "Cloud Engineers", text: "Cloud Engineers" },
        { src: "/assets/cources/courseDetails/terraform/Software Developers.jpg", alt: "Software Developers", text: "Software Developers" },
        { src: "/assets/cources/courseDetails/terraform/Site Reliability Engineers (SRE).jpg", alt: "SRE Engineers", text: "Site Reliability Engineers" },
        { src: "/assets/cources/courseDetails/terraform/Infrastructure Engineers.jpg", alt: "Infrastructure Engineers", text: "Infrastructure Engineers" },
        { src: "/assets/cources/courseDetails/terraform/Technical Co-Founders.jpg", alt: "Technical Managers", text: "Technical Managers" },
        { src: "/assets/cources/courseDetails/mongodb/Students.jpg", alt: "College Students", text: "College Students" },
        { src: "/assets/cources/courseDetails/terraform/Security Engineers.jpg", alt: "Security Engineers", text: "Security Engineers" },
        { src: "/assets/cources/courseDetails/terraform/Release Engineers.jpg", alt: "Release Engineers", text: "Release Engineers" }
    ],

    toolsData: {
        sectionTitle: "Complete Docker Certification Program",
        category: "Container Technology",
        toolsCount: "10+",
        displayImage: "/assets/cources/tools/Docker.jpg",
        tools: [
            {
                id: "basics",
                icon: "BarChart",
                title: "Docker Basics: Containers, Images, Dockerfile"
            },
            {
                id: "compose",
                icon: "TrendingUp",
                title: "Docker Compose: Multi-container applications"
            },
            {
                id: "swarm",
                icon: "Cpu",
                title: "Docker Swarm: Container orchestration"
            },
            {
                id: "networking",
                icon: "BarChart",
                title: "Networking: Container communication"
            },
            {
                id: "security",
                icon: "Cpu",
                title: "Security: Best practices & compliance"
            }
        ]
    },
}

