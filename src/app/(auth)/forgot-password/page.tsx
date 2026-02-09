'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement forgot password logic
    console.log('Forgot password:', email);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-secondary">
      <div className="w-full max-w-md p-8 bg-white rounded-card shadow-card">
        <div className="flex items-center justify-center mb-4">
          <Link href="/" className="flex items-center gap-4">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-title mb-2 text-center">Forgot Password</h1>
        <p className="text-text-muted text-center mb-6">
          Enter your email to receive a reset link
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-input border border-border focus:outline-none focus:border-primary-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-button hover:from-primary-600 hover:to-primary-700 transition"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent-green/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-text-secondary mb-4">
              We've sent a reset link to <strong>{email}</strong>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-primary-600 hover:underline"
            >
              Try another email
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-text-muted">
          Remember your password?{' '}
          <Link href="/login" className="text-primary-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}
