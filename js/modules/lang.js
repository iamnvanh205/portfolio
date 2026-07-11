import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import { skills } from "../data/skills.js";
import { experience } from "../data/experience.js";

const root = document.documentElement;
const labels = {
  en: {
    langName: "English",
    themeLabel: "Color theme",
    languageLabel: "Language",
    quickActions: "Quick Actions",
    backToTop: "Back to top",
    scrollBackToTop: "Scroll back to top",
    light: "Light",
    dark: "Dark",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    viewAllProjects: "View all projects ->",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    skills: {
      languages: "Programming Languages",
      frameworks: "Frameworks & Libraries",
      databases: "Databases",
      devops: "Tools & DevOps",
      architecture: "Architecture",
      softSkills: "Soft Skills"
    },
    contact: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Write your message...",
      send: "Send Message",
      sending: "Sending...",
      nameRequired: "Name is required.",
      emailRequired: "Email is required.",
      emailInvalid: "Please enter a valid email address.",
      messageRequired: "Message cannot be empty.",
      success: "Message sent - I'll get back to you soon!",
      error: "Something went wrong. Please try again."
    },
    experience: {
      responsibilities: "Responsibilities",
      achievements: "Achievements"
    },
    projectsPage: {
      title: "All Projects",
      back: "Back to Portfolio",
      subtitle: "Backend systems, APIs, and tools I've designed and built - from enterprise platforms to side experiments.",
      filterLabel: "Filter by tag",
      all: "All",
      featured: "Featured",
      empty: "No projects match this filter.",
      project: "project",
      projects: "projects"
    },
    footer: "All rights reserved."
  },
  vi: {
    langName: "Tiếng Việt",
    themeLabel: "Giao diện màu",
    languageLabel: "Ngôn ngữ",
    quickActions: "Tác vụ nhanh",
    backToTop: "Lên đầu trang",
    scrollBackToTop: "Cuộn lên đầu trang",
    light: "Sáng",
    dark: "Tối",
    viewProjects: "Xem dự án",
    downloadCv: "Tải CV",
    viewAllProjects: "Xem tất cả dự án ->",
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      experience: "Kinh nghiệm",
      contact: "Liên hệ"
    },
    skills: {
      languages: "Ngôn ngữ lập trình",
      frameworks: "Framework & Thư viện",
      databases: "Cơ sở dữ liệu",
      devops: "Công cụ & DevOps",
      architecture: "Kiến trúc",
      softSkills: "Kỹ năng mềm"
    },
    contact: {
      name: "Họ tên",
      namePlaceholder: "Họ và tên của bạn",
      email: "Email",
      message: "Lời nhắn",
      messagePlaceholder: "Nhập nội dung tin nhắn...",
      send: "Gửi tin nhắn",
      sending: "Đang gửi...",
      nameRequired: "Vui lòng nhập họ tên.",
      emailRequired: "Vui lòng nhập email.",
      emailInvalid: "Vui lòng nhập một địa chỉ email hợp lệ.",
      messageRequired: "Nội dung tin nhắn không được để trống.",
      success: "Tin nhắn đã được gửi - tôi sẽ phản hồi sớm nhất có thể!",
      error: "Đã có lỗi xảy ra. Vui lòng thử lại."
    },
    experience: {
      responsibilities: "Nhiệm vụ chính",
      achievements: "Kết quả đạt được"
    },
    projectsPage: {
      title: "Tất cả dự án",
      back: "Quay lại Portfolio",
      subtitle: "Các hệ thống backend, API và công cụ tôi đã thiết kế, xây dựng - từ nền tảng doanh nghiệp đến các dự án cá nhân.",
      filterLabel: "Lọc theo thẻ",
      all: "Tất cả",
      featured: "Nổi bật",
      empty: "Không có dự án nào phù hợp với bộ lọc này.",
      project: "dự án",
      projects: "dự án"
    },
    footer: "Đã bảo lưu mọi quyền."
  }
};

const viProfile = {
  ...profile,
  name: "Nguyễn VănAnh",
  title: "Thực tập sinh Backend Engineer",
  tagline: [
    "Backend Engineer làm việc với Java, Spring Boot & PostgreSQL.",
    "Tôi xây dựng API, thiết kế cơ sở dữ liệu và kết nối chúng.",
    "Học kiến trúc backend qua các dự án thực hành.",
    "Xây dựng đầu cuối từ cấu trúc dữ liệu đến triển khai."
  ],
  about: [
    `Tôi là sinh viên năm cuối ngành Kỹ thuật phần mềm, đam mê phát
    triển backend - thiết kế API, cơ sở dữ liệu và kiến trúc hệ
    thống. Tôi đã tự thiết kế và triển khai hai hệ thống backend
    hoàn chỉnh từ đầu đến cuối - từ thiết kế cơ sở dữ liệu, CI/CD
    đến xử lý các bài toán concurrency thực tế - để hiểu cách các
    hệ thống production thực sự vận hành. Hiện tại tôi đang tìm
    kiếm vị trí Backend Engineer Intern để áp dụng kiến thức đã học
    vào sản phẩm thực tế và học hỏi từ đội ngũ kỹ sư giàu kinh
    nghiệm.`,

    `Trong 1-3 năm tới, mục tiêu của tôi là đào sâu chuyên môn về
    kiến trúc microservices - từ thiết kế giao tiếp giữa các
    service, quản lý dữ liệu phân tán, đến triển khai và giám sát
    hệ thống - đồng thời tích lũy kinh nghiệm thực chiến trong môi
    trường sản phẩm thực tế cùng đội ngũ kỹ sư chuyên nghiệp.`,

    `Về dài hạn, tôi hướng đến vai trò Tech Lead: người vừa vững về
    kỹ thuật, vừa có khả năng định hình kiến trúc hệ thống, dẫn dắt
    đội ngũ kỹ sư và đảm bảo chất lượng kỹ thuật xuyên suốt quá
    trình phát triển sản phẩm.`
  ],
  contact: {
    ...profile.contact,
    location: "Thanh Xuân, Hà Nội, Việt Nam"
  }
};

const viSoftSkills = [
  "Giải quyết vấn đề",
  "Hợp tác nhóm",
  "Tài liệu kỹ thuật",
  "Tư duy thiết kế hệ thống",
  "Phát triển Agile",
  "Học hỏi liên tục"
];

const viSkillNames = {
  "JWT Authentication": "Xác thực JWT",
  "Clean Architecture": "Kiến trúc sạch"
};

const viTags = {
  "University Projects": "Dự án đại học"
};

const viProjects = {
  "itam-system": {
    title: "Hệ thống quản lý tài sản CNTT",
    description:
      "Công cụ nội bộ số hóa toàn bộ vòng đời tài sản CNTT - mua sắm, bàn giao, bảo trì và thanh lý - thay thế việc theo dõi thủ công bằng Excel. Thiết kế kiến trúc sẵn sàng cho nhiều chi nhánh với hai lớp cách ly dữ liệu ngay từ đầu, dù bản MVP chỉ chạy trên một chi nhánh. Triển khai quy trình phê duyệt 3 bước (Nhân viên → Quản lý → Nhân sự IT), kiểm kê định kỳ bằng QR qua camera điện thoại với báo cáo sai lệch tự động, và ma trận phân quyền đầy đủ cho 4 vai trò Admin, IT Staff, Manager, Employee. Viết unit test và integration test (Testcontainers) chạy trên mỗi PR, cùng pipeline CI/CD hoàn chỉnh (Docker → GHCR → Render/Vercel). Tài liệu hóa hệ thống với 13 tài liệu kỹ thuật về kiến trúc, thiết kế cơ sở dữ liệu, API và triển khai."
  },
  "event-ticketing": {
    title: "Hệ thống bán vé sự kiện",
    description:
      "Dự án cá nhân tập trung vào backend, giải quyết bài toán concurrency thực tế: ngăn bán vượt số vé và check-in trùng lặp trong tình huống tranh chấp cao (50 request đồng thời cạnh tranh vé cuối cùng). Thiết kế luồng đặt-chỗ-rồi-xác-nhận (reserve-then-confirm) kèm sinh mã QR, dashboard thời gian thực cho ban tổ chức qua WebSocket/STOMP, và phân quyền theo 4 vai trò Admin, Organizer, Checkin Staff, Customer. Xây dựng với Spring Boot, PostgreSQL, xác thực JWT/OAuth2, triển khai trên Render, Vercel và Neon."
  },
  "thien-nguyen": {
    title: "Thiện Nguyện Việt - Nền tảng tình nguyện từ thiện",
    description:
      "Dự án nhóm cho môn Lập trình Web, xây dựng để kết nối tình nguyện viên với các chiến dịch từ thiện. Với vai trò trưởng nhóm, tôi điều phối phân chia công việc giữa frontend và backend, xác định schema cơ sở dữ liệu và API contract từ sớm để các thành viên phát triển song song không xung đột, đồng thời phát triển các module cốt lõi cho quản lý chiến dịch và theo dõi nhà tài trợ bằng ASP.NET MVC và SQL Server."
  },
  "nhan-khau": {
    title: "Hệ thống quản lý nhân khẩu và hộ khẩu",
    description:
      "Ứng dụng desktop cho môn Lập trình hướng sự kiện, được thiết kế để quản lý đăng ký hộ khẩu, hồ sơ cư dân và báo cáo dân số. Tôi dẫn dắt nhóm tách yêu cầu thành các module (hộ khẩu, cư dân, thống kê), áp dụng mẫu thiết kế hướng sự kiện để xử lý các tương tác UI phức tạp rõ ràng, và xây dựng schema SQL Server hỗ trợ truy vấn báo cáo nhanh, chính xác."
  },
  homestay: {
    title: "Hệ thống quản lý Homestay",
    description:
      "Ứng dụng Android quản lý danh sách homestay, đặt phòng và hồ sơ khách. Tôi dẫn dắt nhóm tách ứng dụng thành các module (listing, booking, user), thiết kế schema SQLite để truy cập dữ liệu hiệu quả trên thiết bị, và tổ chức codebase theo hướng tách bạch UI, business logic và data layer để ứng dụng dễ mở rộng và bảo trì."
  }
};

const viExperience = [
  {
    period: "2026 → Hiện tại",
    title: "Backend Engineer",
    company: "Dự án cá nhân",
    responsibilities: [
      "Tự thiết kế và xây dựng hai hệ thống backend full-stack (Java, Spring Boot, PostgreSQL) hoàn chỉnh từ đầu đến cuối: hệ thống quản lý tài sản CNTT và hệ thống bán vé sự kiện.",
      "Giải quyết các bài toán concurrency thực tế, như ngăn bán vượt số vé dưới 50 request đồng thời bằng luồng đặt-chỗ-rồi-xác-nhận (reserve-then-confirm).",
      "Triển khai RBAC cho 4 vai trò trên mỗi hệ thống, quy trình phê duyệt nhiều bước, và xác thực bằng QR cho kiểm kê tài sản và check-in sự kiện.",
      "Viết unit test và integration test (Testcontainers), thiết lập pipeline CI/CD (Docker → GHCR → Render/Vercel)."
    ],
    achievements: [
      "Hoàn thiện 2 hệ thống theo hướng production, từ thiết kế cơ sở dữ liệu đến triển khai, bao gồm 13 tài liệu kỹ thuật cho hệ thống quản lý tài sản CNTT.",
      "Xây dựng luồng đặt-chỗ-rồi-xác-nhận được kiểm chứng xử lý đúng 50 request đồng thời, không xảy ra bán vượt vé.",
      "Thiết lập quy trình CI/CD nhất quán (Docker + GitHub Actions), áp dụng cho cả hai dự án."
    ]
  },
  {
    period: "2023 → 2027",
    title: "Sinh viên Đại học Mở Hà Nội",
    company: "Dự án học phần",
    responsibilities: [
      "Làm trưởng nhóm ở nhiều đồ án môn học, từ phân tích yêu cầu đến thiết kế module.",
      "Xây dựng các hệ thống học thuật full-stack, gồm nền tảng tình nguyện từ thiện (ASP.NET/C#) và hệ thống quản lý nhân khẩu (C#/SQL Server).",
      "Phát triển ứng dụng Android quản lý homestay bằng Java và SQLite."
    ],
    achievements: [
      "Điều phối 3+ dự án nhóm, phân chia công việc giữa frontend, backend và thiết kế cơ sở dữ liệu.",
      "Áp dụng clean architecture và các mẫu thiết kế module trên cả dự án web và mobile.",
      "Thiết kế schema cơ sở dữ liệu (SQL Server, SQLite) hỗ trợ truy vấn báo cáo nhanh và chính xác."
    ]
  }
];

function current() {
  return getLang() === "vi" ? "vi" : "en";
}

const STORAGE_KEY = "portfolio-lang";

export function initLang() {
  setLang(getSavedLang() || "en", false);
}

export function getLang() {
  return root.dataset.lang || root.lang || "en";
}

export function setLang(lang, persist = true) {
  const next = lang === "vi" ? "vi" : "en";
  root.lang = next;
  root.dataset.lang = next;
  if (persist) saveLang(next);
  updateButtons();
}

export function updateLangButtons() {
  updateButtons();
}

export function t(path) {
  return path.split(".").reduce((value, key) => value[key], labels[current()]);
}

export function getProfile() {
  return current() === "vi" ? viProfile : profile;
}

export function getSkills() {
  if (current() !== "vi") return skills;

  return {
    ...skills,
    architecture: skills.architecture.map((item) => ({
      ...item,
      name: viSkillNames[item.name] || item.name
    })),
    softSkills: viSoftSkills
  };
}

export function getProjects() {
  if (current() !== "vi") return projects;

  return projects.map((project) => ({
    ...project,
    ...viProjects[project.id],
    tags: project.tags.map((tag) => viTags[tag] || tag)
  }));
}

export function localizeTag(tag) {
  return current() === "vi" ? viTags[tag] || tag : tag;
}

export function getExperience() {
  return current() === "vi" ? viExperience : experience;
}

function updateButtons() {
  document
    .querySelectorAll("[data-lang-option]")
    .forEach((btn) => {
      const active = btn.dataset.langOption === current();

      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
}

function getSavedLang() {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLang(lang) {
  try {
    sessionStorage.setItem(STORAGE_KEY, lang);
  } catch {}
}
