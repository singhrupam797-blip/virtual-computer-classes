
"use client";

import { useEffect, useState, FormEvent } from "react";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";

interface Enquiry {
  id: string;
  studentName: string;
  phone: string;
  course: string;
  message: string;
  createdAt?: Timestamp | null;
}

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Check admin login status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Login function
  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      setPassword("");
      setSuccess("Login successful!");
    } catch (err: unknown) {
      console.error("Firebase Login Error:", err);

      const firebaseError = err as {
        code?: string;
        message?: string;
      };

      const errorCode = firebaseError.code || "unknown";
      let errorMessage = firebaseError.message || "Something went wrong.";

      switch (errorCode) {
        case "auth/invalid-credential":
          errorMessage =
            "Email ya password incorrect hai. Firebase Authentication mein admin email check karein ya password reset karein.";
          break;

        case "auth/user-not-found":
          errorMessage =
            "Is email se admin account nahi mila. Firebase Console mein correct project check karein.";
          break;

        case "auth/wrong-password":
          errorMessage =
            "Password incorrect hai. Firebase Console se password reset karein.";
          break;

        case "auth/invalid-email":
          errorMessage =
            "Email address ka format incorrect hai.";
          break;

        case "auth/invalid-api-key":
          errorMessage =
            "Firebase API key invalid hai. app/firebase.ts mein configuration check karein.";
          break;

        case "auth/operation-not-allowed":
          errorMessage =
            "Firebase Authentication mein Email/Password sign-in enable nahi hai.";
          break;

        case "auth/too-many-requests":
          errorMessage =
            "Bahut saare login attempts hue hain. Kuch der baad try karein.";
          break;

        case "auth/network-request-failed":
          errorMessage =
            "Network problem hai. Internet connection check karein.";
          break;

        default:
          errorMessage = firebaseError.message || errorMessage;
      }

      setError(`${errorCode}: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  }

  // Fetch enquiries from Firestore
  async function fetchEnquiries() {
    setFetching(true);
    setError("");

    try {
      const enquiryQuery = query(
        collection(db, "enquiries"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(enquiryQuery);

      const enquiryData: Enquiry[] = snapshot.docs.map((doc) => {
        const data = doc.data();

        return {
          id: doc.id,
          studentName: data.studentName || "",
          phone: data.phone || "",
          course: data.course || "",
          message: data.message || "",
          createdAt: data.createdAt || null,
        };
      });

      setEnquiries(enquiryData);
    } catch (err: unknown) {
      console.error("Firestore Error:", err);

      const firebaseError = err as {
        code?: string;
        message?: string;
      };

      if (firebaseError.code === "permission-denied") {
        setError(
          "Firestore permission denied. Firebase Rules mein admin UID check karein."
        );
      } else {
        setError(
          `Enquiries load nahi hui: ${
            firebaseError.code || firebaseError.message || "Unknown error"
          }`
        );
      }
    } finally {
      setFetching(false);
    }
  }

  // Load enquiries after login
  useEffect(() => {
    if (user) {
      fetchEnquiries();
    } else {
      setEnquiries([]);
    }
  }, [user]);

  // Logout function
  async function handleLogout() {
    setError("");
    setSuccess("");

    try {
      await signOut(auth);
      setSuccess("You have logged out successfully.");
    } catch (err) {
      console.error("Logout Error:", err);
      setError("Logout nahi ho paya. Please try again.");
    }
  }

  // Date formatting
  function formatDate(date?: Timestamp | null) {
    if (!date) return "Date unavailable";

    return date.toDate().toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // Login screen
  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-900 text-3xl text-white">
              V
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              Admin Login
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              VIRTUAL COMPUTER & SPOKEN CLASSES
            </p>
          </div>

          {error && (
            <div className="mb-5 break-words rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <strong>Login Error</strong>
              <p className="mt-1">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-5 rounded-lg bg-green-50 p-3 text-sm text-green-700">
              {success}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Admin Email
              </label>

              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                autoComplete="username"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-900 px-4 py-3 font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Please wait..." : "Login to Dashboard"}
            </button>

          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Secure Admin Panel
          </p>

        </div>
      </main>
    );
  }

  // Admin dashboard
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}
      <header className="bg-blue-950 px-5 py-5 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">

          <div>
            <h1 className="text-xl font-bold sm:text-2xl">
              Admin Dashboard
            </h1>

            <p className="mt-1 text-sm text-blue-200">
              VIRTUAL COMPUTER & SPOKEN CLASSES
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">

            <span className="text-sm text-blue-100">
              {user.email}
            </span>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Logout
            </button>

          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">

        {error && (
          <div className="mb-5 break-words rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-5 rounded-lg bg-green-50 p-3 text-sm text-green-700">
            {success}
          </div>
        )}

        {/* Statistics */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total Enquiries
            </p>

            <h2 className="mt-2 text-3xl font-bold text-blue-950">
              {enquiries.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Admin Status
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-600">
              Active
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Database
            </p>

            <h2 className="mt-2 text-2xl font-bold text-blue-950">
              Firestore
            </h2>
          </div>

        </div>

        {/* Enquiries Heading */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Student Enquiries
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Website se submit ki gayi enquiries yahan dikhenगी.
            </p>
          </div>

          <button
            onClick={fetchEnquiries}
            disabled={fetching}
            className="rounded-lg bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
          >
            {fetching ? "Refreshing..." : "Refresh Enquiries"}
          </button>

        </div>

        {/* Enquiry List */}
        {fetching ? (

          <div className="rounded-xl bg-white p-10 text-center text-slate-500 shadow-sm">
            Loading student enquiries...
          </div>

        ) : enquiries.length === 0 ? (

          <div className="rounded-xl bg-white p-10 text-center shadow-sm">

            <div className="mb-3 text-4xl">📩</div>

            <h3 className="text-lg font-bold text-slate-800">
              No Enquiries Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Abhi tak kisi student ne enquiry submit nahi ki hai.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {enquiries.map((enquiry) => (

              <article
                key={enquiry.id}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                <div className="mb-4 flex items-start justify-between gap-3">

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {enquiry.studentName}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-blue-800">
                      {enquiry.course}
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                    Enquiry
                  </span>

                </div>

                <div className="space-y-3 text-sm text-slate-600">

                  <p>
                    <strong className="text-slate-800">
                      Mobile:
                    </strong>{" "}
                    {enquiry.phone}
                  </p>

                  <p>
                    <strong className="text-slate-800">
                      Message:
                    </strong>{" "}
                    {enquiry.message || "No message provided"}
                  </p>

                  <p>
                    <strong className="text-slate-800">
                      Submitted:
                    </strong>{" "}
                    {formatDate(enquiry.createdAt)}
                  </p>

                </div>

                <div className="mt-5 flex flex-wrap gap-3">

                  <a
                    href={`tel:${enquiry.phone}`}
                    className="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    Call Student
                  </a>

                  <a
                    href={`https://wa.me/${enquiry.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                      `Hello ${enquiry.studentName}, thank you for enquiring about ${enquiry.course} at VIRTUAL COMPUTER & SPOKEN CLASSES.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                  >
                    WhatsApp
                  </a>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

      <footer className="py-6 text-center text-sm text-slate-500">
        © 2026 VIRTUAL COMPUTER & SPOKEN CLASSES
      </footer>

    </main>
  );
}
