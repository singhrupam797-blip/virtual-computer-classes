"use client";
const galleryItems = [
  {
    title: "Computer Lab",
    description: "Our computer learning environment",
    image: "/images/lab-01.jpg",
  },
  {
    title: "Classroom",
    description: "Students learning together",
    image: "/images/classroom-01.jpg",
  },
  {
    title: "Practical Training",
    description: "Hands-on computer practice",
    image: "/images/practical-01.jpg",
  },
  {
    title: "Student Activities",
    description: "Learning through activities",
    image: "/images/students-01.jpg",
  },
  {
    title: "Certificate Distribution",
    description: "Celebrating student achievements",
    image: "/images/achievement-01.jpg",
  },
  {
    title: "Institute Facilities",
    description: "Our institute and facilities",
    image: "/images/lab-02.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-blue-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-400 font-bold mb-3">
            OUR GALLERY
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Life at Our Institute
          </h1>

          <p className="text-blue-100 text-lg max-w-2xl">
            Explore our classrooms, computer lab, practical
            training and student activities.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-blue-700 font-bold">
              OUR MEMORIES
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-3">
              Learning, Practising & Growing
            </h2>

            <p className="text-slate-600 mt-4">
              A glimpse of our institute and learning environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition"
              >
                <div className="h-64 bg-blue-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="h-full flex items-center justify-center text-blue-900 text-center p-4">
                    <div>
                      <div className="text-5xl mb-3">📷</div>
                      <p className="font-semibold">
                        Add {item.title} Photo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-14 bg-blue-950 rounded-2xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Want to Be a Part of Our Institute?
            </h2>

            <p className="text-blue-100 mb-7">
              Join us and start building your digital skills.
            </p>

            <a
              href="https://wa.me/919081755627"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-blue-950 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300"
            >
              Enquire Now →
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
