import { Course } from "../../types/courses";

export const machinelearning: Course = {
    _id: "machine-learning-deep-learning",  // ✅ Fixed: Removed extra space
    title: "[B] [R]Machine Learning & Deep Learning for Real-World Intelligence[/R] [/B]",  // ✅ Fixed: Clean title
    slug: "machine-learning-deep-learning",
    rating: 5,
    totalRatings: 10,
    duration: "From Beginner to Advance Level",
    globalStatus: "GLOBALLY RECOGNISED PROGRAM",
    programBy: "Vimal Daga",
    hours: "50+",
    price: 6500,
    originalPrice: 18000,
    enrolledStudents: 12000,
    category: "DevOps & Cloud Computing",  // ✅ Fixed: Correct category
    shortDescription: "Industry Relevant & Recognized Training | Gain HandsOn Experience | Best-In-Class Content | Industry Use-Cases",
    paymentLink: "https://rzp.io/rzp/ZQbIl8C3",
    backgroundImage: "/assets/cources/fullstackmern/Machine-Learning.jpg",
 
  learningOutcomes: [
    "Foundations of Machine Learning and Deep Learning",
    "Hands-on with Python, NumPy, Pandas, and Matplotlib",
    "Data Cleaning, Feature Engineering & EDA",
    "Supervised & Unsupervised Learning Techniques",
    "Deep Learning with TensorFlow & Keras",
    "Building Neural Networks (CNN, RNN, LSTM)",
    "Natural Language Processing and Transformers (BERT)",
    "Model Deployment using Flask and Streamlit",
    "ML Projects with Jupyter, Colab & GitHub",
    "And much more…"
],

    features: [
        "Most Relevant Tips & Tricks",
        "Technical Support for 90 Days",
        "Real-World Industry Use Cases",
        "Premium Discord Community Access"
    ],
    
    skills: [
        "Linux Administration",
        "Shell Scripting",
        "System Security",
        "Networking"
    ],
    
    requirements: [
        "Basic computer knowledge",
        "Interest in system administration"
    ],
    
    level: "Beginner to Advanced",
    language: "English",
    lastUpdated: "2024-01",
    
    module: [
     {
    id: 1,
    title: "Introduction to Machine Learning & Python for ML",
    description: "Foundations of Machine Learning, real-world use cases, and getting started with Python tools for data science.",
    content: [
        "What is Machine Learning and Why Does it Matter",
        "History and Evolution of ML",
        "Supervised vs. Unsupervised Learning",
        "ML in Real Life: Industry Use Cases (Finance, Healthcare, Retail, Manufacturing)",
        "Setting up Python Environment (Anaconda, Jupyter, Colab)",
        "Python Basics for ML: Data Types, Control Structures, Functions",
        "Libraries Overview: NumPy, Pandas, Matplotlib, Seaborn",
        "Data Cleaning: Handling Missing Values, Duplicates, Outliers",
        "Exploratory Data Analysis (EDA)"
    ]
},
{
    id: 2,
    title: "Regression & Classification Techniques",
    description: "Dive into supervised learning with regression and classification techniques, model evaluation, and optimization.",
    content: [
        "Understanding Supervised Learning",
        "Simple and Multiple Linear Regression",
        "Regularization Techniques: Ridge, Lasso, ElasticNet",
        "Logistic Regression for Binary and Multiclass Problems",
        "Decision Trees and Ensemble Methods (Bagging, Random Forest, XGBoost)",
        "K-Nearest Neighbors (KNN)",
        "Model Evaluation: Accuracy, Precision, Recall, F1 Score, ROC-AUC",
        "Confusion Matrix, Classification Reports",
        "Cross-Validation, Stratified K-Folds"
    ]
},
{
    id: 3,
    title: "Unsupervised Learning & Feature Engineering",
    description: "Explore clustering, dimensionality reduction, and feature engineering to build powerful models.",
    content: [
        "Introduction to Unsupervised Learning",
        "K-Means Clustering: Centroids, Inertia, Elbow Method",
        "Hierarchical Clustering: Dendrograms, Linkage Criteria",
        "DBSCAN for Density-Based Clustering",
        "Principal Component Analysis (PCA): Eigenvalues, Explained Variance",
        "t-SNE and UMAP for Visualization",
        "Feature Scaling: StandardScaler, MinMaxScaler, RobustScaler",
        "One-Hot Encoding, Label Encoding, Target Encoding",
        "Handling High-Dimensional Data"
    ]
},
{
    id: 4,
    title: "Deep Learning & Neural Network Basics",
    description: "Understand how neural networks work, from biological neurons to feedforward models and backpropagation.",
    content: [
        "Introduction to Neural Networks",
        "Difference Between ML and DL",
        "Biological Neuron vs Artificial Neuron",
        "Activation Functions: ReLU, Sigmoid, Tanh, Softmax",
        "Loss Functions: MSE, Cross-Entropy",
        "Introduction to TensorFlow & Keras APIs",
        "Creating a Feedforward Neural Network",
        "Weight Initialization and Forward Propagation",
        "Backpropagation and Gradient Descent",
        "Model Compilation, Training, Evaluation, and Inference"
    ]
},
{
    id: 5,
    title: "CNNs, RNNs, and Optimization",
    description: "Advanced deep learning topics including CNNs, RNNs, transfer learning, and sequence modeling with LSTM/GRU.",
    content: [
        "Introduction to Convolutional Neural Networks (CNNs)",
        "Convolution Layers, Pooling (Max/Avg), Flatten Layers",
        "Building Image Classifiers using CNN (MNIST, CIFAR-10)",
        "Data Augmentation Techniques (Flip, Rotate, Zoom)",
        "Batch Normalization and Dropout for Regularization",
        "Transfer Learning: VGG16, ResNet, MobileNet",
        "Visualizing CNN Filters and Feature Maps",
        "Introduction to Recurrent Neural Networks (RNNs)",
        "Sequence Data and Time Series Modeling",
        "Vanishing Gradient Problem",
        "LSTM and GRU: Architecture, Gates, Cell States",
        "Text Classification and Sentiment Analysis with RNNs",
        "Embedding Layers and Word Embeddings (Word2Vec, GloVe)",
        "Attention Mechanisms: Concept and Applications",
        "Overview of Transformer Architecture and BERT"
    ]
},
{
    id: 6,
    title: "Model Deployment & Career Preparation",
    description: "Learn to deploy machine learning models using Flask, Docker, and Streamlit, and explore career opportunities in ML.",
    content: [
        "Model Serialization: Pickle, Joblib, Keras Save/Load",
        "Creating REST APIs with Flask for ML Model Deployment",
        "Introduction to Streamlit for Data Science Dashboards",
        "Docker Basics for ML Applications",
        "Model Versioning and Experiment Tracking",
        "Basics of CI/CD in ML using GitHub Actions",
        "Career Paths: ML Engineer, DL Engineer, Data Scientist"
    ]
}

    ],

    highlights: [
        {
            number: "6+",
            description: "Modules",
        },
        {
            number: "50+",
            description: "Hours of learning",
        },
        {
            number: "3",
            description: "Capstone Project",
        },
    ],
    
    certificateImage: "/assets/cources/fullstackmern/ML-certificate.jpg",  // ✅ Fixed: More appropriate certificate

    project: [
        {
            icon: "/assets/Projects/container.png",
            title: "CI/CD Pipeline with Docker & Jenkins",
            description: "Build a complete CI/CD pipeline that automatically builds, tests, and deploys a web application using Docker containers and Jenkins automation.",
            skills: ["Docker", "Jenkins", "CI/CD", "Git", "Automated Testing", "Deployment"],
        },
        {
            icon: "/assets/Projects/kubernetes.png",
            title: "Kubernetes Cluster Management",
            description: "Deploy and manage a scalable microservices application on Kubernetes with auto-scaling, load balancing, and monitoring.",
            skills: ["Kubernetes", "Docker", "Microservices", "Load Balancing", "Auto-scaling", "Monitoring"],
        },
        {
            icon: "/assets/Projects/terraform.png",
            title: "Infrastructure as Code with Terraform",
            description: "Provision and manage AWS infrastructure resources using Terraform, including VPC, EC2, S3, and RDS setup.",
            skills: ["Terraform", "AWS", "Infrastructure as Code", "VPC", "EC2", "S3"],
        },
    ],
    
programFor: [
  { src: "/assets/cources/programFor/programfor1.jpg", alt: "College Students", text: "Aspiring Students" },
  { src: "/assets/cources/programFor/programfor2.jpg", alt: "College Students", text: "Working Professionals" },
  { src: "/assets/cources/programFor/programfor3.jpg", alt: "College Students", text: "Tech Entrepreneurs" },
  { src: "/assets/cources/programFor/programfor4.jpg", alt: "College Students", text: "Freelance Developers" },
  { src: "/assets/cources/programFor/programfor5.jpg", alt: "College Students", text: "Fresh Graduates" },
  { src: "/assets/cources/programFor/programfor6.jpg", alt: "College Students", text: "IT Professionals" },
  { src: "/assets/cources/programFor/programfor7.jpg", alt: "College Students", text: "Data Analysts" },
  { src: "/assets/cources/programFor/programfor8.jpg", alt: "College Students", text: "Software Engineers" },
  { src: "/assets/cources/programFor/programfor9.jpg", alt: "College Students", text: "AI Enthusiasts" },
  { src: "/assets/cources/programFor/programfor10.jpg", alt: "College Students", text: "ML Architects" }
],

  toolsData: {
    sectionTitle: "Tools & Technologies Covered in Machine Learning & Deep Learning",
    category: "Machine Learning & AI",
    toolsCount: "20+",
    displayImage: "/assets/cources/fullstackmern/AI.jpg", // Update this path if needed
    tools: [
        {
            id: "",
            icon: "Database",
            title: "NumPy & Pandas"
        },
        {
            id: "",
            icon: "Server",
            title: "Matplotlib & Seaborn"
        },
        {
            id: "",
            icon: "BarChart",
            title: "Scikit-Learn"
        },
        {
            id: "",
            icon: "Terminal",
            title: "TensorFlow & Keras"
        },
        {
            id: "",
            icon: "TrendingUp",
            title: "XGBoost & Ensemble Methods"
        },
        {
            id: "",
            icon: "Cpu",
            title: "Deep Learning Architectures (CNN, RNN, LSTM)"
        },
        {
            id: "",
            icon: "Database",
            title: "NLP & Transformers (BERT)"
        },
        {
            id: "",
            icon: "Terminal",
            title: "Jupyter Notebook & Google Colab"
        },
        {
            id: "",
            icon: "BarChart",
            title: "Streamlit & Flask for Deployment"
        },
        {
            id: "",
            icon: "Cpu",
            title: "Model Tracking & CI/CD with GitHub Actions"
        }
    ]

    },
}