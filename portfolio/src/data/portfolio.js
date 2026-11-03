/**
 * Portfolio Configuration
 * Prem Kumar N – AWS Cloud & DevOps Engineer
 */

export const personalInfo = {
  name: "Prem Kumar N",
  title: "AWS Cloud & DevOps Engineer",
  currentRole: "Cloud & Infrastructure Engineer – L&T | Client: ABSA",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 9003098136",
  headline: "Architecting Scalable Cloud Infrastructure & Automated CI/CD Pipelines",
  summary:
    "AWS & DevOps Engineer with 3.5+ years of experience designing, automating, and maintaining cloud infrastructure on AWS. Hands-on expertise with Terraform (IaC), Kubernetes, Docker, Jenkins, GitHub Actions, GoCD, and Amazon EKS/ECS. Specialized in production support, CloudWatch monitoring, zero-downtime releases, and cloud cost optimization.",
  about: [
    "I am an AWS Cloud & DevOps Engineer with 3.5+ years of hands-on experience architecting reliable cloud infrastructure, driving DevOps automation, and operating mission-critical production workloads.",
    "My expertise spans multi-account AWS architectures, zero-downtime deployment strategies, Infrastructure as Code with Terraform, container orchestration with Docker and Kubernetes (EKS & ECS), and end-to-end CI/CD delivery pipelines using Jenkins, GitHub Actions, and GoCD.",
    "Across enterprise engagements for Fortune clients including ABSA, FedEx, and Cigna, I have led infrastructure provisioning, automated account decommissioning, reduced deployment cycles by 40%, cut storage costs by 25% with S3 lifecycle tiering, and ensured 99.9% availability through proactive monitoring and rapid incident resolution.",
  ],
  highlights: [
    { label: "3.5+ Years", sub: "Cloud & DevOps Experience" },
    { label: "40% Faster", sub: "CI/CD Deployment Cycles" },
    { label: "25% Cost Saved", sub: "S3 Storage Optimization" },
    { label: "20% Accelerated", sub: "Cloud Migration Delivery" },
    { label: "99.9% Uptime", sub: "Production SLA Adherence" },
    { label: "Multi-Account", sub: "AWS Architecture & IaC" },
  ],
};

export const socialLinks = {
  email: "Premkumar.career163@gmail.com",
  phone: "+91 9003098136",
  linkedin: "https://www.linkedin.com/in/prem-kumar-5abba9321",
  github: "https://github.com/Premkumar-max",
  resumeUrl: "/Premkumar_Resume_CloudEngineer.pdf",
};

export const skills = [
  {
    category: "Cloud",
    icon: "cloud",
    featured: true,
    description: "Core cloud architecture and enterprise multi-account environments",
    items: [
      { name: "AWS", level: "Primary", highlight: true },
      { name: "AWS Multi-Account", level: "Enterprise", highlight: false },
    ],
  },
  {
    category: "Containers & Orchestration",
    icon: "container",
    featured: true,
    description: "Containerization, cluster management, and microservice orchestration",
    items: [
      { name: "Docker", level: "Advanced", highlight: true },
      { name: "Kubernetes", level: "Advanced", highlight: true },
      { name: "Amazon EKS", level: "Advanced", highlight: true },
      { name: "Amazon ECS", level: "Advanced", highlight: true },
      { name: "Amazon ECR", level: "Proficient", highlight: false },
    ],
  },
  {
    category: "Infrastructure as Code",
    icon: "code",
    featured: true,
    description: "Declarative infrastructure provisioning and state management",
    items: [
      { name: "Terraform", level: "Advanced", highlight: true },
      { name: "AWS CloudFormation", level: "Proficient", highlight: true },
      { name: "IaC Modules", level: "Advanced", highlight: false },
    ],
  },
  {
    category: "CI/CD & Automation",
    icon: "pipeline",
    featured: true,
    description: "Automated test, build, artifact management, and zero-downtime releases",
    items: [
      { name: "Jenkins", level: "Advanced", highlight: true },
      { name: "GitHub Actions", level: "Advanced", highlight: true },
      { name: "AWS CodePipeline", level: "Proficient", highlight: false },
      { name: "AWS CodeDeploy", level: "Proficient", highlight: false },
      { name: "GoCD", level: "Advanced", highlight: true },
      { name: "Maven", level: "Proficient", highlight: false },
    ],
  },
  {
    category: "AWS Services",
    icon: "aws",
    featured: true,
    description: "Hands-on implementation across core AWS compute, networking, and security",
    items: [
      { name: "EC2", level: "Advanced", highlight: true },
      { name: "S3", level: "Advanced", highlight: true },
      { name: "IAM", level: "Advanced", highlight: true },
      { name: "VPC", level: "Advanced", highlight: true },
      { name: "RDS", level: "Advanced", highlight: true },
      { name: "Route 53", level: "Proficient", highlight: false },
      { name: "Lambda", level: "Proficient", highlight: true },
      { name: "CloudFront", level: "Proficient", highlight: false },
      { name: "Auto Scaling", level: "Advanced", highlight: false },
      { name: "ELB / ALB", level: "Advanced", highlight: false },
      { name: "CloudWatch", level: "Advanced", highlight: true },
      { name: "CloudTrail", level: "Advanced", highlight: false },
      { name: "Systems Manager (SSM)", level: "Advanced", highlight: false },
      { name: "KMS", level: "Proficient", highlight: false },
      { name: "DynamoDB", level: "Proficient", highlight: false },
      { name: "EFS", level: "Proficient", highlight: false },
    ],
  },
  {
    category: "Operating Systems & Tools",
    icon: "terminal",
    featured: false,
    description: "Enterprise Linux administration, source control, and web servers",
    items: [
      { name: "Linux (RHEL / Ubuntu / CentOS)", level: "Advanced", highlight: true },
      { name: "Git", level: "Advanced", highlight: true },
      { name: "GitHub", level: "Advanced", highlight: true },
      { name: "Nginx", level: "Proficient", highlight: false },
      { name: "Apache", level: "Proficient", highlight: false },
      { name: "Jira / ServiceDesk", level: "Advanced", highlight: false },
    ],
  },
  {
    category: "Monitoring & Observability",
    icon: "monitor",
    featured: false,
    description: "Proactive telemetry, distributed tracing, and centralized log analytics",
    items: [
      { name: "CloudWatch Alarms & Dashboards", level: "Advanced", highlight: true },
      { name: "Prometheus", level: "Proficient", highlight: false },
      { name: "Grafana", level: "Proficient", highlight: true },
      { name: "Splunk", level: "Proficient", highlight: false },
      { name: "Fluentd", level: "Proficient", highlight: false },
    ],
  },
  {
    category: "Scripting & Networking",
    icon: "shield",
    featured: false,
    description: "Shell automation and hybrid cloud network connectivity",
    items: [
      { name: "Bash / Shell", level: "Advanced", highlight: true },
      { name: "Python", level: "Proficient", highlight: false },
      { name: "Site-to-Site VPN", level: "Advanced", highlight: false },
      { name: "VPC Peering", level: "Advanced", highlight: false },
      { name: "Security Groups & NACLs", level: "Advanced", highlight: false },
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: "Cloud & Infrastructure Engineer",
    company: "L&T Mindtree",
    client: "Client: ABSA – AWS Cloud & DevOps Operations",
    duration: "07/2025 – Present",
    period: "Current",
    type: "Full-time",
    location: "Chennai, India",
    description:
      "Managing real-time enterprise AWS cloud infrastructure requests and L2/L3 production operations for global banking client ABSA. Driving CI/CD troubleshooting, Amazon ECS monitoring, and automated account decommissioning workflows.",
    contributions: [
      "Managed real-time AWS infrastructure requests, provisioning tasks, and 24/7 production operations via Jira service tickets.",
      "Troubleshot GoCD CI/CD pipeline failures, deployment rollback issues, and application release dependencies.",
      "Administered CloudHub application environments and coordinated infrastructure capacity with distributed application teams.",
      "Configured Amazon ECS task monitoring, CPU/memory thresholds, and CloudWatch alarms for proactive incident triage.",
      "Executed AWS account decommissioning by validating live dependencies and running automated resource cleanup pipelines.",
      "Investigated AWS CloudTrail audit logs to trace IAM permission anomalies and cross-account API activity.",
      "Maintained and improved Terraform IaC modules for repeatable environment configurations adhering to financial compliance standards.",
      "Conducted Operational Readiness Assessments (ORA) ensuring infrastructure stability, security guardrails, and deployment health.",
    ],
    tags: ["AWS", "ECS", "CloudWatch", "CloudTrail", "IAM", "Terraform", "GoCD", "CloudHub", "Jira", "Production Support"],
  },
  {
    id: 2,
    role: "DevOps Engineer",
    company: "Cognizant",
    client: "Client: FEDEX – AWS Cloud & CI/CD Automation",
    duration: "10/2022 – 06/2024",
    period: "1 yr 9 mos",
    type: "Full-time",
    location: "Chennai, India",
    description:
      "Spearheaded AWS cloud infrastructure automation, Jenkins CI/CD pipelines, and Amazon EKS Kubernetes workloads supporting enterprise shipping and logistics platforms.",
    contributions: [
      "Architected and deployed containerized microservices on Docker and Amazon EKS with auto-scaling and pod resource limits.",
      "Automated Jenkins CI/CD delivery pipelines from Git commit through build, test, and production deployment, reducing cycle times by 40%.",
      "Developed modular Terraform scripts (IaC) to provision repeatable VPCs, subnets, EC2 clusters, S3 buckets, and RDS instances.",
      "Implemented blue-green and zero-downtime deployment strategies ensuring continuous service availability during releases.",
      "Configured AWS Site-to-Site VPN and VPC peering for secure hybrid cloud data transmission between on-premises data centers and AWS.",
      "Optimized enterprise cloud storage costs by 25% by designing and enforcing automated Amazon S3 lifecycle tiering policies to Glacier.",
      "Enforced AWS IAM least-privilege policies, security groups, NACLs, and Kubernetes RBAC for enterprise data security.",
      "Supported large-scale workload migrations from on-premises data centers to AWS, cutting project delivery schedules by 20%.",
      "Configured proactive CloudWatch metric alarms and centralized log forwarding for real-time visibility.",
    ],
    tags: ["AWS", "Terraform", "Kubernetes", "Amazon EKS", "Docker", "Jenkins", "VPC Peering", "VPN", "S3", "IAM", "CloudWatch"],
  },
  {
    id: 3,
    role: "Linux System Administrator",
    company: "Cognizant",
    client: "Client: CIGNA – Linux Administration & AWS",
    duration: "08/2024 – 12/2024",
    period: "5 mos",
    type: "Full-time",
    location: "Chennai, India",
    description:
      "Administered enterprise Linux servers and AWS compute instances for healthcare client Cigna. Managed application deployments, centralized logging infrastructure, and web server configurations.",
    contributions: [
      "Administered enterprise Linux servers (RHEL/CentOS/Ubuntu) and managed AWS EC2 instances with system-level kernel tuning.",
      "Operated Kubernetes workloads, scheduled cron jobs, and managed security patch management cycles to maintain strict HIPAA SLAs.",
      "Implemented centralized log aggregation using Fluentd and Splunk for rapid system diagnostics and audit compliance.",
      "Configured and hardened Apache and Nginx web server reverse proxies, SSL/TLS certificates, and load balancer listeners.",
      "Conducted automated server backup verification and disaster recovery readiness drills to guarantee business continuity.",
      "Investigated and resolved critical production infrastructure incidents, maintaining 99.9% uptime compliance.",
    ],
    tags: ["Linux", "RHEL", "AWS EC2", "Kubernetes", "Splunk", "Fluentd", "Nginx", "Apache", "Bash", "Incident Response"],
  },
];

export const projects = [
  {
    id: "eks-iac-platform",
    title: "Production-Grade Amazon EKS Microservices Platform with Terraform",
    category: "Containers & IaC",
    featured: true,
    summary:
      "Enterprise Kubernetes infrastructure on AWS provisioned entirely with modular Terraform code, featuring zero-downtime rolling updates, automated cluster scaling, and ingress routing.",
    architecture:
      "Multi-AZ VPC with public/private subnet topology, managed EKS node groups, AWS Load Balancer Controller (ALB), IAM Roles for Service Accounts (IRSA), and EBS CSI driver for stateful storage.",
    awsServices: ["Amazon EKS", "EC2", "VPC", "ALB", "IAM (IRSA)", "CloudWatch", "Route 53", "ECR"],
    devopsTools: ["Terraform", "Kubernetes", "Docker", "Helm", "Git", "GitHub Actions"],
    contributions: [
      "Provisioned multi-AZ EKS cluster using custom reusable Terraform modules with remote state locking via S3 and DynamoDB.",
      "Implemented IAM Roles for Service Accounts (IRSA) to grant least-privilege AWS access directly to Kubernetes pods without hardcoded credentials.",
      "Configured Horizontal Pod Autoscaler (HPA) and Cluster Autoscaler to dynamically adjust compute nodes under peak traffic.",
      "Automated container builds, vulnerability scans, and Helm deployments via GitHub Actions CI/CD workflows.",
    ],
    impact:
      "Achieved 100% zero-downtime during application releases and reduced cluster provisioning time from days to under 20 minutes.",
    githubUrl: "https://github.com/Premkumar-max",
    demoUrl: "",
  },
  {
    id: "enterprise-cicd-pipeline",
    title: "Enterprise CI/CD Automation & Cloud Resource Decommissioning",
    category: "CI/CD & Automation",
    featured: true,
    summary:
      "Multi-stage automated delivery pipeline integrating code verification, container packaging, automated deployment to ECS, and automated decommission workflows for orphaned cloud resources.",
    architecture:
      "Jenkins and GoCD pipelines integrated with GitHub webhooks, Amazon ECR repository image scanning, automated Blue/Green deployments to ECS, and automated cleanup scripts for account decommissioning.",
    awsServices: ["Amazon ECS", "ECR", "CloudWatch Alarms", "AWS CloudTrail", "IAM", "Lambda", "S3"],
    devopsTools: ["Jenkins", "GoCD", "Docker", "Bash", "Python", "Jira API"],
    contributions: [
      "Constructed declarative multi-stage delivery pipelines with automated rollback triggers based on CloudWatch health check metrics.",
      "Engineered automated account decommissioning workflows to discover and decommission orphaned AWS resources safely.",
      "Integrated automated Slack and Jira notifications for build telemetry, test failures, and approval gates.",
      "Reduced deployment failure rates by 40% through automated pre-flight dependency checks and health probes.",
    ],
    impact:
      "Streamlined deployment cycle times by 40% and eliminated manual provisioning overhead for cross-functional engineering teams.",
    githubUrl: "https://github.com/Premkumar-max",
    demoUrl: "",
  },
  {
    id: "observability-monitoring-hub",
    title: "Centralized Observability & Proactive Cloud Incident Telemetry",
    category: "Monitoring & SRE",
    featured: true,
    summary:
      "Full-stack monitoring and alerting platform unifying metrics, distributed logs, and synthetic probes across microservices and AWS infrastructure for 24/7 reliability.",
    architecture:
      "Centralized log ingestion using Fluentd and Splunk alongside CloudWatch Container Insights, Prometheus metric scraping, and Grafana visualization dashboards.",
    awsServices: ["CloudWatch", "CloudWatch Logs", "SNS", "EC2", "ALB", "ECS"],
    devopsTools: ["Prometheus", "Grafana", "Fluentd", "Splunk", "Bash", "PagerDuty"],
    contributions: [
      "Designed proactive CloudWatch alarms targeting high CPU/memory utilization, ELB 5xx error spikes, and ECS task crashes.",
      "Created unified Grafana executive and operational dashboards monitoring real-time pod health, request throughput, and latency percentiles.",
      "Configured SNS notification pipelines dispatching actionable alert payloads with runbook links to engineering on-call teams.",
      "Established automated log retention and archival policies to S3, reducing logging overhead while meeting compliance requirements.",
    ],
    impact:
      "Decreased Mean Time to Detect (MTTD) by 60% and enabled proactive incident resolution prior to user impact.",
    githubUrl: "https://github.com/Premkumar-max",
    demoUrl: "",
  },
  {
    id: "hybrid-cloud-migration",
    title: "Secure Hybrid Cloud Networking & Cost-Optimized S3 Architecture",
    category: "Networking & Security",
    featured: false,
    summary:
      "Enterprise network architecture connecting on-premises data centers to AWS via IPSec Site-to-Site VPN and inter-VPC peering, combined with automated S3 storage lifecycle tiering.",
    architecture:
      "Hub-and-spoke VPC architecture with Customer Gateway, Virtual Private Gateway, encrypted VPN tunnels, Route 53 private zones, and automated S3 lifecycle transitions to Glacier.",
    awsServices: ["VPC", "Site-to-Site VPN", "VPC Peering", "Route 53", "S3", "KMS"],
    devopsTools: ["Terraform", "Linux", "OpenSSL", "Git", "Bash"],
    contributions: [
      "Designed high-availability dual-tunnel IPSec VPN connections between on-prem enterprise networks and AWS VPC.",
      "Implemented non-overlapping CIDR schemas and route tables for seamless VPC peering across development and production environments.",
      "Configured S3 lifecycle transition rules from Standard to Glacier, achieving 25% recurring cloud storage savings.",
      "Automated data replication scripts with encryption at rest using AWS KMS customer managed keys.",
    ],
    impact:
      "Delivered secure hybrid connectivity with zero packet drops and reduced cloud data migration timeline by 20%.",
    githubUrl: "https://github.com/Premkumar-max",
    demoUrl: "",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    badge: "aws",
    status: "Proficiency Track",
    description: "Deep competence in designing distributed, cost-optimized, fault-tolerant, and scalable systems on AWS.",
    topics: ["Multi-Tier VPC Architecture", "High Availability & Auto-scaling", "S3 Lifecycle & Storage", "IAM & Security"],
  },
  {
    id: 2,
    title: "Kubernetes & Cloud-Native Engineering",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    badge: "k8s",
    status: "Hands-on Production Track",
    description: "Proven expertise deploying, configuring, and maintaining production-grade container clusters on Amazon EKS and Docker.",
    topics: ["Cluster Architecture & Storage", "Workloads & Scheduling", "Pod Networking & Ingress", "Cluster Troubleshooting"],
  },
  {
    id: 3,
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    badge: "iac",
    status: "Enterprise IaC Track",
    description: "Specialized in Infrastructure as Code principles, state management, reusable modules, and Terraform cloud automation.",
    topics: ["HCL Syntax & Modules", "State Management & S3 Backend", "Terraform CLI & Workflows", "Dynamic Blocks & Variables"],
  },
  {
    id: 4,
    title: "Red Hat Certified System Administrator (RHCSA Track)",
    issuer: "Red Hat / Linux Professional",
    badge: "linux",
    status: "Enterprise Linux Track",
    description: "Advanced operational administration of Red Hat Enterprise Linux, kernel parameters, security, and process management.",
    topics: ["System Hardening & SELinux", "Storage & File Systems", "Shell Scripting & Cron", "Network Services & Firewalld"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Dr. M.G.R. Educational and Research Institute",
    location: "Chennai, India",
    duration: "08/2018 – 05/2022",
    details: "Specialized in Computer Systems, Network Architecture, and Software Engineering Foundations.",
  },
];

export const achievements = [
  {
    metric: "40% Faster",
    title: "Streamlined CI/CD Pipelines",
    description: "Reduced deployment lead time by 40% and improved provisioning efficiency using Terraform Infrastructure as Code.",
  },
  {
    metric: "25% Saved",
    title: "Storage Cost Optimization",
    description: "Reduced enterprise cloud storage expenditure by 25% with automated Amazon S3 lifecycle and Glacier transition policies.",
  },
  {
    metric: "20% Acceleration",
    title: "Cloud Migration Delivery",
    description: "Led cross-functional teams in AWS cloud migrations, fostering collaboration and cutting project delivery time by 20%.",
  },
  {
    metric: "99.9% SLA",
    title: "Mission-Critical Production Operations",
    description: "Maintained 99.9% uptime across production ECS and EKS workloads with proactive CloudWatch alarms and rapid incident resolution.",
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
