'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function NewPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // TODO: Implement new password logic
    console.log('New password:', password);
    setSuccess(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-secondary">
      <div className="w-full max-w-md p-8 bg-white rounded-card shadow-card">
        <div className="flex items-center justify-center mb-4">
          <Link href="/" className="flex items-center gap-4">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-title mb-2 text-center">Create New Password</h1>
        <p className="text-text-muted text-center mb-6">
          Enter your new password below
        </p>

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                New Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-input border border-border focus:outline-none focus:border-primary-500"
                placeholder="Enter new password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-input border border-border focus:outline-none focus:border-primary-500"
                placeholder="Confirm new password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-button hover:from-primary-600 hover:to-primary-700 transition"
            >
              Reset Password
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
              Your password has been reset successfully!
            </p>
            <Link
              href="/login"
              className="inline-block py-3 px-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-button hover:from-primary-600 hover:to-primary-700 transition"
            >
              Go to Login
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
