// Required: id, title, thumbnail, description, tags.
const defineProject = (project) => ({
  duration: "",
  highlights: [],
  github: "",
  docs: "",
  demo: "",
  screenshots: [],
  featured: false,
  ...project
});

export const projects = [
  defineProject({
    id: "itam-system",
    title: "IT Asset Management System",
    thumbnail: "./assets/images/projects/itam-dashboard.png",
    duration: "[05 - 07/2026]",
    description:
      "Full-stack internal system for managing IT assets across their entire lifecycle — from purchase to disposal — replacing manual Excel-based tracking for an organization of 50-100 employees / 300-380 assets.",
    highlights: [
      {
        heading: "Core Business & Workflow",
        bullets: [
          "Digitized the full asset lifecycle (purchase → assignment → maintenance/warranty → audit → disposal) with a true multi-branch architecture — branch-level data isolation via branch_id, not a single-tenant design retrofitted later.",
          "Designed a 3-step assignment approval workflow (Employee → Manager → IT Staff) with an auto-approve threshold for low-value assets, driven by a full state machine (PENDING → APPROVED/REJECTED → FULFILLED/CANCELLED) with transactional side-effects and rollback on failure.",
          "Extended the system with a Software License Management module: product catalog, entitlements (Subscription/Perpetual), seat assignment by User or Device, with row-level locking to prevent over-allocation beyond purchased quantity.",
          "Built QR-based asset audits (phone camera, no native app required) with automatic discrepancy detection (missing / location-mismatch / unexpected-found) against recorded inventory data."
        ]
      },
      {
        heading: "Security & Access Control",
        bullets: [
          "Built a custom JWT authentication system: 30-minute in-memory access tokens + refresh token rotation using a token family/generation model with reuse detection (aligned with RFC 9700) — only SHA-256 hashes are stored server-side, with multi-device session support and instant revocation.",
          "Implemented RBAC across 4 roles (Admin, IT Staff, Manager, Employee) via Spring Security @PreAuthorize, scoped by branch and department."
        ]
      },
      {
        heading: "Data & Quality",
        bullets: [
          "Modeled an 18-table PostgreSQL schema with Flyway-versioned migrations.",
          "Covered business logic with JUnit 5/Mockito unit tests and Testcontainers integration tests (real PostgreSQL) — 130 tests passing, 61.6% line / 39.6% branch coverage (JaCoCo gate); added Playwright E2E tests for the frontend."
        ]
      },
      {
        heading: "DevOps & Deployment",
        bullets: [
          "Set up a two-tier CI/CD pipeline on GitHub Actions: PRs run tests only (no build/deploy); merges to main build a Docker image, push to GHCR, and auto-deploy (Render for backend, Vercel for frontend, Neon for database).",
          "Additionally self-hosted a separate live demo on a VPS behind Nginx reverse proxy + HTTPS, using the same CI/CD pipeline."
        ]
      },
      {
        heading: "Documentation",
        bullets: [
          "Authored 15 living technical docs (architecture, database, API, authentication, business rules, testing, deployment, license management, refresh-token rotation) for long-term maintainability."
        ]
      }
    ],
    tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "JWT", "Docker", "JUnit 5", "Mockito", "Testcontainers"],
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
  }),

  defineProject({
    id: "event-ticketing",
    title: "Event Ticketing System",
    thumbnail: "./assets/images/projects/event-ticketing.png",
    duration: "[07/2026 - Present]",
    description:
      "Full-stack event ticketing platform focused on solving ticket oversell and duplicate check-ins under concurrent load — organizers create events with limited-quantity ticket types, customers reserve and receive QR-coded tickets, and gate staff check them in by scanning, with a real-time dashboard tracking sales and check-ins. Designed to support up to 10 concurrent events and 1,000 tickets per event, with correctness validated under 50 concurrent booking requests for the same last ticket.",
    highlights: [
      {
        heading: "Core Business & Workflow",
        bullets: [
          "Built an event ticketing platform to solve a specific hard concurrency problem: preventing ticket oversell and duplicate check-ins when many users compete for the same limited tickets — the explicit technical focus of the project.",
          "Designed a two-phase reserve → confirm booking flow (temporary hold with configurable expiry, released via both a lazy check and a scheduled cleanup job) using DB-level pessimistic locking (SELECT ... FOR UPDATE via JPA @Lock(PESSIMISTIC_WRITE)) to serialize concurrent purchase attempts on the last ticket.",
          "Built a real-time organizer dashboard over WebSocket/STOMP and a QR-based check-in flow (server-side QR generation via ZXing, camera scanning via html5-qrcode on the frontend).",
          "Structured the backend as a Modular Monolith (auth/event/ticket/checkin/gate/dashboard modules with enforced service-boundary rules) — a deliberate trade-off to keep locking and transactions inside a single PostgreSQL transaction rather than adding distributed-system complexity."
        ]
      },
      {
        heading: "Security & Access Control",
        bullets: [
          "Implemented JWT-based authentication (15-min access token, 7-day refresh token in an httpOnly cookie) combined with Google OAuth2 for customer login, plus refresh token rotation with reuse detection that revokes a session's tokens if an already-used token is replayed.",
          "Enforced RBAC across 4 roles (Admin, Organizer, Checkin Staff, Customer) via Spring Security @PreAuthorize, plus explicit service-layer ownership checks — an Organizer can only manage their own events; Checkin Staff can only scan tickets for the event they're assigned to."
        ]
      },
      {
        heading: "Data & Quality",
        bullets: [
          "Modeled the core schema (events, ticket_types, tickets, gates, checkin_logs, refresh_tokens) with Flyway migrations, including a unique idempotency-key constraint to guard the booking endpoint against double-submits.",
          "Validated correctness with dedicated concurrency integration tests: 50 concurrent threads competing for the last ticket (exactly 1 success, 49 rejected as sold out) and 20 concurrent scans of the same QR code (exactly 1 successful check-in, the rest rejected as duplicates) — backed by JUnit 5/Mockito unit tests, Testcontainers integration tests on real PostgreSQL, and Playwright E2E coverage on the frontend."
        ]
      },
      {
        heading: "DevOps & Deployment",
        bullets: [
          "Containerized the full stack with Docker Compose for local development (PostgreSQL + backend + frontend) and set up GitHub Actions CI/CD: automated unit/integration/concurrency tests on every PR, auto-deploy to Render (backend), Vercel (frontend), and Neon (PostgreSQL) on merge to main.",
          "Self-hosted a separate live demo on a dedicated VPS behind an Nginx reverse proxy with HTTPS, reusing the same Docker-based pipeline as ITAM."
        ]
      },
      {
        heading: "Documentation",
        bullets: [
          "Authored 13 technical docs (overview, architecture, database, API, authentication, business rules, testing, deployment) documenting concurrency design decisions and edge cases for long-term maintainability."
        ]
      }
    ],
    tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "WebSocket/STOMP", "JWT", "OAuth2", "Docker"],
    github: "https://github.com/iamnvanh205/event-ticketing",
    docs: "https://github.com/iamnvanh205/event-ticketing/tree/main/docs",
    demo: "https://event.vananh.io.vn",
    screenshots: [
      "./assets/images/projects/event-dashboard.png",
      "./assets/images/projects/event-assets.png",
      "./assets/images/projects/event-employees.png",
      "./assets/images/projects/event-maintenance_record.png"
    ],
    featured: true
  }),

  defineProject({
    id: "thien-nguyen",
    title: "Thien Nguyen Viet - Charity Volunteer Platform",
    thumbnail: "./assets/images/projects/thien-nguyen.png",
    description:
      "Team project (4 members) for a Web Programming course — a website connecting volunteers with charity campaigns across categories like disaster relief, education scholarships, community healthcare, and environment. Built with ASP.NET Web Forms (.NET Framework) and SQL Server; personally responsible for the entire Admin module.",
    highlights: [
      {
        heading: "Core Features & Modules",
        bullets: [
          "Built the entire Admin back office: campaign CRUD, donation approval and tracking, user account management, news CRUD, and a reporting dashboard with charts.",
          "Implemented shared authentication/authorization (PhanQuyenHelper.cs) enforcing login and role checks across both the public site and the Admin area."
        ]
      },
      {
        heading: "Data & Architecture",
        bullets: [
          "Followed a classic ASP.NET Web Forms + ADO.NET structure: a dedicated DAO class per domain (campaigns, donations, users, news) on top of a single shared SQL connection helper, with separate Master Pages for the public site and the Admin back office."
        ]
      }
    ],
    tags: ["ASP.NET", "C#", "SQL Server", "JavaScript", "HTML", "CSS", "University Projects"],
    github: "https://github.com/VanAnhstudents/ThienNguyenViet",
    screenshots: [
      "./assets/images/projects/thiennguyen-dashboard.png",
      "./assets/images/projects/thiennguyen-assets.png",
      "./assets/images/projects/thiennguyen-employees.png",
      "./assets/images/projects/thiennguyen-maintenance_record.png"
    ],
    featured: false
  }),

  defineProject({
    id: "nhan-khau",
    title: "Population & Household Management System",
    thumbnail: "./assets/images/projects/nhan-khau.png",
    description:
      "Team project (3 members) for a desktop applications course — a Windows Forms application for household registration and resident record management at the district level, modeling the real administrative hierarchy (District → Ward → Neighborhood Group → Household → Individual). Built with C#/.NET Framework, SQL Server (stored-procedure-driven), and Crystal Reports; personally implemented the death registration, move-out (built solo), move-in, household split, and search/lookup modules.",
    highlights: [
      {
        heading: "Core Features & Modules",
        bullets: [
          "Implemented 5 of the app's household-registry modules end-to-end: death registration, move-out (built independently, without pairing), move-in, splitting one household into multiple, and search/lookup by name, address, ward, or neighborhood group.",
          "Built on a Windows Forms MDI architecture — a single MDI container form with menu-driven navigation into each feature form."
        ]
      },
      {
        heading: "Data & Architecture",
        bullets: [
          "Pushed business logic into SQL Server stored procedures accessed through a single shared data-access class, and used Crystal Reports for statistical/period-based population reports."
        ]
      }
    ],
    tags: ["C#", "SQL Server", "University Projects"],
    github: "https://github.com/VanAnhstudents/QuanLyNhanKhau",
    screenshots: [
      "./assets/images/projects/nhan-khau-dashboard.png",
      "./assets/images/projects/nhan-khau-assets.png",
      "./assets/images/projects/nhan-khau-employees.png",
      "./assets/images/projects/nhan-khau-maintenance_record.png"
    ],
    featured: false
  }),

  defineProject({
    id: "homestay",
    title: "Homestay Management System",
    thumbnail: "./assets/images/projects/homestay.png",
    description:
      "Team project for an Android development course — an Android app for managing homestay listings, bookings, guests, staff, and invoices, with built-in statistics and reporting. Built with Java, Android native components (Navigation Component, RecyclerView), and SQLite for on-device storage.",
    highlights: [
      {
        heading: "Core Features & Modules",
        bullets: [
          "Covers the full homestay operation flow: room/listing management, bookings, customer and staff records, invoicing/payment, and a statistics dashboard (charts via MPAndroidChart).",
          "Ships with demo data auto-seeded into SQLite on first run, so the app is ready to explore without manual setup."
        ]
      },
      {
        heading: "Data & Architecture",
        bullets: [
          "Structured the codebase around clear separation of concerns — dedicated ui, repository, dao, and model packages — with SQLite access centralized through SQLiteOpenHelper instead of scattering raw queries across UI code."
        ]
      }
    ],
    tags: ["Android", "SQLite", "University Projects"],
    github: "https://github.com/VanAnhstudents/QuanLyHomestay",
    docs: "https://github.com/VanAnhstudents/QuanLyHomestay/tree/main/app/src/main/docs",
    screenshots: [
      "./assets/images/projects/homestay-dashboard.png",
      "./assets/images/projects/homestay-assets.png",
      "./assets/images/projects/homestay-employees.png",
      "./assets/images/projects/homestay-maintenance_record.png"
    ],
    featured: false
  })
];
