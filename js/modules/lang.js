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
      spokenLanguages: "Spoken Languages",
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
      projects: "projects",
      docsPrefix: "Technical documentation is available in the",
      docsLink: "GitHub docs"
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
      spokenLanguages: "Ngôn ngữ giao tiếp",
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
      projects: "dự án",
      docsPrefix: "Tài liệu kỹ thuật có tại",
      docsLink: "GitHub docs"
    },
    footer: "Đã bảo lưu mọi quyền."
  }
};

const viProfile = {
  ...profile,
  name: "Nguyễn Văn Anh",
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
    kiếm vị trí thực tập sinh Backend Engineer để áp dụng kiến thức đã học
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

const viSpokenLanguages = [
  "Tiếng Việt (Bản ngữ)",
  "Tiếng Anh (đọc hiểu tài liệu kỹ thuật)"
];

const viSoftSkills = [
  "Giải quyết vấn đề",
  "Hợp tác nhóm",
  "Tài liệu kỹ thuật",
  "Tư duy thiết kế hệ thống",
  "Phát triển theo từng bước nhỏ",
  "Học hỏi liên tục"
];

// Kiến trúc, framework, ngôn ngữ lập trình... giữ nguyên tiếng Anh (thuật ngữ IT chuẩn ngành).
// Chỉ thêm vào đây nếu có tên cần dịch/hiệu chỉnh sang tiếng Việt.
const viSkillNames = {};

const viTags = {
  "University Projects": "Đồ án môn học"
};

const viProjects = {
  "itam-system": {
    title: "Hệ thống quản lý tài sản CNTT",
    description:
      "Công cụ nội bộ quản lý toàn bộ vòng đời tài sản CNTT — từ mua sắm đến thanh lý — thay thế việc theo dõi thủ công bằng Excel, cho tổ chức 50-100 nhân sự / 300-380 tài sản.",
    highlights: [
      {
        heading: "Nghiệp vụ cốt lõi & Quy trình",
        bullets: [
          "Số hóa toàn bộ vòng đời tài sản (mua sắm → bàn giao → bảo trì/bảo hành → kiểm kê → thanh lý) với kiến trúc đa chi nhánh thực sự — dữ liệu được cô lập theo từng chi nhánh qua branch_id, không phải thiết kế đơn tenant được cải tạo về sau.",
          "Thiết kế quy trình phê duyệt bàn giao 3 bước (Nhân viên → Quản lý → Nhân sự IT), tự động phê duyệt tài sản giá trị thấp theo ngưỡng, vận hành bằng state machine đầy đủ (PENDING → APPROVED/REJECTED → FULFILLED/CANCELLED) với các tác động phụ trong transaction và rollback khi có lỗi.",
          "Mở rộng hệ thống với module Quản lý giấy phép phần mềm: danh mục sản phẩm, quyền sử dụng (Subscription/Perpetual), phân bổ seat theo Người dùng hoặc Thiết bị, dùng khóa cấp dòng để ngăn phân bổ vượt quá số lượng đã mua.",
          "Xây dựng quy trình kiểm kê tài sản bằng QR (camera điện thoại, không cần ứng dụng native), tự động phát hiện chênh lệch (thiếu / sai vị trí / phát hiện ngoài danh sách) so với dữ liệu tồn kho đã ghi nhận."
        ]
      },
      {
        heading: "Bảo mật & Phân quyền",
        bullets: [
          "Xây dựng hệ thống xác thực JWT tùy chỉnh: access token 30 phút lưu trong bộ nhớ + xoay vòng refresh token theo mô hình token family/generation có phát hiện tái sử dụng (phù hợp RFC 9700) — phía server chỉ lưu hash SHA-256, hỗ trợ phiên đăng nhập trên nhiều thiết bị và thu hồi tức thì.",
          "Triển khai RBAC cho 4 vai trò (Admin, IT Staff, Manager, Employee) qua Spring Security @PreAuthorize, giới hạn phạm vi theo chi nhánh và phòng ban."
        ]
      },
      {
        heading: "Dữ liệu & Chất lượng",
        bullets: [
          "Mô hình hóa schema PostgreSQL gồm 18 bảng với migration được đánh phiên bản bằng Flyway.",
          "Kiểm thử business logic bằng unit test JUnit 5/Mockito và integration test Testcontainers (PostgreSQL thật) — 130 test đều pass, độ phủ 61,6% dòng / 39,6% nhánh (JaCoCo gate); bổ sung kiểm thử E2E bằng Playwright cho frontend."
        ]
      },
      {
        heading: "DevOps & Triển khai",
        bullets: [
          "Thiết lập pipeline CI/CD hai tầng trên GitHub Actions: PR chỉ chạy test (không build/deploy); khi merge vào main, hệ thống build Docker image, đẩy lên GHCR và tự động triển khai (Render cho backend, Vercel cho frontend, Neon cho database).",
          "Đồng thời tự host một bản demo riêng trên VPS phía sau Nginx reverse proxy + HTTPS, sử dụng cùng pipeline CI/CD."
        ]
      },
      {
        heading: "Tài liệu",
        bullets: [
          "Biên soạn 15 tài liệu kỹ thuật sống (kiến trúc, cơ sở dữ liệu, API, xác thực, quy tắc nghiệp vụ, kiểm thử, triển khai, quản lý giấy phép, xoay vòng refresh token) để duy trì hệ thống lâu dài."
        ]
      }
    ]
  },
  "event-ticketing": {
    title: "Hệ thống bán vé sự kiện",
    description:
      "Nền tảng bán vé sự kiện full-stack tập trung giải quyết tình trạng bán vượt số vé và check-in trùng lặp dưới tải đồng thời — ban tổ chức tạo sự kiện với các loại vé giới hạn số lượng, khách hàng đặt chỗ và nhận vé gắn mã QR, nhân viên cổng quét vé để check-in, còn dashboard thời gian thực theo dõi doanh số và lượt check-in. Hệ thống được thiết kế hỗ trợ tối đa 10 sự kiện đồng thời và 1.000 vé cho mỗi sự kiện; tính đúng đắn được kiểm chứng với 50 yêu cầu đặt vé đồng thời cùng tranh chấp chiếc vé cuối cùng.",
    highlights: [
      {
        heading: "Nghiệp vụ cốt lõi & Quy trình",
        bullets: [
          "Xây dựng nền tảng bán vé sự kiện để giải quyết một bài toán concurrency khó và cụ thể: ngăn bán vượt số vé và check-in trùng lặp khi nhiều người dùng cùng tranh chấp số vé giới hạn — đây là trọng tâm kỹ thuật rõ ràng của dự án.",
          "Thiết kế luồng đặt vé hai giai đoạn reserve → confirm (giữ chỗ tạm thời với thời hạn có thể cấu hình, được giải phóng bằng cả kiểm tra lazy và scheduled cleanup job), sử dụng khóa pessimistic ở tầng cơ sở dữ liệu (SELECT ... FOR UPDATE qua JPA @Lock(PESSIMISTIC_WRITE)) để tuần tự hóa các yêu cầu mua đồng thời trên chiếc vé cuối cùng.",
          "Xây dựng dashboard thời gian thực cho ban tổ chức qua WebSocket/STOMP và luồng check-in bằng QR (server tạo mã QR bằng ZXing, frontend quét qua camera bằng html5-qrcode).",
          "Tổ chức backend theo kiến trúc Modular Monolith (các module auth/event/ticket/checkin/gate/dashboard với quy tắc ranh giới service được thực thi) — lựa chọn có chủ đích để giữ khóa và transaction trong một PostgreSQL transaction duy nhất, thay vì bổ sung độ phức tạp của hệ thống phân tán."
        ]
      },
      {
        heading: "Bảo mật & Phân quyền",
        bullets: [
          "Triển khai xác thực JWT (access token 15 phút, refresh token 7 ngày trong cookie httpOnly) kết hợp Google OAuth2 cho khách hàng đăng nhập, cùng cơ chế xoay vòng refresh token có phát hiện tái sử dụng và thu hồi toàn bộ token của phiên nếu một token đã dùng bị phát lại.",
          "Áp dụng RBAC cho 4 vai trò (Admin, Organizer, Checkin Staff, Customer) qua Spring Security @PreAuthorize, kết hợp kiểm tra quyền sở hữu rõ ràng ở tầng service — Organizer chỉ có thể quản lý sự kiện của mình; Checkin Staff chỉ có thể quét vé cho sự kiện được phân công."
        ]
      },
      {
        heading: "Dữ liệu & Chất lượng",
        bullets: [
          "Mô hình hóa schema cốt lõi (events, ticket_types, tickets, gates, checkin_logs, refresh_tokens) bằng Flyway migration, gồm ràng buộc idempotency key duy nhất để bảo vệ endpoint đặt vé trước thao tác gửi lặp.",
          "Kiểm chứng tính đúng đắn bằng các integration test concurrency chuyên biệt: 50 thread đồng thời tranh chấp chiếc vé cuối cùng (đúng 1 thành công, 49 bị từ chối vì hết vé) và 20 lượt quét đồng thời cùng một mã QR (đúng 1 lần check-in thành công, các lần còn lại bị từ chối do trùng lặp) — cùng unit test JUnit 5/Mockito, integration test Testcontainers trên PostgreSQL thật và kiểm thử E2E Playwright cho frontend."
        ]
      },
      {
        heading: "DevOps & Triển khai",
        bullets: [
          "Đóng gói toàn bộ hệ thống bằng Docker Compose cho môi trường phát triển local (PostgreSQL + backend + frontend) và thiết lập CI/CD bằng GitHub Actions: tự động chạy unit/integration/concurrency test trên mỗi PR, tự động triển khai lên Render (backend), Vercel (frontend) và Neon (PostgreSQL) khi merge vào main.",
          "Tự host một bản demo riêng trên VPS chuyên dụng phía sau Nginx reverse proxy với HTTPS, tái sử dụng cùng pipeline dựa trên Docker như ITAM."
        ]
      },
      {
        heading: "Tài liệu",
        bullets: [
          "Biên soạn 13 tài liệu kỹ thuật (tổng quan, kiến trúc, cơ sở dữ liệu, API, xác thực, quy tắc nghiệp vụ, kiểm thử, triển khai), ghi lại các quyết định thiết kế concurrency và edge case để duy trì hệ thống lâu dài."
        ]
      }
    ]
  },
  "thien-nguyen": {
    title: "Thiện Nguyện Việt - Nền tảng tình nguyện từ thiện",
    description:
      "Đồ án nhóm 4 thành viên cho môn Lập trình Web — một website kết nối tình nguyện viên với các chiến dịch từ thiện thuộc nhiều lĩnh vực như cứu trợ thiên tai, học bổng giáo dục, y tế cộng đồng và môi trường. Xây dựng bằng ASP.NET Web Forms (.NET Framework) và SQL Server; tôi phụ trách toàn bộ module Admin.",
    highlights: [
      {
        heading: "Tính năng cốt lõi & Module",
        bullets: [
          "Xây dựng toàn bộ trang quản trị: CRUD chiến dịch, phê duyệt và theo dõi khoản quyên góp, quản lý tài khoản người dùng, CRUD tin tức và dashboard báo cáo có biểu đồ.",
          "Triển khai cơ chế xác thực/phân quyền dùng chung (PhanQuyenHelper.cs), bắt buộc kiểm tra đăng nhập và vai trò trên cả website công khai lẫn khu vực Admin."
        ]
      },
      {
        heading: "Dữ liệu & Kiến trúc",
        bullets: [
          "Tuân theo cấu trúc ASP.NET Web Forms + ADO.NET truyền thống: mỗi domain (chiến dịch, quyên góp, người dùng, tin tức) có một lớp DAO riêng trên một helper kết nối SQL dùng chung, với các Master Page tách biệt cho website công khai và trang quản trị."
        ]
      }
    ]
  },
  "nhan-khau": {
    title: "Hệ thống quản lý nhân khẩu và hộ khẩu",
    description:
      "Đồ án nhóm 3 thành viên cho môn Lập trình ứng dụng desktop — ứng dụng Windows Forms quản lý đăng ký hộ khẩu và hồ sơ cư dân ở cấp quận/huyện, mô hình hóa đúng hệ thống phân cấp hành chính thực tế (Quận/Huyện → Phường/Xã → Tổ dân phố → Hộ gia đình → Cá nhân). Xây dựng bằng C#/.NET Framework, SQL Server (điều khiển bằng stored procedure) và Crystal Reports; tôi trực tiếp triển khai các module khai tử, chuyển đi (tự xây dựng độc lập), chuyển đến, tách hộ và tìm kiếm/tra cứu.",
    highlights: [
      {
        heading: "Tính năng cốt lõi & Module",
        bullets: [
          "Triển khai end-to-end 5 module nghiệp vụ hộ khẩu của ứng dụng: khai tử, chuyển đi (xây dựng độc lập, không pair), chuyển đến, tách một hộ thành nhiều hộ và tìm kiếm/tra cứu theo tên, địa chỉ, phường/xã hoặc tổ dân phố.",
          "Xây dựng trên kiến trúc Windows Forms MDI — một form MDI container duy nhất với menu điều hướng đến từng form chức năng."
        ]
      },
      {
        heading: "Dữ liệu & Kiến trúc",
        bullets: [
          "Đưa business logic vào các stored procedure của SQL Server, truy cập qua một lớp data access dùng chung, đồng thời sử dụng Crystal Reports cho báo cáo dân số theo thống kê và kỳ thời gian."
        ]
      }
    ]
  },
  homestay: {
    title: "Hệ thống quản lý Homestay",
    description:
      "Đồ án nhóm cho môn Lập trình Android — ứng dụng Android quản lý danh sách homestay, đặt phòng, khách hàng, nhân viên và hóa đơn, tích hợp sẵn chức năng thống kê và báo cáo. Xây dựng bằng Java, các Android native component (Navigation Component, RecyclerView) và SQLite để lưu trữ dữ liệu trên thiết bị.",
    highlights: [
      {
        heading: "Tính năng cốt lõi & Module",
        bullets: [
          "Bao quát toàn bộ quy trình vận hành homestay: quản lý phòng/danh sách, đặt phòng, hồ sơ khách hàng và nhân viên, lập hóa đơn/thanh toán cùng dashboard thống kê (biểu đồ bằng MPAndroidChart).",
          "Tự động seed dữ liệu demo vào SQLite trong lần chạy đầu tiên, giúp ứng dụng sẵn sàng để khám phá mà không cần thiết lập thủ công."
        ]
      },
      {
        heading: "Dữ liệu & Kiến trúc",
        bullets: [
          "Tổ chức codebase theo hướng phân tách rõ trách nhiệm — các package ui, repository, dao và model chuyên biệt — đồng thời tập trung truy cập SQLite qua SQLiteOpenHelper thay vì rải raw query trong code UI."
        ]
      }
    ]
  }
};

const viExperience = [
  {
    id: 1,
    period: "05/2026 → Hiện tại",
    title: "Backend Engineer",
    company: "Dự án cá nhân",
    responsibilities: [
      "Tự thiết kế và xây dựng hai hệ thống backend full-stack (Java 21, Spring Boot, PostgreSQL) hoàn chỉnh từ đầu đến cuối: hệ thống quản lý tài sản CNTT (05-07/2026) và hệ thống bán vé sự kiện (07/2026 → hiện tại).",
      "Giải quyết các bài toán concurrency thực tế, như ngăn bán vượt số vé dưới 50 request đồng thời bằng luồng đặt-chỗ-rồi-xác-nhận (reserve-then-confirm) kết hợp khóa pessimistic ở tầng database (SELECT FOR UPDATE).",
      "Bảo mật REST endpoint bằng xác thực JWT và RBAC qua @PreAuthorize cho 4 vai trò trên mỗi hệ thống, quy trình phê duyệt nhiều bước, và xác thực bằng QR cho kiểm kê tài sản và check-in sự kiện.",
      "Viết 108 unit test và integration test (JUnit 5, Mockito, Testcontainers) đạt 53% line coverage, thiết lập pipeline CI/CD (Docker → GHCR → GitHub Actions tự động triển khai)."
    ],
    achievements: [
      "Hoàn thiện 2 hệ thống theo hướng production, từ thiết kế cơ sở dữ liệu đến triển khai, bao gồm 13 tài liệu kỹ thuật cho hệ thống quản lý tài sản CNTT.",
      "Xây dựng luồng đặt-chỗ-rồi-xác-nhận được kiểm chứng bằng test concurrency xử lý đúng 50 request đồng thời, không bán vượt vé, không đặt trùng.",
      "Thiết lập quy trình CI/CD nhất quán (Docker + GitHub Actions), áp dụng cho cả hai dự án, bao gồm triển khai tự host trên VPS (Docker Compose, Nginx, HTTPS) cho hệ thống bán vé."
    ]
  },
  {
    id: 2,
    period: "2023 → 2027",
    title: "Sinh viên Đại học Mở Hà Nội",
    company: "Đồ án học phần",
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
    spokenLanguages: skills.spokenLanguages.map((item, i) => ({
      ...item,
      name: viSpokenLanguages[i] || item.name
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
