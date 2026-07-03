export const projects = [
  {
    id: "itam-system",
    title: "IT Asset Management System",
    thumbnail: "./assets/images/projects/itam-system.png",
    description:
      "Internal enterprise tool that digitizes the full IT asset lifecycle — purchase, assignment, maintenance, and disposal — replacing manual Excel-based tracking. Designed a multi-branch-ready architecture with two-level data isolation from day one, even though MVP runs on a single branch. Implemented a 3-step approval workflow (Employee → Manager → IT Staff), QR-based periodic audits via phone camera with automatic discrepancy reporting, and a full role-based access matrix across Admin, IT Staff, Manager, and Employee roles.",
    tags: ["Java", "Spring Boot", "TypeScript", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/anhdevnguyen/itam-system",
    demo: "https://itam-system-olive.vercel.app/",
    featured: true
  },

  {
    id: "event-ticketing",
    title: "Event Ticketing System",
    thumbnail: "./assets/images/projects/event-ticketing.png",
    description:
      "Personal backend-focused project centered on solving real-world concurrency control problems: preventing ticket oversell and duplicate check-ins under high-contention scenarios (50 concurrent requests competing for the last ticket). Designed the reserve-then-confirm booking flow with QR code generation, a real-time organizer dashboard via WebSocket/STOMP, and role-based access control across Admin, Organizer, Checkin Staff, and Customer roles. Built with Spring Boot, PostgreSQL, and JWT/OAuth2 authentication, deployed on Render, Vercel, and Neon.",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "WebSocket", "JWT"],
    github: "https://github.com/anhdevnguyen/event-ticketing",
    demo: "#",
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
  featured: false
}
];