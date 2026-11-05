
export const instant = false;

import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;
  const firstName = user.name?.split(" ")[0] || "User";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-slate-200 bg-white lg:block">

        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-7">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
            A
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              AuthPortal
            </h1>
            <p className="text-xs text-slate-500">User Management</p>
          </div>
        </div>

        <div className="px-5 py-7">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700"
            >
              <span>▦</span>
              Overview
            </Link>

            <a
              href="#profile"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <span>♙</span>
              My Profile
            </a>

            <a
              href="#security"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <span>♢</span>
              Security
            </a>

            <a
              href="#session"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <span>◷</span>
              Session Details
            </a>
          </nav>
        </div>

        <div className="absolute bottom-0 w-full border-t border-slate-100 p-5">
          <div className="mb-4 rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-700">
              Authentication Status
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-500">
                Authenticated
              </span>
            </div>
          </div>

          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            >
              <span>↪</span>
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">

        {/* Top Navigation */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur-md sm:px-8">

          <div>
            <p className="text-xs font-medium text-slate-400">
              WORKSPACE / OVERVIEW
            </p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">
              Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-800">
                {user.name || "User"}
              </p>
              <p className="text-xs text-slate-500">
                {user.email}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold uppercase text-indigo-700">
              {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="mx-auto max-w-7xl space-y-8 p-5 sm:p-8">

          {/* Welcome Banner */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 p-7 text-white shadow-lg sm:p-10">

            <div className="relative z-10 max-w-xl">
              <p className="mb-3 text-sm font-medium text-indigo-100">
                YOUR PERSONAL WORKSPACE
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Welcome back, {firstName}!
              </h1>

              <p className="mt-3 max-w-lg text-sm leading-6 text-indigo-100 sm:text-base">
                You are successfully signed in. Manage your account,
                review your profile and monitor your authentication
                information from one place.
              </p>

              <a
                href="#profile"
                className="mt-6 inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                View My Profile →
              </a>
            </div>

            <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full border-[35px] border-white/10" />
            <div className="absolute -bottom-28 right-36 h-64 w-64 rounded-full border-[30px] border-white/10" />
          </section>

          {/* Overview Cards */}
          <section>
            <div className="mb-5">
              <h2 className="text-lg font-bold text-slate-900">
                Account Overview
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                A quick summary of your account.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {/* Card 1 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                    ✓
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </div>
                <p className="mt-5 text-sm text-slate-500">
                  Account Status
                </p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  Verified Session
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Your account is currently authenticated.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                  ♙
                </div>
                <p className="mt-5 text-sm text-slate-500">
                  User Role
                </p>
                <h3 className="mt-1 text-2xl font-bold capitalize text-slate-900">
                  {user.role || "User"}
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Role information from your session.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-600">
                  ◈
                </div>
                <p className="mt-5 text-sm text-slate-500">
                  Authentication
                </p>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  Secure Login
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Protected by Auth.js session management.
                </p>
              </div>

            </div>
          </section>

          {/* Profile and Security */}
          <section className="grid gap-6 xl:grid-cols-2">

            {/* Profile */}
            <div
              id="profile"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-slate-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your registered account details.
                  </p>
                </div>
                <span className="text-xl">♙</span>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Full Name
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {user.name || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Email Address
                  </p>
                  <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                    {user.email || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Phone Number
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {user.phone || "Not provided"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    User ID
                  </p>
                  <p className="mt-1 break-all font-mono text-sm font-semibold text-slate-800">
                    {user.id || "Not available"}
                  </p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div
              id="security"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-slate-900">
                    Security Overview
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your authentication protection.
                  </p>
                </div>
                <span className="text-xl">♢</span>
              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Session Authentication
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Auth.js session
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Protected Dashboard
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Server-side authentication check
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Enabled
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Account Access
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Authenticated user only
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Protected
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* Session Details */}
          <section
            id="session"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-5">
              <h2 className="font-bold text-slate-900">
                Authentication Session Data
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Session information returned by your Auth.js callbacks.
                This section is useful for demonstrating your assignment.
              </p>
            </div>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-xl bg-slate-50 p-4 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">
                View Session JSON
                <span className="transition group-open:rotate-180">⌄</span>
              </summary>

              <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-5 text-xs leading-6 text-emerald-300">
                {JSON.stringify(session, null, 2)}
              </pre>
            </details>
          </section>

          {/* Footer */}
          <footer className="border-t border-slate-200 py-6 text-center">
            <p className="text-xs text-slate-400">
              © 2026 AuthPortal. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Powered by Next.js, Prisma and Auth.js
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}
