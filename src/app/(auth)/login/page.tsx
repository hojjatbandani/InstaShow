'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login:', { email, password });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-secondary">
      <div className="w-full max-w-md p-8 bg-white rounded-card shadow-card">
        <div className="flex items-center justify-center mb-4">
          <Link href="/" className="flex items-center gap-4">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-title mb-6 text-center">Log In</h1>

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

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-input border border-border focus:outline-none focus:border-primary-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-primary-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-button hover:from-primary-600 hover:to-primary-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-text-muted">
          Don't have an account?{' '}
          <Link href="/register" className="text-primary-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
