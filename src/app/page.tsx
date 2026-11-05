
export const instant = false;

import Link from "next/link";
import { auth } from "@/auth";

export default async function HomePage() {
  const session = await auth();

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">

      {/* Navigation */}
      <nav className="relative z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-xl font-extrabold text-white shadow-lg shadow-indigo-600/20">
              A
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">
                AuthPortal
              </h1>
              <p className="text-xs text-slate-500">
                Secure User Management
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {session?.user ? (
              <Link
                href="/dashboard"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
              >
                Go to Dashboard →
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden rounded-xl px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:block"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">

        {/* Background Decorations */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-violet-100/60 blur-3xl" />

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">

          {/* Hero Text */}
          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              A smarter authentication experience
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your account.
              <span className="block text-indigo-600">
                Your workspace.
              </span>
              Your control.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              Experience a modern authentication platform built
              to make account access simple, secure and convenient.
              Create your account, sign in and manage your personal
              workspace with ease.
            </p>

            {/* Hero Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {session?.user ? (
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
                >
                  Open Dashboard
                  <span>→</span>
                </Link>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
                  >
                    Create Free Account
                    <span>→</span>
                  </Link>

                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Secure Authentication
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Google Sign In
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                Protected Dashboard
              </span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-200 to-violet-200 opacity-50 blur-2xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-indigo-900/10 sm:p-7">

              {/* Preview Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                    A
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      AuthPortal
                    </p>
                    <p className="text-xs text-slate-400">
                      Personal Workspace
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  ● Secure
                </span>
              </div>

              {/* Preview Welcome */}
              <div className="mt-7 rounded-2xl bg-gradient-to-r from-indigo-700 to-violet-600 p-6 text-white">
                <p className="text-xs font-medium text-indigo-200">
                  ACCOUNT OVERVIEW
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  Welcome to your workspace
                </h3>
                <p className="mt-2 text-sm leading-6 text-indigo-100">
                  Everything you need to manage your account in one place.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-indigo-100">
                    Authentication active
                  </span>
                </div>
              </div>

              {/* Preview Cards */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-lg text-indigo-600">
                    ♙
                  </div>
                  <p className="mt-4 text-xs text-slate-400">
                    Account
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800">
                    User Profile
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-600">
                    ✓
                  </div>
                  <p className="mt-4 text-xs text-slate-400">
                    Security
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-800">
                    Protected
                  </p>
                </div>
              </div>

              {/* Preview Bottom */}
              <div className="mt-5 flex items-center justify-between rounded-xl border border-slate-100 p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Session Management
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Secure access to your account
                  </p>
                </div>
                <span className="text-xl text-indigo-600">◈</span>
              </div>

            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-600">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Secure Access
                  </p>
                  <p className="text-xs text-slate-400">
                    Protected workspace
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            Platform Features
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to get started
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            A streamlined platform that brings authentication,
            account management and secure access together.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-600">
              ♙
            </div>
            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Easy Registration
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Create your account with your personal information
              and securely access your workspace.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl text-violet-600">
              ◈
            </div>
            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Multiple Login Options
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Sign in using your email and password or conveniently
              authenticate through your Google account.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-600">
              ✓
            </div>
            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Protected Dashboard
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Access your personal information and authentication
              session through a protected dashboard.
            </p>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      {!session?.user && (
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-800 to-violet-700 px-7 py-14 text-center text-white shadow-xl sm:px-16">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to get started?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-indigo-100">
              Create your account today and experience a simple,
              secure and convenient way to access your workspace.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-indigo-700 transition hover:-translate-y-1 hover:bg-indigo-50"
            >
              Create Your Account
              <span>→</span>
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
          <div>
            <p className="text-sm font-bold text-slate-900">
              AuthPortal
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Secure User Management Platform
            </p>
          </div>

          <p className="text-xs text-slate-400">
            © 2026 AuthPortal. All rights reserved.
          </p>

          <div className="flex gap-5 text-xs font-medium text-slate-500">
            <Link href="/login" className="hover:text-indigo-600">
              Login
            </Link>
            <Link href="/register" className="hover:text-indigo-600">
              Register
            </Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
