"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", { email, password });
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
          <h1 className="text-2xl font-semibold text-white">Welcome Back</h1>
          <p className="text-[#888] text-sm mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#888] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:border-[#c41e3a] focus:outline-none transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#888] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:border-[#c41e3a] focus:outline-none transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-[#888]">
              <input type="checkbox" className="accent-[#c41e3a]" />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-[#c41e3a] hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#c41e3a] text-white rounded-lg font-semibold hover:bg-[#e63950] transition-all"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-[#888] text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#c41e3a] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
