export const projects = [
  {
    id: "itam-system",
    title: "IT Asset Management System",
    thumbnail: "./assets/images/projects/itam-system.png",
    description:
      "Enterprise-level IT asset management platform supporting asset lifecycle management, role-based access control, auditing, and inventory tracking.",
    tags: ["Java", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "Flyway", "JWT"],
    github: "https://github.com/anhdevnguyen/itam-system",
    demo: "https://itam-system-678370qv8-vanhdev-s-projects.vercel.app/",
    featured: true
  },

    {
    id: "thien-nguyen",
    title: "Thien Nguyen Viet - Charity Volunteer Platform",
    thumbnail: "./assets/images/projects/thien-nguyen.png",
    description:
      "Team project for the Web Programming course, built to connect volunteers with charity campaigns. As team lead, I coordinated task distribution across frontend and backend members, defined the database schema and API contracts upfront to keep parallel development conflict-free, and implemented core modules for campaign management and donor tracking using ASP.NET MVC and SQL Server.",
    tags: ["ASP.NET", "C#", "SQL Server", "JavaScript", "HTML", "CSS"],
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
    tags: ["C#", "SQL Server"],
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
  tags: ["Java", "Android", "SQLite"],
  github: "https://github.com/VanAnhstudents/QuanLyHomestay",
  demo: "#",
  featured: false
}
];