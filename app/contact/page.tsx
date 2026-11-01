
"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function ContactPage() {
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");

    if (studentName.trim().length < 2) {
      setStatus("Please enter your full name.");
      return;
    }

    if (!/^[0-9+() -]{8,20}$/.test(phone.trim())) {
      setStatus("Please enter a valid mobile number.");
      return;
    }

    if (!course) {
      setStatus("Please select a course.");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "enquiries"), {
        studentName: studentName.trim(),
        phone: phone.trim(),
        course,
        message: message.trim(),
        createdAt: serverTimestamp(),
      });

      setStatus("Your enquiry has been submitted successfully!");
      setStudentName("");
      setPhone("");
      setCourse("");
      setMessage("");
    } catch (error) {
      console.error("Enquiry error:", error);
      setStatus("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-14 px-4">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="font-bold uppercase tracking-widest text-amber-600">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-blue-950 md:text-5xl">
            Let's Talk About Your Learning Goals
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Fill out the enquiry form and get information about courses,
            syllabus, duration and admission.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <section className="rounded-2xl bg-blue-950 p-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold">
              VIRTUAL COMPUTER & SPOKEN CLASSES
            </h2>

            <p className="mt-3 text-blue-100">
              Learn Skills. Build Your Future.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <h3 className="font-bold text-amber-400">Address</h3>
                <p className="mt-1 text-blue-100">
                  J12, Jayraj Society, Ichhapore-3,
                  Surat, Gujarat 394510
                </p>
              </div>

              <div>
                <h3 className="font-bold text-amber-400">Mobile Number</h3>
                <a href="tel:+919081755627" className="mt-1 block text-blue-100">
                  +91 9081755627
                </a>
                <a href="tel:+918469350498" className="block text-blue-100">
                  +91 8469350498
                </a>
              </div>

              <div>
                <h3 className="font-bold text-amber-400">Email</h3>
                <a
                  href="mailto:VIRTUALCOMPUTERCLASSES@GMAIL.COM"
                  className="mt-1 block break-all text-blue-100"
                >
                  VIRTUALCOMPUTERCLASSES@GMAIL.COM
                </a>
              </div>

            </div>

            <a
              href="https://wa.me/919081755627"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-block rounded-lg bg-green-500 px-6 py-3 font-bold text-white hover:bg-green-600"
            >
              Chat on WhatsApp
            </a>
          </section>

          {/* Enquiry Form */}
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="mb-2 text-2xl font-bold text-blue-950">
              Course Enquiry Form
            </h2>

            <p className="mb-7 text-sm text-slate-500">
              Fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="mb-5">
                <label className="mb-2 block font-semibold text-slate-700">
                  Student Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
                />
              </div>

              <div className="mb-5">
                <label className="mb-2 block font-semibold text-slate-700">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
                />
              </div>

              <div className="mb-5">
                <label className="mb-2 block font-semibold text-slate-700">
                  Select Course *
                </label>
                <select
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-700"
                >
                  <option value="">Choose your course</option>
                  <option value="CCC">CCC</option>
                  <option value="CCA">CCA</option>
                  <option value="DCA">DCA</option>
                  <option value="ADCA">ADCA</option>
                  <option value="DCAP">DCAP</option>
                  <option value="Advanced Excel">Advanced Excel</option>
                  <option value="Python Programming">Python Programming</option>
                  <option value="SQL">SQL</option>
                  <option value="Tally Prime with GST">Tally Prime with GST</option>
                  <option value="Web Page Development">Web Page Development</option>
                  <option value="Canva AI Tools">Canva AI Tools</option>
                  <option value="ChatGPT and Gemini">ChatGPT and Gemini</option>
                  <option value="Spoken English">Spoken English</option>
                  <option value="Professional Communication">Professional Communication</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="mb-2 block font-semibold text-slate-700">
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What would you like to know about the course?"
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-700"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-950 px-6 py-4 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>

              {status && (
                <p className="mt-4 rounded-lg bg-slate-100 p-3 text-center text-sm font-medium text-slate-700">
                  {status}
                </p>
              )}

              <p className="mt-4 text-center text-xs text-slate-500">
                Your enquiry details will be submitted securely to our enquiry
                database. Please do not enter passwords or OTPs.
              </p>

            </form>
          </section>

        </div>
      </div>
    </main>
  );
}
