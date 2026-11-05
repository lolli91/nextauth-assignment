
"use client";

import { useActionState } from "react";
import { registerUser } from "@/actions/register";
import type { RegisterState } from "@/actions/register";
import Link from "next/link";

const initialState: RegisterState = {};

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState
  );

  return (
    <main className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">

      {/* LEFT BRANDING SECTION */}
      <section className="relative hidden min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-800 to-violet-700 p-12 text-white lg:flex lg:flex-col lg:justify-between">

        {/* Decorative Background */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[50px] border-white/5" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-white/5" />

        {/* Brand */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl font-extrabold text-indigo-700 shadow-lg">
            A
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide">
              AuthPortal
            </h1>
            <p className="text-xs text-indigo-200">
              Secure User Management
            </p>
          </div>
        </div>

        {/* Main Message */}
        <div className="relative z-10 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-indigo-100 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Start your journey with us
          </div>

          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Create your
            <span className="block text-indigo-200">
              account today.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-indigo-100">
            Join our platform and enjoy a streamlined authentication
            experience with secure account access and a personalized
            workspace.
          </p>

          {/* Benefits */}
          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">
                ✓
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Simple Registration
                </p>
                <p className="text-xs text-indigo-200">
                  Create your account in a few steps.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">
                ◈
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Secure Account Access
                </p>
                <p className="text-xs text-indigo-200">
                  Your account is protected by authentication.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">
                ♙
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Personalized Dashboard
                </p>
                <p className="text-xs text-indigo-200">
                  Manage your account from one workspace.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-white/15 pt-6 text-xs text-indigo-200">
          © 2026 AuthPortal. All rights reserved.
        </div>
      </section>

      {/* RIGHT REGISTRATION SECTION */}
      <section className="flex min-h-screen flex-col justify-center px-5 py-10 sm:px-10 lg:px-16 xl:px-24">

        {/* Mobile Branding */}
        <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white shadow-lg">
            A
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              AuthPortal
            </h1>
            <p className="text-xs text-slate-500">
              Secure User Management
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">

          {/* Heading */}
          <div className="mb-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-600">
              ♙
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Create an account
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Enter your details below to get started with AuthPortal.
            </p>
          </div>

          {/* General Error */}
          {state.message && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {state.message}
            </div>
          )}

          {/* Registration Form */}
          <form action={formAction} className="space-y-5">

            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                aria-invalid={!!state.error?.name}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />

              {state.error?.name?.[0] && (
                <p className="mt-1 text-xs text-red-600">
                  {state.error.name[0]}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                aria-invalid={!!state.error?.email}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />

              {state.error?.email?.[0] && (
                <p className="mt-1 text-xs text-red-600">
                  {state.error.email[0]}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Phone Number
                <span className="ml-2 text-xs font-normal text-slate-400">
                  (Optional)
                </span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                aria-invalid={!!state.error?.phone}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />

              {state.error?.phone?.[0] && (
                <p className="mt-1 text-xs text-red-600">
                  {state.error.phone[0]}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                required
                minLength={6}
                aria-invalid={!!state.error?.password}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />

              <p className="mt-2 text-xs text-slate-400">
                Your password must contain at least 6 characters.
              </p>

              {state.error?.password?.[0] && (
                <p className="mt-1 text-xs text-red-600">
                  {state.error.password[0]}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? "Creating account..." : "Create My Account"}
              {!isPending && <span>→</span>}
            </button>

          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-indigo-600 transition hover:text-indigo-800"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Security Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>♢</span>
            Your information is protected by secure authentication.
          </div>

        </div>

        {/* Mobile Footer */}
        <p className="mt-10 text-center text-xs text-slate-400 lg:hidden">
          © 2026 AuthPortal. All rights reserved.
        </p>

      </section>
    </main>
  );
}
