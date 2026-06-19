import { jsPDF } from "jspdf";

export function generateAndDownloadCV() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const leftMargin = 15;
  const rightMargin = 15;
  const usableWidth = pageWidth - leftMargin - rightMargin; // 180mm
  let y = 15; // Start y coordinate

  // Helpers
  const addSeparator = () => {
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(leftMargin, y, pageWidth - rightMargin, y);
    y += 4;
  };

  const addHeaderLine = (title: string) => {
    doc.setDrawColor(30, 41, 59); // Slate-800
    doc.setLineWidth(0.4);
    doc.line(leftMargin, y, pageWidth - rightMargin, y);
    y += 5;
  };

  // Header Section
  doc.setFont("times", "bold");
  doc.setFontSize(24);
  doc.setTextColor(30, 41, 59); // slate-800
  doc.text("Vaibhav Dapkara", pageWidth / 2, y, { align: "center" });
  y += 6;

  // Contact Info
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(80, 80, 80);
  const contactText1 = "+91-9171761675  |  dapkaravaibhav14@gmail.com";
  const contactText2 = "linkedin.com/in/vaibhav-dapkara  |  github.com/vaibhavdapkara14";
  doc.text(contactText1, pageWidth / 2, y, { align: "center" });
  y += 4.5;
  doc.text(contactText2, pageWidth / 2, y, { align: "center" });
  y += 7;

  // ------------------------------------
  // Career Objective
  // ------------------------------------
  doc.setFont("times", "bold");
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text("Career Objective", leftMargin, y);
  y += 2;
  addHeaderLine("Career Objective");

  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(60, 60, 60);
  const objectiveText = "Aspiring Full-Stack Developer with a strong foundation in Java, Spring Boot, and Web Technologies. Passionate about building scalable web applications and optimizing backend efficiency. Eager to leverage technical skills in a fast-paced environment to solve complex problems and contribute to team success.";
  const objectiveLines = doc.splitTextToSize(objectiveText, usableWidth);
  doc.text(objectiveLines, leftMargin, y);
  y += objectiveLines.length * 4.5 + 4;

  // ------------------------------------
  // Technical Skills
  // ------------------------------------
  doc.setFont("times", "bold");
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text("Technical Skills", leftMargin, y);
  y += 2;
  addHeaderLine("Technical Skills");

  const skills = [
    { label: "Core Languages", val: "Java, JavaScript, HTML5, CSS3, SQL" },
    { label: "Frontend", val: "React.js" },
    { label: "Backend", val: "Spring Boot, Node.js, Express.js" },
    { label: "Databases", val: "MySQL, MongoDB" },
    { label: "ORM/ODM", val: "Hibernate, Mongoose" },
    { label: "Developer Tools", val: "Git, GitHub, VS Code, Eclipse, Postman, MySQL Workbench, Netlify" },
    { label: "Automation Tools", val: "Make.com" },
  ];

  skills.forEach((skill) => {
    doc.setFont("times", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(40, 40, 40);
    doc.text(`${skill.label}: `, leftMargin, y);
    
    // Calculate label width
    const labelWidth = doc.getTextWidth(`${skill.label}: `);
    
    doc.setFont("times", "normal");
    doc.setTextColor(80, 80, 80);
    const skillValueLines = doc.splitTextToSize(skill.val, usableWidth - labelWidth);
    doc.text(skillValueLines, leftMargin + labelWidth, y);
    y += skillValueLines.length * 4.2;
  });
  y += 4;

  // ------------------------------------
  // Training
  // ------------------------------------
  doc.setFont("times", "bold");
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text("Training", leftMargin, y);
  y += 2;
  addHeaderLine("Training");

  // Training Item 1
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 40);
  doc.text("Shadow Fox", leftMargin, y);
  doc.setFont("times", "normal");
  doc.text("Remote", pageWidth - rightMargin, y, { align: "right" });
  y += 4;
  doc.setFont("times", "italic");
  doc.setFontSize(9.5);
  doc.text("Web Development Intern", leftMargin, y);
  doc.text("Apr 2025 - May 2025", pageWidth - rightMargin, y, { align: "right" });
  y += 4.5;
  
  // Bullets Item 1
  const sfBullets = [
    "Developed a responsive portfolio website using HTML, CSS, and JavaScript.",
    "Improved website layout and navigation for better user experience.",
    "Optimized website performance and ensured compatibility across devices."
  ];
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  sfBullets.forEach(bullet => {
    doc.text("•", leftMargin + 3, y);
    const bulletLines = doc.splitTextToSize(bullet, usableWidth - 8);
    doc.text(bulletLines, leftMargin + 6, y);
    y += bulletLines.length * 3.8 + 0.5;
  });
  y += 2;

  // Training Item 2
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("INFOBEANS Foundation", leftMargin, y);
  doc.setFont("times", "normal");
  doc.text("Indore, India", pageWidth - rightMargin, y, { align: "right" });
  y += 4;
  doc.setFont("times", "italic");
  doc.setFontSize(9.5);
  doc.text("Java Full Stack Development Trainee", leftMargin, y);
  doc.text("Jul 2025 - Present", pageWidth - rightMargin, y, { align: "right" });
  y += 4.5;

  // Bullets Item 2
  const ibBullets = [
    "Learning and building full stack applications using Java, Spring Boot, HTML, CSS, and JavaScript.",
    "Developing REST APIs and integrating them with MySQL databases.",
    "Working on backend logic, database operations, and frontend UI development.",
    "Participating in daily Scrum meetings and collaborating with team members on projects."
  ];
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  ibBullets.forEach(bullet => {
    doc.text("•", leftMargin + 3, y);
    const bulletLines = doc.splitTextToSize(bullet, usableWidth - 8);
    doc.text(bulletLines, leftMargin + 6, y);
    y += bulletLines.length * 3.8 + 0.5;
  });
  y += 4;

  // ------------------------------------
  // Projects
  // ------------------------------------
  doc.setFont("times", "bold");
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text("Projects", leftMargin, y);
  y += 2;
  addHeaderLine("Projects");

  // Project 1
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("Waste Monitoring System", leftMargin, y);
  doc.setFont("times", "italic");
  doc.setFontSize(9.5);
  doc.text(" | Java, JSP, MySQL, JDBC", leftMargin + doc.getTextWidth("Waste Monitoring System"), y);
  y += 4.5;

  const p1Bullets = [
    "Developed a web-based system to manage garbage collection requests.",
    "Added tracking and status updates to help monitor requests easily."
  ];
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  p1Bullets.forEach(bullet => {
    doc.text("•", leftMargin + 3, y);
    const bulletLines = doc.splitTextToSize(bullet, usableWidth - 8);
    doc.text(bulletLines, leftMargin + 6, y);
    y += bulletLines.length * 3.8 + 0.5;
  });
  y += 2.5;

  // Project 2
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("Nest & Nook - Furniture Rental", leftMargin, y);
  doc.setFont("times", "italic");
  doc.setFontSize(9.5);
  doc.text(" | React, Spring Boot, Spring Security, MySQL", leftMargin + doc.getTextWidth("Nest & Nook - Furniture Rental"), y);
  y += 4.5;

  const p2Bullets = [
    "Developed a full-stack rental marketplace with JWT-based RBAC across 4 distinct user roles.",
    "Built a stock-aware booking engine with Razorpay and email-based OTP verification.",
    "Engineered a React UI featuring multi-step checkout, image uploads."
  ];
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  p2Bullets.forEach(bullet => {
    doc.text("•", leftMargin + 3, y);
    const bulletLines = doc.splitTextToSize(bullet, usableWidth - 8);
    doc.text(bulletLines, leftMargin + 6, y);
    y += bulletLines.length * 3.8 + 0.5;
  });
  y += 2.5;

  // Project 3
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("AI News Workflow", leftMargin, y);
  doc.setFont("times", "italic");
  doc.setFontSize(9.5);
  doc.text(" | Make.com", leftMargin + doc.getTextWidth("AI News Workflow"), y);
  y += 4.5;

  const p3Bullets = [
    "Built an automated system that collects and summarizes global news using AI APIs.",
    "Reduced manual research time by more than 1 hour daily using topic-based filtering."
  ];
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  p3Bullets.forEach(bullet => {
    doc.text("•", leftMargin + 3, y);
    const bulletLines = doc.splitTextToSize(bullet, usableWidth - 8);
    doc.text(bulletLines, leftMargin + 6, y);
    y += bulletLines.length * 3.8 + 0.5;
  });
  y += 4;

  // ------------------------------------
  // Education
  // ------------------------------------
  doc.setFont("times", "bold");
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text("Education", leftMargin, y);
  y += 2;
  addHeaderLine("Education");

  // Edu 1
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("Govt. Holkar Science College", leftMargin, y);
  doc.setFont("times", "normal");
  doc.text("Indore, India", pageWidth - rightMargin, y, { align: "right" });
  y += 4;
  doc.setFont("times", "italic");
  doc.setFontSize(9.5);
  doc.text("Bachelor of Computer Application (BCA); CGPA: 7.99", leftMargin, y);
  doc.setFont("times", "normal");
  doc.text("2023 - 2026", pageWidth - rightMargin, y, { align: "right" });
  y += 5.5;

  // Edu 2
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("New Eklavya English High School", leftMargin, y);
  doc.setFont("times", "normal");
  doc.text("Madhya Pradesh, India", pageWidth - rightMargin, y, { align: "right" });
  y += 4;
  doc.setFont("times", "italic");
  doc.setFontSize(9.5);
  doc.text("Higher Secondary (Class 12); Score: 91.2%", leftMargin, y);
  doc.setFont("times", "normal");
  doc.text("2022 - 2023", pageWidth - rightMargin, y, { align: "right" });
  y += 6;

  // ------------------------------------
  // Achievements & Profiles
  // ------------------------------------
  doc.setFont("times", "bold");
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text("Achievements & Profiles", leftMargin, y);
  y += 2;
  addHeaderLine("Achievements & Profiles");

  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("•", leftMargin + 3, y);
  const achievementText = "Google Cloud Arcade Facilitator Program: Participated in Google's cloud upskilling initiative, completing hands-on learning activities and cloud-based challenges. Earned recognition and Google Cloud swags for active participation and successful completion of the program.";
  const achievementLines = doc.splitTextToSize(achievementText, usableWidth - 8);
  doc.text(achievementLines, leftMargin + 6, y);

  // Save PDF
  doc.save("Vaibhav_Dapkara_Resume.pdf");
}
