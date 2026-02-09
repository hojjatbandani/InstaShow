'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement register logic
    console.log('Register:', { name, email, password });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-secondary">
      <div className="w-full max-w-md p-8 bg-white rounded-card shadow-card">
        <div className="flex items-center justify-center mb-4">
          <Link href="/" className="flex items-center gap-4">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-title mb-6 text-center">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-input border border-border focus:outline-none focus:border-primary-500"
              placeholder="Enter your name"
              required
            />
          </div>

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

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-input border border-border focus:outline-none focus:border-primary-500"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-input border border-border focus:outline-none focus:border-primary-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-button hover:from-primary-600 hover:to-primary-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-text-muted">
          Already have an account?{' '}
          <Link href="/login" className="text-primary-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}
