/**
 * Portfolio Configuration
 * Update this file to change content without modifying components.
 */

export const personalInfo = {
  name: "Prem Kumar N",
  title: "AWS Cloud & DevOps Engineer",
  currentRole: "Engineer – Cloud and Infra Management",
  location: "Chennai, India",
  headline: "Building Reliable Cloud Infrastructure & Automated Delivery",
  summary:
    "AWS Cloud & DevOps Engineer with 3.5+ years of experience designing, managing, and operating cloud infrastructure on AWS. Experienced in Infrastructure as Code with Terraform, container orchestration with Kubernetes and EKS, CI/CD pipeline automation, monitoring with CloudWatch and Grafana, and production operations support.",
  about: [
    "I'm an AWS Cloud & DevOps Engineer with 3.5+ years of hands-on experience working with cloud infrastructure, DevOps automation, Infrastructure as Code, containerized workloads, and production operations.",
    "My work focuses on maintaining reliable and scalable AWS environments — managing infrastructure lifecycle, troubleshooting deployments, implementing CI/CD automation, and ensuring operational stability through monitoring and observability.",
    "I've worked across multi-account AWS environments, containerized workloads with Docker and Kubernetes, infrastructure provisioning with Terraform, and day-to-day cloud operations including incident management and production support.",
  ],
  highlights: [
    { label: "3.5+ Years", sub: "Cloud & DevOps Experience" },
    { label: "AWS", sub: "Cloud Infrastructure" },
    { label: "IaC", sub: "Terraform & CloudFormation" },
    { label: "K8s", sub: "Kubernetes & EKS" },
    { label: "Ops", sub: "Production Operations" },
  ],
};

export const socialLinks = {
  email: "premarun163@gmail.com",
  linkedin: "https://www.linkedin.com/in/prem-kumar-5abba9321",
  github: "",       // Add GitHub URL here if needed, or leave blank to hide
  resumeUrl: "/Prem Kumar LTM Resume.pdf",
};

export const skills = [
  {
    category: "Cloud & AWS",
    icon: "cloud",
    featured: true,
    items: [
      "AWS", "EC2", "S3", "VPC", "IAM", "Lambda",
      "RDS", "EKS", "ECS", "ELB", "Auto Scaling",
      "CloudWatch", "CloudFormation", "CloudTrail",
    ],
  },
  {
    category: "Infrastructure as Code",
    icon: "code",
    featured: true,
    items: ["Terraform", "CloudFormation"],
  },
  {
    category: "Containers & Orchestration",
    icon: "container",
    featured: true,
    items: ["Docker", "Kubernetes", "Amazon EKS", "Amazon ECS"],
  },
  {
    category: "CI/CD & DevOps",
    icon: "pipeline",
    items: ["Jenkins", "AWS CodePipeline", "AWS CodeDeploy", "GoCD", "Git"],
  },
  {
    category: "Monitoring & Observability",
    icon: "monitor",
    items: ["CloudWatch", "Prometheus", "Grafana"],
  },
  {
    category: "Scripting & Automation",
    icon: "terminal",
    items: ["Python", "Bash / Shell"],
  },
  {
    category: "Additional Expertise",
    icon: "shield",
    items: [
      "Linux Administration",
      "Cloud Security",
      "Incident Management",
      "Production Support",
      "Networking (VPN, VPC Peering)",
    ],
  },
];

export const experience = [
  {
    id: 1,
    project: "ABSA",
    subtitle: "AWS Cloud Infrastructure & DevOps",
    duration: "November 2025 – October 2026",
    role: "Cloud Infrastructure & DevOps Support",
    description:
      "Worked on AWS cloud infrastructure management, DevOps automation, production support, CI/CD troubleshooting, monitoring, infrastructure lifecycle management, incident resolution, and cloud resource management.",
    contributions: [
      "Managed AWS cloud infrastructure operations and production support.",
      "Troubleshot GoCD CI/CD pipeline failures and deployment-related issues.",
      "Supported CloudHub applications and investigated application and infrastructure issues.",
      "Configured Amazon ECS monitoring and CloudWatch alarms.",
      "Monitored CPU, memory, ECS task status, deployment failures, and load balancer target health.",
      "Executed AWS account decommissioning and cloud resource cleanup using automated pipelines.",
      "Investigated AWS CloudTrail logs for troubleshooting access and resource activity.",
      "Supported IAM roles, policies, permissions, and access-related troubleshooting.",
      "Worked with Terraform modules and infrastructure automation workflows.",
      "Collaborated with cross-functional teams on incidents, service requests, and operational issues.",
    ],
    tags: ["AWS", "ECS", "CloudWatch", "CloudTrail", "IAM", "Terraform", "GoCD", "CloudHub"],
  },
  {
    id: 2,
    project: "FEDX",
    subtitle: "Cognizant",
    duration: "October 2022 – December 2024",
    role: "AWS Cloud & DevOps Engineer",
    description:
      "Cloud infrastructure and DevOps project focused on AWS environment management, infrastructure automation, CI/CD, Kubernetes, Docker, monitoring, security, networking, and Infrastructure as Code.",
    contributions: [
      "Set up and managed AWS cloud infrastructure for reliable application deployments.",
      "Automated CI/CD pipelines to streamline application delivery.",
      "Developed Terraform scripts for Infrastructure as Code provisioning.",
      "Deployed and managed Kubernetes clusters using Amazon EKS.",
      "Containerized applications using Docker.",
      "Implemented zero-downtime deployment strategies.",
      "Implemented monitoring, observability, and proactive alerting.",
      "Supported workload migrations from on-premises infrastructure to AWS.",
      "Configured AWS Site-to-Site VPN and VPC peering for hybrid and inter-VPC connectivity.",
      "Implemented Amazon S3 lifecycle policies for cost and data management.",
      "Tuned Docker containers and Kubernetes pods using resource requests, limits, and affinity rules.",
      "Configured AWS IAM policies and Kubernetes RBAC.",
      "Managed Amazon EKS workloads with focus on availability, scalability, and operational stability.",
    ],
    tags: ["AWS", "Terraform", "Kubernetes", "EKS", "Docker", "CI/CD", "IAM", "S3", "VPC", "VPN"],
  },
];

export const expertise = [
  {
    id: 1,
    title: "AWS Cloud Infrastructure",
    icon: "aws",
    description:
      "Hands-on experience managing AWS cloud environments covering compute, networking, storage, IAM, load balancing, auto scaling, and production cloud operations across multi-account setups.",
    tech: ["EC2", "S3", "VPC", "IAM", "ELB", "Auto Scaling", "RDS", "CloudTrail"],
  },
  {
    id: 2,
    title: "Infrastructure as Code",
    icon: "iac",
    description:
      "Experience using Terraform and AWS CloudFormation to define, provision, and manage cloud infrastructure in a repeatable and version-controlled manner.",
    tech: ["Terraform", "CloudFormation"],
  },
  {
    id: 3,
    title: "Containers & Kubernetes",
    icon: "k8s",
    description:
      "Experience deploying and operating containerized applications using Docker, managing Kubernetes workloads on Amazon EKS and ECS, with a focus on availability and operational stability.",
    tech: ["Docker", "Kubernetes", "EKS", "ECS"],
  },
  {
    id: 4,
    title: "CI/CD & Automation",
    icon: "cicd",
    description:
      "Experience supporting and automating application deployment pipelines using Jenkins, GoCD, AWS CodePipeline, and CodeDeploy, enabling reliable and repeatable delivery workflows.",
    tech: ["Jenkins", "GoCD", "CodePipeline", "CodeDeploy", "Git"],
  },
  {
    id: 5,
    title: "Monitoring & Observability",
    icon: "monitor",
    description:
      "Experience implementing monitoring, alerting, and operational visibility using CloudWatch, Prometheus, and Grafana to support infrastructure reliability and proactive incident detection.",
    tech: ["CloudWatch", "Prometheus", "Grafana"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Dr. M.G.R. Educational University",
    location: "Chennai, India",
    duration: "2018 – 2022",
  },
];
