
const phone = "919081755627";

const featuredCourses = [
  {
    icon: "▦",
    title: "DCA",
    subtitle: "Professional Computer Applications",
    description:
      "Build a strong foundation in computer applications, office tools and essential digital skills.",
    topics: ["Computer Fundamentals", "MS Word", "MS Excel", "PowerPoint", "Internet & Email"],
  },
  {
    icon: "{ }",
    title: "DCAP",
    subtitle: "Computer Applications & Programming",
    description:
      "Progress from computer basics to programming, website development and practical AI tools.",
    topics: ["Computer Basics & Typing", "MS Office", "HTML & CSS", "JavaScript", "Python & AI Tools"],
  },
  {
    icon: "▤",
    title: "Advanced Excel",
    subtitle: "Data Analytics & MIS Reporting",
    description:
      "Learn professional Excel skills to manage data, prepare reports and create interactive dashboards.",
    topics: ["Advanced Formulas", "VLOOKUP & XLOOKUP", "Pivot Tables", "Data Analysis", "MIS Dashboards"],
  },
  {
    icon: "₹",
    title: "Tally Prime",
    subtitle: "Professional Accounting with GST",
    description:
      "Understand practical accounting, business transactions and GST operations using Tally Prime.",
    topics: ["Accounting Fundamentals", "Voucher Entries", "Inventory", "GST", "Financial Reports"],
  },
  {
    icon: "⌘",
    title: "Python",
    subtitle: "Programming & Automation",
    description:
      "Start programming from scratch and develop logical thinking through hands-on Python projects.",
    topics: ["Python Basics", "Conditions & Loops", "Functions", "Lists & Dictionaries", "Projects"],
  },
  {
    icon: "✧",
    title: "Generative AI",
    subtitle: "ChatGPT, Gemini & AI Productivity",
    description:
      "Learn to use modern AI tools for learning, productivity, content creation and everyday work.",
    topics: ["ChatGPT", "Google Gemini", "AI Prompting", "AI Productivity", "Practical AI Tasks"],
  },
];

const categories = [
  {
    title: "Computer Fundamentals",
    description: "Start your digital learning journey with essential computer knowledge.",
    courses: ["CCC", "CCA", "CCB"],
  },
  {
    title: "Computer Applications & Diplomas",
    description: "Develop practical computer application skills for study and work.",
    courses: ["DCA", "ADCA"],
  },
  {
    title: "Web & Technology",
    description: "Understand websites, databases and the technology behind digital platforms.",
    courses: ["WPD – Web Page Designing", "SQL & Database Management"],
  },
  {
    title: "Creative & AI Tools",
    description: "Create digital designs and explore modern AI-powered tools.",
    courses: ["Canva AI Tools", "ChatGPT & Gemini"],
  },
  {
    title: "Communication Skills",
    description: "Improve your communication and confidence for everyday and professional life.",
    courses: ["Spoken English", "Professional Communication"],
  },
];

function enquiryLink(course: string) {
  const message = `Hello, I am interested in the ${course} course. Please share the syllabus, duration and fees.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="bg-gradient-to-br from-[#102B55] via-[#173A72] to-[#24528E] px-5 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-amber-300">
            Learn • Practise • Grow
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Explore Our <span className="text-amber-300">Courses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            From computer fundamentals to programming, data analytics and
            artificial intelligence — learn practical skills for your future.
          </p>
          <a
            href="#featured"
            className="mt-8 inline-block rounded-lg bg-amber-400 px-7 py-3 font-bold text-slate-900 transition hover:bg-amber-300"
          >
            Explore Featured Courses ↓
          </a>
        </div>
      </section>

      <section id="featured" className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-widest text-amber-600">
              Our Popular Programmes
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#173A72] md:text-4xl">
              Featured Courses
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Build valuable skills with structured learning and practical
              training.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <article
                key={course.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-blue-50 text-2xl font-bold text-[#173A72]">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-[#173A72]">
                  {course.title}
                </h3>
                <p className="mt-1 font-semibold text-amber-700">
                  {course.subtitle}
                </p>
                <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-5">
                  <p className="mb-3 text-sm font-bold text-slate-800">
                    What You Will Learn
                  </p>
                  <ul className="space-y-2">
                    {course.topics.map((topic) => (
                      <li key={topic} className="text-sm text-slate-600">
                        <span className="mr-2 font-bold text-emerald-600">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href={enquiryLink(course.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-[#173A72] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#102B55]"
                  >
                    View / Enquire
                  </a>
                  <a
                    href={enquiryLink(course.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-amber-500 px-4 py-3 text-center text-sm font-bold text-amber-700 transition hover:bg-amber-50"
                  >
                    Enquire for Fees
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-widest text-amber-600">
              More Learning Opportunities
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#173A72] md:text-4xl">
              Explore All Course Categories
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:border-amber-400 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#173A72]">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
                <ul className="mt-5 space-y-3">
                  {category.courses.map((course) => (
                    <li
                      key={course}
                      className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3 text-sm font-semibold"
                    >
                      <span>{course}</span>
                      <a
                        href={enquiryLink(course)}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 font-bold text-amber-700 hover:underline"
                      >
                        Enquire ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102B55] px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Not Sure Which Course to Choose?
          </h2>
          <p className="mt-4 leading-7 text-blue-100">
            Tell us about your learning goals. We will help you understand the
            course, syllabus, duration and admission process.
          </p>
          <a
            href={enquiryLink("course guidance")}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-lg bg-amber-400 px-7 py-3 font-bold text-slate-900 hover:bg-amber-300"
          >
            Talk to Us on WhatsApp ↗
          </a>
        </div>
      </section>
    </main>
  );
}
