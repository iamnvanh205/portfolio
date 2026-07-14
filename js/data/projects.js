export const projects = [
  {
    id: "itam-system",
    title: "IT Asset Management System",
    thumbnail: "./assets/images/projects/itam-dashboard.png",
    duration: "[05 - 07/2026]",
    description:
      "Internal enterprise tool that digitizes the full IT asset lifecycle — purchase, assignment, maintenance, audit, and disposal — replacing manual Excel-based tracking. Designed a multi-branch-ready data model with two-level data isolation from day one, even though the MVP runs on a single branch. Implemented a 3-step approval workflow (Employee → Manager → IT Staff), QR-based periodic audits via phone camera with automatic discrepancy detection between scanned and recorded data, and a full role-based access matrix across Admin, IT Staff, Manager, and Employee roles. Secured REST endpoints with JWT authentication, @PreAuthorize-based RBAC, request validation, and CORS configuration, applying Repository/Service layer separation (SOLID) to keep business logic independent from persistence. Wrote 108 unit and integration tests (JUnit 5, Mockito, Testcontainers) achieving 53% line coverage, run on every PR with full CI/CD (Docker → GHCR → GitHub Actions auto-deploy). Documented the system with 13 technical docs covering architecture, database design, API, testing, and deployment.",
    tags: ["Java 21", "Spring Boot 3.5", "TypeScript", "React 19", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/iamnvanh205/itam-system",
    docs: "https://github.com/iamnvanh205/itam-system/tree/main/docs",
    demo: "https://itam.vananh.io.vn",
    screenshots: [
      "./assets/images/projects/itam-dashboard.png",
      "./assets/images/projects/itam-assets.png",
      "./assets/images/projects/itam-employees.png",
      "./assets/images/projects/itam-maintenance_record.png"
    ],
    featured: true
  },

  {
    id: "event-ticketing",
    title: "Event Ticketing System",
    thumbnail: "./assets/images/projects/event-ticketing.png",
    duration: "[07/2026 - Present]",
    description:
      "Personal backend-focused project centered on solving a real-world concurrency control problem: preventing ticket oversell and duplicate check-ins when many users compete for the same limited tickets. Designed a reserve-then-confirm booking flow using DB-level pessimistic locking (SELECT FOR UPDATE) to serialize concurrent purchase attempts on the last ticket, validated with concurrency tests — 50 concurrent requests competing for the last ticket, zero oversell, zero duplicate reservation. Built a real-time organizer dashboard (WebSocket/STOMP) and a QR-based check-in flow, with role-based access across Admin, Organizer, Check-in Staff, and Customer roles. Implemented JWT-based authentication via OAuth2 with refresh token handling and logout support through token invalidation. Self-hosted the full stack on a VPS using Docker Compose, Nginx reverse proxy, and HTTPS, with the same CI/CD pipeline as the ITAM system.",
    tags: ["Spring Boot", "React", "TypeScript", "PostgreSQL", "WebSocket/STOMP", "JWT", "OAuth2", "Docker"],
    github: "https://github.com/iamnvanh205/event-ticketing",
    demo: "https://event.vananh.io.vn",
    screenshots: [
      "./assets/images/projects/event-dashboard.png",
      "./assets/images/projects/event-assets.png",
      "./assets/images/projects/event-employees.png",
      "./assets/images/projects/event-maintenance_record.png"
    ],
    featured: true
  },

  {
    id: "thien-nguyen",
    title: "Thien Nguyen Viet - Charity Volunteer Platform",
    thumbnail: "./assets/images/projects/thien-nguyen.png",
    description:
      "Team project for the Web Programming course, built to connect volunteers with charity campaigns. As team lead, I coordinated task distribution across frontend and backend members, defined the database schema and API contracts upfront to keep parallel development conflict-free, and implemented core modules for campaign management and donor tracking using ASP.NET MVC and SQL Server.",
    tags: ["ASP.NET", "C#", "SQL Server", "JavaScript", "HTML", "CSS", "University Projects"],
    github: "https://github.com/VanAnhstudents/ThienNguyenViet",
    demo: "#",
    screenshots: [
      "./assets/images/projects/thiennguyen-dashboard.png",
      "./assets/images/projects/thiennguyen-assets.png",
      "./assets/images/projects/thiennguyen-employees.png",
      "./assets/images/projects/thiennguyen-maintenance_record.png"
    ],
    featured: false
  },

  {
    id: "nhan-khau",
    title: "Population & Household Management System",
    thumbnail: "./assets/images/projects/nhan-khau.png",
    description:
      "Desktop application for the Event-Driven Programming course, designed to manage household registration, resident records, and demographic reporting. I led the team in breaking down requirements into modules (household, resident, statistics), applied event-driven design patterns to handle complex UI interactions cleanly, and structured the SQL Server schema to support fast, accurate reporting queries.",
    tags: ["C#", "SQL Server", "University Projects"],
    github: "https://github.com/VanAnhstudents/QuanLyNhanKhau",
    demo: "#",
    screenshots: [
      "./assets/images/projects/nhan-khau-dashboard.png",
      "./assets/images/projects/nhan-khau-assets.png",
      "./assets/images/projects/nhan-khau-employees.png",
      "./assets/images/projects/nhan-khau-maintenance_record.png"
    ],
    featured: false
  },

  {
  id: "homestay",
  title: "Homestay Management System",
  thumbnail: "./assets/images/projects/homestay.png",
  description:
    "Android application for managing homestay listings, bookings, and guest records. I led the team in breaking down the app into modules (listing, booking, user), designed the SQLite schema to keep data access efficient on-device, and structured the codebase around clear separation between UI, business logic, and data layers to make the app easy to extend and maintain.",
  tags: ["Java", "Android", "SQLite", "University Projects"],
  github: "https://github.com/VanAnhstudents/QuanLyHomestay",
  demo: "#",
  screenshots: [
      "./assets/images/projects/homestay-dashboard.png",
      "./assets/images/projects/homestay-assets.png",
      "./assets/images/projects/homestay-employees.png",
      "./assets/images/projects/homestay-maintenance_record.png"
    ],
  featured: false
}
];
