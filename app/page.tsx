"use client";

import { useEffect, useState } from "react";

const classroomPhotos = [
  "/classroom/classroom-1.jpg",
  "/classroom/classroom-2.jpeg",
  "/classroom/classroom-3.jpg",
  "/classroom/classroom-4.jpeg",
];

const studentPhotos = [
  "/students/student-1.jpg",
  "/students/student-2.jpg",
];

const certificatePhotos = [
  "/certificates/certificate-1.jpg",
  "/certificates/certificate-2.jpg",
];

const courses = [
  {
    number: "01",
    category: "Featured Programme",
    title: "DCAP",
    subtitle: "Diploma in Computer Application & Programming",
    description:
      "From computer fundamentals to programming, web development and AI-powered tools.",
    icon: "</>",
    featured: true,
  },
  {
    number: "02",
    category: "Office Productivity",
    title: "Advanced Excel",
    subtitle: "Excel & Data Analysis",
    description:
      "Formulas, lookup functions, PivotTables, dashboards and professional reporting.",
    icon: "▦",
  },
  {
    number: "03",
    category: "Programming",
    title: "Python Programming",
    subtitle: "Learn Coding Step by Step",
    description:
      "Build programming logic through variables, conditions, loops and practical projects.",
    icon: "{ }",
  },
  {
    number: "04",
    category: "Web Development",
    title: "Web Page Development",
    subtitle: "HTML, CSS & JavaScript",
    description:
      "Learn website structure, design, responsive layouts and interactive web pages.",
    icon: "⌘",
  },
  {
    number: "05",
    category: "Accounting",
    title: "Tally Prime with GST",
    subtitle: "Practical Accounting",
    description:
      "Company creation, ledgers, vouchers, inventory and GST-related accounting.",
    icon: "₹",
  },
  {
    number: "06",
    category: "Computer Applications",
    title: "DCA, ADCA & CCC",
    subtitle: "Computer Fundamentals",
    description:
      "Develop essential computer, office application and digital productivity skills.",
    icon: "▤",
  },
  {
    number: "07",
    category: "Communication",
    title: "Spoken English",
    subtitle: "Speak with Confidence",
    description:
      "Improve grammar, vocabulary, pronunciation and everyday communication.",
    icon: "A",
  },
  {
    number: "08",
    category: "Artificial Intelligence",
    title: "ChatGPT & Gemini",
    subtitle: "Generative AI Tools",
    description:
      "Explore AI tools for learning, content creation and everyday productivity.",
    icon: "✧",
  },
  {
    number: "09",
    category: "Professional Skills",
    title: "Professional Communication",
    subtitle: "Workplace Readiness",
    description:
      "Practise interviews, presentations, professional emails and communication.",
    icon: "◎",
  },
];

const benefits = [
  {
    icon: "01",
    title: "Practical Training",
    description:
      "Understand concepts through hands-on exercises, assignments and projects.",
  },
  {
    icon: "02",
    title: "Personal Guidance",
    description:
      "Learn step by step with guidance and support throughout your learning journey.",
  },
  {
    icon: "03",
    title: "Modern Skills",
    description:
      "Explore programming, digital tools, productivity applications and AI.",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Computer Fundamentals",
    description: "Computer basics, typing and office applications",
  },
  {
    number: "02",
    title: "Web Development",
    description: "HTML, CSS and JavaScript",
  },
  {
    number: "03",
    title: "Programming",
    description: "Python, Node.js and programming concepts",
  },
  {
    number: "04",
    title: "AI & Practical Projects",
    description: "Modern AI tools and practical learning activities",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    "Computer Applications",
    "Programming",
    "Artificial Intelligence",
    "Professional Skills",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSkill((previous) => (previous + 1) % skills.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FB] text-[#17243A]">

      <style>{`
        html { scroll-behavior: smooth; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes softFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }

        @keyframes skillFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp .8s ease both; }
        .skill-text { animation: skillFade .45s ease both; }
        .soft-float { animation: softFloat 5s ease-in-out infinite; }

        .premium-card {
          transition: transform .3s ease, box-shadow .3s ease,
          border-color .3s ease;
        }

        .premium-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 22px 45px rgba(15, 35, 70, .11);
          border-color: #D7A943;
        }

        .gallery-image img {
          transition: transform .55s ease;
        }

        .gallery-image:hover img { transform: scale(1.06); }

        .gold-line {
          width: 46px;
          height: 3px;
          background: #D7A943;
          border-radius: 20px;
        }

        .section-label {
          color: #A77D28;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="bg-[#102746] px-4 py-2.5 text-[11px] font-semibold text-white sm:text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2">
          <span>📍 Ichhapore-3, Surat, Gujarat</span>
          <span>☎ +91 9081755627 &nbsp; | &nbsp; +91 8469350498</span>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-4 px-4 md:px-8">

          <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
            <img
              src="/images/logo/logo.png"
              alt="Institute Logo"
              className="h-14 w-14 rounded-xl object-contain md:h-[68px] md:w-[68px]"
            />

            <div className="leading-none">
              <div className="text-[16px] font-black tracking-tight text-[#102B55] sm:text-xl md:text-2xl">
                VIRTUAL COMPUTER
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-[2px] w-5 bg-[#D7A943]" />
                <span className="text-[10px] font-black tracking-[2px] text-[#A77D28] sm:text-xs">
                  & SPOKEN CLASSES
                </span>
              </div>

              <p className="mt-1.5 text-[8px] font-bold tracking-[2px] text-slate-400">
                LEARN • PRACTISE • GROW
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-[13px] font-bold text-slate-700 lg:flex">
            <a href="#home" className="transition hover:text-[#B1842E]">Home</a>
            <a href="#about" className="transition hover:text-[#B1842E]">About</a>
            <a href="#courses" className="transition hover:text-[#B1842E]">Courses</a>
            <a href="#dcap" className="transition hover:text-[#B1842E]">DCAP</a>
            <a href="/gallery" className="transition hover:text-[#B1842E]">Gallery</a>
            <a href="/contact" className="transition hover:text-[#B1842E]">Contact</a>
            <a href="/admin" className="transition hover:text-[#B1842E]">Admin</a>
          </nav>

          <a
            href="/contact"
            className="hidden rounded-lg bg-[#D7A943] px-5 py-3 text-xs font-black text-[#17243A] shadow-md transition hover:bg-[#E8BF62] lg:block"
          >
            ENQUIRE NOW ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-xl text-[#102B55] lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg lg:hidden">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Courses", "#courses"],
              ["DCAP", "#dcap"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
              ["Admin Login", "/admin"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                onClick={closeMenu}
                className="block border-b border-slate-100 py-3 text-sm font-bold text-[#102B55]"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-[#102746] text-white">

        <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="absolute -right-20 -top-28 h-[400px] w-[400px] rounded-full border border-white/10" />
        <div className="absolute -bottom-60 -left-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-[1.08fr_.92fr] md:px-10 md:py-28">

          <div className="fade-up">
            <div className="mb-7 inline-flex items-center gap-3 rounded-md border border-[#D7A943]/40 bg-[#D7A943]/10 px-4 py-2 text-[11px] font-black tracking-[2px] text-[#F3D58F]">
              <span className="h-2 w-2 rounded-full bg-[#D7A943]" />
              ADMISSIONS OPEN
              <span className="text-white/50">|</span>
              CITC – THE HUB OF IT
            </div>

            <p className="mb-4 text-sm font-bold tracking-[3px] text-blue-200">
              YOUR SKILLS. YOUR FUTURE.
            </p>

            <h1 className="max-w-2xl text-[43px] font-black leading-[1.08] tracking-tight sm:text-5xl md:text-[66px]">
              Build Your Future
              <span className="mt-2 block text-[#F1C76B]">
                with Digital Skills.
              </span>
            </h1>

            <div className="mt-7 min-h-8 text-lg font-bold text-blue-100 md:text-xl">
              Learn
              <span key={activeSkill} className="skill-text ml-2 inline-block text-[#F1C76B]">
                {skills[activeSkill]}
              </span>
            </div>

            <p className="mt-5 max-w-xl text-[15px] leading-8 text-blue-100/90 md:text-base">
              Learn computer applications, programming, Artificial Intelligence
              and professional skills through practical training and personal
              guidance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#courses"
                className="rounded-lg bg-[#D7A943] px-7 py-4 text-sm font-black text-[#17243A] shadow-xl transition hover:-translate-y-1 hover:bg-[#EBC66E]"
              >
                EXPLORE COURSES →
              </a>

              <a
                href="/contact"
                className="rounded-lg border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#102746]"
              >
                ENQUIRE NOW
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-blue-100">
              <span>✓ Teaching from 2023</span>
              <span>✓ Practical Learning</span>
              <span>✓ Personal Guidance</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[550px]">

            <div className="absolute -left-4 -top-5 z-10 hidden rounded-xl border border-white/20 bg-white px-5 py-4 text-[#102746] shadow-xl sm:block">
              <p className="text-[10px] font-black tracking-widest text-[#A77D28]">
                LEARN BY DOING
              </p>
              <p className="mt-1 text-sm font-black">Practical Education</p>
            </div>

            <div className="overflow-hidden rounded-2xl border-[6px] border-white/10 shadow-2xl">
              <img
                src={classroomPhotos[0]}
                alt="Virtual Computer classroom"
                className="h-[290px] w-full object-cover sm:h-[380px] md:h-[440px]"
              />
            </div>

            <div className="absolute -bottom-7 right-4 rounded-xl border border-slate-200 bg-white p-5 text-[#102746] shadow-2xl sm:right-8">
              <p className="text-[10px] font-black tracking-[2px] text-[#A77D28]">
                VIRTUAL COMPUTER
              </p>
              <p className="mt-1 text-lg font-black">
                Learn. Practise. Grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / HIGHLIGHTS */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 md:px-10">
        <div className="grid overflow-hidden rounded-xl bg-white shadow-[0_15px_45px_rgba(15,35,70,.09)] sm:grid-cols-3">
          {[
            ["2023", "Teaching Experience"],
            ["PRACTICAL", "Learning Approach"],
            ["PERSONAL", "Student Guidance"],
          ].map(([number, label], index) => (
            <div
              key={label}
              className={`px-5 py-7 text-center ${index !== 2 ? "border-b border-slate-100 sm:border-b-0 sm:border-r" : ""}`}
            >
              <p className="text-2xl font-black tracking-tight text-[#102B55]">
                {number}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div className="relative grid grid-cols-2 gap-4">
            {classroomPhotos.slice(0, 2).map((photo, index) => (
              <div
                key={photo}
                className={`overflow-hidden rounded-xl shadow-lg ${index === 1 ? "mt-12" : ""}`}
              >
                <img
                  src={photo}
                  alt={`Institute classroom ${index + 1}`}
                  className="h-64 w-full object-cover md:h-72"
                />
              </div>
            ))}

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-[#102B55] px-6 py-4 text-center text-white shadow-xl">
              <p className="text-xl font-black text-[#F1C76B]">2023</p>
              <p className="text-[10px] font-bold tracking-widest">TEACHING FROM</p>
            </div>
          </div>

          <div>
            <p className="section-label">About Our Institute</p>
            <div className="gold-line mt-3" />

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-[#102B55] md:text-[42px]">
              Education That Builds Skills and Confidence.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-slate-600">
              VIRTUAL COMPUTER & SPOKEN CLASSES is focused on practical
              computer education, programming and professional skill
              development.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              Our learning approach combines structured lessons, practical
              exercises and personal guidance to help students develop
              useful skills for the digital world.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Practical exercises and project-based learning",
                "Computer applications and programming training",
                "Professional communication development",
                "Modern digital and AI tools",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EAF0F8] text-xs font-black text-[#A77D28]">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="mt-9 inline-flex items-center gap-3 border-b-2 border-[#D7A943] pb-2 text-sm font-black text-[#102B55]"
            >
              DISCOVER OUR INSTITUTE →
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-2xl">
            <p className="section-label">The Learning Experience</p>
            <div className="gold-line mt-3" />
            <h2 className="mt-5 text-3xl font-black text-[#102B55] md:text-4xl">
              More Than Just a Computer Class.
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              A learning environment designed to help students understand,
              practise and improve.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="premium-card rounded-xl border border-slate-200 bg-[#F8FAFD] p-8"
              >
                <p className="text-4xl font-black text-[#D7A943]">
                  {item.icon}
                </p>
                <h3 className="mt-7 text-xl font-black text-[#102B55]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl">
              <p className="section-label">Our Programmes</p>
              <div className="gold-line mt-3" />
              <h2 className="mt-5 text-3xl font-black text-[#102B55] md:text-4xl">
                Choose the Skills You Want to Build.
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                Professional learning programmes for computer skills,
                programming, accounting and communication.
              </p>
            </div>

            <a
              href="/courses"
              className="rounded-lg border border-[#102B55] px-5 py-3 text-xs font-black text-[#102B55] transition hover:bg-[#102B55] hover:text-white"
            >
              VIEW ALL COURSES →
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.number}
                className={`premium-card relative rounded-xl border p-7 ${
                  course.featured
                    ? "border-[#D7A943] bg-[#102B55] text-white shadow-xl"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black tracking-widest ${course.featured ? "text-[#F1C76B]" : "text-[#A77D28]"}`}>
                    {course.category}
                  </span>
                  <span className={`text-sm font-black ${course.featured ? "text-white/30" : "text-slate-300"}`}>
                    {course.number}
                  </span>
                </div>

                <div className={`mt-7 flex h-14 w-14 items-center justify-center rounded-xl text-xl font-black ${
                  course.featured
                    ? "bg-[#D7A943] text-[#102746]"
                    : "bg-[#EAF0F8] text-[#102B55]"
                }`}>
                  {course.icon}
                </div>

                <h3 className={`mt-6 text-xl font-black ${course.featured ? "text-white" : "text-[#102B55]"}`}>
                  {course.title}
                </h3>

                <p className={`mt-2 text-xs font-bold ${course.featured ? "text-[#F1C76B]" : "text-[#A77D28]"}`}>
                  {course.subtitle}
                </p>

                <p className={`mt-4 min-h-[70px] text-sm leading-7 ${course.featured ? "text-blue-100" : "text-slate-500"}`}>
                  {course.description}
                </p>

                <a
                  href={course.featured ? "#dcap" : "/contact"}
                  className={`mt-6 inline-flex items-center gap-2 border-b pb-1 text-xs font-black ${
                    course.featured
                      ? "border-[#D7A943] text-[#F1C76B]"
                      : "border-slate-300 text-[#102B55]"
                  }`}
                >
                  {course.featured ? "EXPLORE PROGRAMME" : "ENQUIRE NOW"} →
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* DCAP FEATURE SECTION */}
      <section id="dcap" className="relative overflow-hidden bg-[#102746] px-5 py-24 text-white md:px-10">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <p className="text-xs font-black tracking-[3px] text-[#F1C76B]">
              OUR FLAGSHIP PROGRAMME
            </p>
            <div className="gold-line mt-3" />

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              DCAP
              <span className="mt-2 block text-[#F1C76B]">
                Learn. Create. Programme.
              </span>
            </h2>

            <p className="mt-6 text-lg font-bold text-blue-100">
              Diploma in Computer Application and Programming
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-blue-100/80">
              Start with computer fundamentals and move towards web
              development, programming and AI-powered tools. Develop
              practical knowledge step by step.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Computer Fundamentals",
                "Typing & MS Office",
                "Advanced Excel",
                "HTML & CSS",
                "JavaScript",
                "Python & Node.js",
                "AI Tools",
                "Practical Projects",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-xs font-semibold text-blue-50">
                  <span className="text-[#F1C76B]">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919081755627?text=Hello%2C%20I%20am%20interested%20in%20DCAP.%20Please%20share%20the%20syllabus%2C%20duration%20and%20fees."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-lg bg-[#D7A943] px-7 py-4 text-sm font-black text-[#17243A] transition hover:-translate-y-1 hover:bg-[#EBC66E]"
            >
              GET DCAP COURSE DETAILS ↗
            </a>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl md:p-9">
            <p className="mb-7 text-xs font-black tracking-[2px] text-[#F1C76B]">
              YOUR LEARNING JOURNEY
            </p>

            {learningSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex gap-5 py-6 ${index !== learningSteps.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D7A943] text-sm font-black text-[#102746]">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-100/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-7 rounded-xl bg-[#D7A943]/10 p-5">
              <p className="text-xs font-black tracking-widest text-[#F1C76B]">
                THE GOAL
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-white">
                Develop the knowledge and confidence to use modern digital
                tools and create practical solutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CLASSROOM GALLERY */}
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="section-label">Our Infrastructure</p>
            <div className="gold-line mx-auto mt-3" />
            <h2 className="mt-5 text-3xl font-black text-[#102B55] md:text-4xl">
              A Place to Learn and Grow.
            </h2>
            <p className="mt-4 text-sm text-slate-500">
              Explore our classroom and learning environment.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {classroomPhotos.map((photo, index) => (
              <div
                key={photo}
                className="gallery-image group overflow-hidden rounded-xl bg-white shadow-md"
              >
                <img
                  src={photo}
                  alt={`Institute classroom ${index + 1}`}
                  className="h-64 w-full object-cover"
                />
                <div className="border border-t-0 border-slate-100 px-4 py-4">
                  <p className="text-sm font-black text-[#102B55]">
                    {index === 0 ? "Computer Learning" : `Classroom View 0${index + 1}`}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Our learning environment
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 text-center">
            <a
              href="/gallery"
              className="inline-block rounded-lg border border-[#102B55] px-7 py-3 text-xs font-black text-[#102B55] transition hover:bg-[#102B55] hover:text-white"
            >
              VIEW FULL GALLERY →
            </a>
          </div>
        </div>
      </section>

      {/* STUDENT ACHIEVEMENTS */}
      <section className="bg-white px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="section-label">Student Achievements</p>
              <div className="gold-line mt-3" />
              <h2 className="mt-5 text-3xl font-black text-[#102B55] md:text-4xl">
                Our Students. Our Pride.
              </h2>
              <p className="mt-4 text-sm text-slate-500">
                Celebrating learning, dedication and progress.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {studentPhotos.map((photo, index) => (
              <div key={photo} className="gallery-image overflow-hidden rounded-xl shadow-lg">
                <img
                  src={photo}
                  alt={`Student achievement ${index + 1}`}
                  className="h-72 w-full object-cover md:h-96"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="section-label">Recognition & Achievements</p>
            <div className="gold-line mx-auto mt-3" />
            <h2 className="mt-5 text-3xl font-black text-[#102B55] md:text-4xl">
              Student Certificates.
            </h2>
            <p className="mt-4 text-sm text-slate-500">
              A glimpse of student learning achievements.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {certificatePhotos.map((photo, index) => (
              <div
                key={photo}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg"
              >
                <img
                  src={photo}
                  alt={`Student certificate ${index + 1}`}
                  className="h-72 w-full rounded-lg object-contain md:h-80"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      
      {/* INSTRUCTOR */}
      <section className="bg-white px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[260px_1fr]">

          <div className="h-80 w-full overflow-hidden rounded-xl bg-[#EAF0F8] shadow-lg">
            <img
              src="/faculty/rupam-singh.jpg"
              alt="Rupam Singh - Instructor"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <p className="section-label">Meet Your Instructor</p>
            <div className="gold-line mt-3" />

            <h2 className="mt-5 text-3xl font-black text-[#102B55] md:text-4xl">
              Learn with Personal Guidance.
            </h2>

            <h3 className="mt-5 text-xl font-black text-[#A77D28]">
              Rupam Singh
            </h3>

            <p className="mt-2 text-sm font-bold text-slate-500">
              BCA · MDCA
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600">
              Focused on practical computer education, programming and
              professional skill development. Helping students strengthen
              their knowledge through structured lessons, practical work
              and regular guidance.
            </p>
          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#102746] px-5 py-20 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 md:flex-row md:items-center">

          <div className="max-w-2xl">
            <p className="text-xs font-black tracking-[3px] text-[#F1C76B]">
              TAKE THE FIRST STEP
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Your Future Starts with the Right Skills.
            </h2>
            <p className="mt-5 text-sm leading-7 text-blue-100">
              Contact us to know about course syllabus, duration, fees
              and admission.
            </p>
            <p className="mt-4 text-xs font-semibold text-blue-200">
              J12, Jayraj Society, Ichhapore-3, Surat, Gujarat 394510
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-lg bg-[#D7A943] px-7 py-4 text-sm font-black text-[#17243A] transition hover:bg-[#EBC66E]"
            >
              SEND ENQUIRY →
            </a>
            <a
              href="https://wa.me/919081755627"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#102746]"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#091A30] px-5 pb-7 pt-16 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/logo/logo.png"
                alt="Institute Logo"
                className="h-14 w-14 rounded-lg object-contain"
              />
              <div>
                <h3 className="text-lg font-black tracking-tight">
                  VIRTUAL COMPUTER
                </h3>
                <p className="mt-1 text-xs font-black tracking-[2px] text-[#D7A943]">
                  & SPOKEN CLASSES
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Practical computer education, programming, AI tools and
              professional skill development.
            </p>

            <p className="mt-4 text-xs font-bold tracking-widest text-[#D7A943]">
              LEARN • PRACTISE • GROW
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black tracking-widest text-white">
              QUICK LINKS
            </h3>
            <div className="mt-6 grid gap-4 text-sm text-slate-400">
              <a href="/about" className="hover:text-[#D7A943]">About Us</a>
              <a href="/courses" className="hover:text-[#D7A943]">Our Courses</a>
              <a href="/gallery" className="hover:text-[#D7A943]">Gallery</a>
              <a href="/contact" className="hover:text-[#D7A943]">Contact Us</a>
              <a href="/privacy-policy" className="hover:text-[#D7A943]">Privacy Policy</a>
              <a href="/admin" className="hover:text-[#D7A943]">Admin Login</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black tracking-widest text-white">
              CONTACT DETAILS
            </h3>

            <div className="mt-6 space-y-5 text-sm text-slate-400">
              <p>📍 J12, Jayraj Society, Ichhapore-3, Surat, Gujarat 394510</p>
              <p>
                ☎ <a href="tel:+919081755627" className="hover:text-[#D7A943]">+91 9081755627</a>
              </p>
              <p>
                ☎ <a href="tel:+918469350498" className="hover:text-[#D7A943]">+91 8469350498</a>
              </p>
              <p>
                ✉ <a href="mailto:VIRTUALCOMPUTERCLASSES@GMAIL.COM" className="break-all hover:text-[#D7A943]">
                  VIRTUALCOMPUTERCLASSES@GMAIL.COM
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© 2026 VIRTUAL COMPUTER & SPOKEN CLASSES. All Rights Reserved.</p>
          <p>Learn. Practise. Grow.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919081755627"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#159B59] text-2xl text-white shadow-2xl transition hover:scale-110 hover:bg-[#117B48]"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.56 0 .24 5.32.24 11.86c0 2.09.55 4.13 1.6 5.93L.15 24l6.36-1.67a11.9 11.9 0 0 0 5.58 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.44-8.41ZM12.1 21.74h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.77.99 1.01-3.68-.23-.38a9.84 9.84 0 0 1-1.51-5.23c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.45-4.44 9.87-9.91 9.87Zm5.43-7.4c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </a>

    </main>
  );
}