
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-400 font-semibold mb-3">
            ABOUT OUR INSTITUTE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            VIRTUAL COMPUTER & SPOKEN CLASSES
          </h1>

          <p className="text-lg text-blue-100 max-w-3xl">
            Building digital skills, confidence and career opportunities
            through practical computer education and professional guidance.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="bg-blue-100 rounded-2xl min-h-80 flex items-center justify-center text-blue-900 p-8 text-center">
            <div>
              <div className="text-6xl mb-4">🏫</div>
              <h2 className="text-2xl font-bold">
                Our Institute
              </h2>
              <p className="mt-2">
                Classroom photograph will be added here.
              </p>
            </div>
          </div>

          <div>
            <p className="text-blue-700 font-bold uppercase tracking-wider">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-5">
              Education That Builds Skills and Confidence
            </h2>

            <p className="text-slate-600 leading-8 mb-4">
              VIRTUAL COMPUTER & SPOKEN CLASSES is dedicated to
              providing practical computer education, programming
              knowledge and professional skill development.
            </p>

            <p className="text-slate-600 leading-8">
              Our focus is to help students understand technology,
              practise real-world tasks and develop the confidence
              needed for future opportunities.
            </p>

            <p className="text-slate-600 leading-8 mt-4">
              We have been teaching from 2023 with the aim of
              providing the best guidance to our students.
            </p>
          </div>

        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-600 leading-7">
              To provide quality computer education through practical
              training, personal attention and step-by-step learning.
              We want every student to develop useful skills and confidence.
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              Our Vision
            </h2>
            <p className="text-slate-600 leading-7">
              To help students become confident, skilled and
              technology-ready individuals who can grow with
              changing digital and professional opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-3">
              Learn With the Right Guidance
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: "💻",
                title: "Practical Training",
                desc: "Learn through hands-on exercises and projects."
              },
              {
                icon: "👨‍🏫",
                title: "Personal Guidance",
                desc: "Get guidance and support throughout your learning."
              },
              {
                icon: "🤖",
                title: "AI & Modern Technology",
                desc: "Explore AI tools and modern digital applications."
              },
              {
                icon: "📚",
                title: "Multiple Courses",
                desc: "Choose from computer, programming and professional courses."
              },
              {
                icon: "🎓",
                title: "Career Development",
                desc: "Build skills useful for education and career opportunities."
              },
              {
                icon: "🌟",
                title: "Learning Environment",
                desc: "Learn in a supportive and focused environment."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="bg-blue-950 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 font-semibold">
            MEET YOUR INSTRUCTOR
          </p>

          <h2 className="text-3xl font-bold mt-3 mb-5">
            Rupam Singh
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto leading-8">
            Dedicated to practical computer education, programming
            and professional skill development. Our goal is to help
            students learn step by step and build confidence.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="bg-white/10 px-5 py-2 rounded-full">
              BCA
            </span>
            <span className="bg-white/10 px-5 py-2 rounded-full">
              MDCA
            </span>
            <span className="bg-white/10 px-5 py-2 rounded-full">
              Advanced Excel
            </span>
            <span className="bg-white/10 px-5 py-2 rounded-full">
              Tally Prime with GST
            </span>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Start Your Learning Journey Today
        </h2>

        <p className="text-slate-600 mb-7">
          Contact us to know more about courses and admissions.
        </p>

        <a
          href="https://wa.me/919081755627"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800"
        >
          Enquire on WhatsApp →
        </a>
      </section>

    </main>
  );
}
