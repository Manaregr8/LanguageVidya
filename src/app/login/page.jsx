"use client";

import { useState } from "react";
import styles from "./LoginPage.module.css";
import Link from "next/link";

const tabs = [
  { key: "login", label: "Log In" },
  { key: "signup", label: "Sign Up" },
];

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // Replace with your auth API endpoints
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStatus({ type: "success", message: activeTab === "login" ? "Signed in" : "Account created" });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  const isSignup = activeTab === "signup";

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.card}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Member Access</p>
            <h1 className={styles.title}>Log in or create your account</h1>
            <p className={styles.sub}>One place for courses, billing, and progress.</p>
          </div>

          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {isSignup && (
              <label className={styles.field}>
                <span>Full name</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
            )}

            <label className={styles.field}>
              <span>Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.field}>
              <span>Password</span>
              <input
                name="password"
                type="password"
                autoComplete={isSignup ? "new-password" : "current-password"}
                value={form.password}
                onChange={handleChange}
                required
              />
            </label>

            {status.message ? (
              <p className={`${styles.status} ${status.type === "error" ? styles.statusError : styles.statusSuccess}`}>
                {status.message}
              </p>
            ) : null}

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? "Please wait..." : isSignup ? "Create account" : "Log in"}
            </button>
          </form>

          <div className={styles.footerLinks}>
            <Link href="/admin/login">Admin login</Link>
            <Link href="/">Back to home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
