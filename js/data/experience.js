export const experience = [
  {
    id: 1,
    period: "05/2026 → Present",
    title: "Backend Engineer",
    company: "Personal Projects",
    responsibilities: [
      "Independently designed and built two full-stack backend systems (Java 21, Spring Boot, PostgreSQL) end-to-end: an IT Asset Management System (05–07/2026) and an Event Ticketing System (07/2026 → Present).",
      "Solved real concurrency problems, such as preventing ticket oversell under 50 competing concurrent requests using a reserve-then-confirm booking flow backed by DB-level pessimistic locking (SELECT FOR UPDATE).",
      "Secured REST endpoints with JWT authentication and @PreAuthorize-based RBAC across 4 roles per system, multi-step approval workflows, and QR-based verification for asset audits and event check-in.",
      "Wrote 108 unit and integration tests (JUnit 5, Mockito, Testcontainers) achieving 53% line coverage, and set up CI/CD pipelines (Docker → GHCR → GitHub Actions auto-deploy)."
    ],
    achievements: [
      "Shipped 2 production-style systems from database design to deployment, including 13 technical docs for the IT Asset Management System.",
      "Built a reserve-then-confirm booking flow verified via concurrency tests to handle 50 concurrent requests with zero overselling and zero duplicate reservations.",
      "Established a repeatable CI/CD workflow (Docker + GitHub Actions) applied across both projects, including a self-hosted VPS deployment (Docker Compose, Nginx, HTTPS) for the ticketing system."
    ]
  },

  {
    id: 2,
    period: "2023 → 2027",
    title: "Student at Hanoi Open University",
    company: "Coursework Projects",
    responsibilities: [
      "Led teams on several course projects, from requirement breakdown to module design.",
      "Built full-stack academic systems, including a charity volunteer platform (ASP.NET/C#) and a population management system (C#/SQL Server).",
      "Developed an Android homestay management app using Java and SQLite."
    ],
    achievements: [
      "Coordinated 3+ team-based projects, splitting work across frontend, backend, and database design.",
      "Applied clean architecture and modular design patterns across web and mobile projects.",
      "Designed database schemas (SQL Server, SQLite) to support fast and accurate reporting queries."
    ]
  }
];