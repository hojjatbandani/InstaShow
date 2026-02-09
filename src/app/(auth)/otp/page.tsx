'use client';

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function OTPPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Move to previous input on backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    // TODO: Implement OTP verification
    console.log('OTP:', code);
  };

  const handleResend = () => {
    // TODO: Implement resend OTP
    console.log('Resend OTP');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-secondary">
      <div className="w-full max-w-md p-8 bg-white rounded-card shadow-card">
        <div className="flex items-center justify-center mb-4">
          <Link href="/" className="flex items-center gap-4">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-title mb-2 text-center">Verify OTP</h1>
        <p className="text-text-muted text-center mb-6">
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold rounded-input border border-border focus:outline-none focus:border-primary-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-button hover:from-primary-600 hover:to-primary-700 transition"
          >
            Verify
          </button>
        </form>

        <p className="mt-6 text-center text-text-muted">
          Didn't receive the code?{' '}
          <button onClick={handleResend} className="text-primary-600 hover:underline">
            Resend
          </button>
        </p>
      </div>
    </main>
  );
}
