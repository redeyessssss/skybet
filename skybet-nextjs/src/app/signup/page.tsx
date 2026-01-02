"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0000] via-[#0d0d0d] to-[#0a0a0a] flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-[#1e1e1e] rounded-xl p-8 border border-[#2a2a2a]">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-3xl">🎰</span>
            <span className="font-orbitron text-2xl font-bold text-[#c41e3a]">
              SKY BET
            </span>
          </Link>
          <h1 className="text-2xl font-semibold text-white">Create Account</h1>
          <p className="text-[#888] text-sm mt-2">Join SKY BET today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#888] mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:border-[#c41e3a] focus:outline-none transition-all"
                placeholder="First name"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[#888] mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:border-[#c41e3a] focus:outline-none transition-all"
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-[#888] mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:border-[#c41e3a] focus:outline-none transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#888] mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:border-[#c41e3a] focus:outline-none transition-all"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#888] mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:border-[#c41e3a] focus:outline-none transition-all"
              placeholder="Confirm your password"
              required
            />
          </div>

          <label className="flex items-start gap-2 text-[#888] text-sm">
            <input type="checkbox" className="accent-[#c41e3a] mt-1" required />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="text-[#c41e3a] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#c41e3a] hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-3 bg-[#c41e3a] text-white rounded-lg font-semibold hover:bg-[#e63950] transition-all"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-[#888] text-sm mt-6">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#c41e3a] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
