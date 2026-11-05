
export const instant = false;

import { signIn } from "@/auth";
import Link from "next/link";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    registered?: string;
    error?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">

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
            Secure authentication platform
          </div>

          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Welcome to a
            <span className="block text-indigo-200">
              smarter way
            </span>
            to manage your account.
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-indigo-100">
            Access your personalized workspace with secure
            authentication, protected sessions and convenient
            account management.
          </p>

          {/* Feature Highlights */}
          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">
                ✓
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Secure Authentication
                </p>
                <p className="text-xs text-indigo-200">
                  Protected login with Auth.js
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">
                ◈
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Flexible Sign In
                </p>
                <p className="text-xs text-indigo-200">
                  Login with email or Google
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-lg">
                ♙
              </div>
              <div>
                <p className="text-sm font-semibold">
                  Personalized Workspace
                </p>
                <p className="text-xs text-indigo-200">
                  Access your account information in one place
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-6 text-xs text-indigo-200">
          <p>© 2026 AuthPortal</p>
          <p>Powered by Next.js & Auth.js</p>
        </div>
      </section>

      {/* RIGHT LOGIN SECTION */}
      <section className="flex min-h-screen flex-col justify-center px-5 py-10 sm:px-10 lg:px-16 xl:px-24">

        {/* Mobile Brand */}
        <div className="mb-12 flex items-center justify-center gap-3 lg:hidden">
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
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-2xl text-indigo-600">
              ♙
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome back
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Sign in to your account to continue to your dashboard.
            </p>
          </div>

          {/* Success Message */}
          {params.registered && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <span className="text-emerald-600">✓</span>
              <div>
                <p className="text-sm font-semibold text-emerald-800">
                  Registration successful!
                </p>
                <p className="mt-1 text-xs text-emerald-700">
                  Your account has been created. Please sign in.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {params.error && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
              <span className="text-red-600">!</span>
              <div>
                <p className="text-sm font-semibold text-red-800">
                  Authentication failed
                </p>
                <p className="mt-1 text-xs text-red-700">
                  Please check your login details and try again.
                </p>
              </div>
            </div>
          )}

          {/* Email Login */}
          <form
            action={async (formData) => {
              "use server";

              await signIn("credentials", {
                email: formData.get("email"),
                password: formData.get("password"),
                redirectTo: "/dashboard",
              });
            }}
            className="space-y-5"
          >

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
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
            >
              Sign In
              <span>→</span>
            </button>

          </form>

          {/* Divider */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-slate-50 px-4 text-xs font-medium text-slate-400">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          {/* Google Login */}
          <form
            action={async () => {
              "use server";

              await signIn("google", {
                redirectTo: "/dashboard",
              });
            }}
          >
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              <svg
                viewBox="0 0 48 48"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.56 13.22l7.98 6.19C13.43 13.72 18.24 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.73 6C44.42 37.99 46.98 31.95 46.98 24.55z" />
                <path fill="#FBBC05" d="M11.54 28.59A14.5 14.5 0 0 1 10.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 1 24c0 3.87.93 7.52 2.53 10.78l8.01-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.89 2.3-8.18 2.3-5.76 0-10.57-4.22-12.46-9.91l-8.01 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>

              Continue with Google
            </button>
          </form>

          {/* Registration Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-indigo-600 transition hover:text-indigo-800"
              >
                Create an account
              </Link>
            </p>
          </div>

          {/* Security Note */}
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>♢</span>
            Your account is protected by secure authentication.
          </div>

        </div>

        {/* Mobile Footer */}
        <p className="mt-12 text-center text-xs text-slate-400 lg:hidden">
          © 2026 AuthPortal. All rights reserved.
        </p>

      </section>
    </div>
  );
}
