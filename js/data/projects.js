export const projects = [
  {
    id: "itam",
    title: "IT Asset Management System",
    thumbnail: "./assets/images/projects/project-itam.webp",
    description:
      "Enterprise-level IT asset management platform supporting asset lifecycle management, role-based access control, auditing, and inventory tracking.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Flyway", "JWT"],
    github: "https://github.com/anhdevnguyen/itam",
    demo: "https://itam-demo.anhdevnguyen.io",
    featured: true
  },

  {
    id: "ai-docs",
    title: "AI Internal Docs Assistant",
    thumbnail: "./assets/images/projects/project-ai-docs.webp",
    description:
      "AI-powered internal documentation assistant enabling semantic search, knowledge retrieval, and context-aware responses for enterprise teams.",
    tags: ["Spring Boot", "OpenAI", "RAG", "PostgreSQL", "Vector Search"],
    github: "https://github.com/anhdevnguyen/ai-internal-docs-assistant",
    demo: "https://ai-docs-demo.anhdevnguyen.io",
    featured: true
  },

  {
    id: "ecommerce-api",
    title: "E-Commerce RESTful API",
    thumbnail: "./assets/images/projects/project-itam.webp",
    description:
      "Full-featured e-commerce backend with product catalogue, order management, payment integration, and real-time inventory updates via WebSocket.",
    tags: ["Spring Boot", "MySQL", "Redis", "Stripe API", "WebSocket"],
    github: "https://github.com/anhdevnguyen/ecommerce-api",
    demo: "https://ecommerce-api-demo.anhdevnguyen.io",
    featured: false
  },

  {
    id: "auth-service",
    title: "Auth Microservice",
    thumbnail: "./assets/images/projects/project-itam.webp",
    description:
      "Standalone authentication and authorization microservice implementing OAuth 2.0, JWT refresh tokens, MFA, and RBAC with fine-grained permission management.",
    tags: ["Java", "Spring Security", "OAuth2", "JWT", "Redis", "Docker"],
    github: "https://github.com/anhdevnguyen/auth-microservice",
    demo: "",
    featured: false
  },

  {
    id: "notification-hub",
    title: "Notification Hub",
    thumbnail: "./assets/images/projects/project-itam.webp",
    description:
      "Event-driven notification service supporting multi-channel delivery (email, SMS, push) with template management, retry logic, and delivery tracking.",
    tags: ["Spring Boot", "Kafka", "PostgreSQL", "Twilio", "Firebase"],
    github: "https://github.com/anhdevnguyen/notification-hub",
    demo: "https://notification-hub-demo.anhdevnguyen.io",
    featured: false
  },

  {
    id: "devlog",
    title: "DevLog — Developer Blog CMS",
    thumbnail: "./assets/images/projects/project-itam.webp",
    description:
      "Headless CMS for developer blogs with Markdown support, tag-based taxonomy, full-text search, draft/publish workflow, and RSS feed generation.",
    tags: ["Spring Boot", "PostgreSQL", "Elasticsearch", "AWS S3", "Docker"],
    github: "https://github.com/anhdevnguyen/devlog-cms",
    demo: "https://devlog.anhdevnguyen.io",
    featured: false
  }
];