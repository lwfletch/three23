"use client";

import { useState } from "react";

type Status = "idle" | "submitted";

export function BasketballSignupForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // [Placeholder] Wire this up to your registration backend, email service,
    // or form provider. For now it just confirms on the client.
    setStatus("submitted");
    e.currentTarget.reset();
  }

  const fieldClass =
    "mt-1 w-full rounded-lg border border-black/15 bg-paper px-4 py-2.5 text-ink shadow-sm outline-none transition focus:border-carolina focus:ring-2 focus:ring-carolina/30";
  const labelClass = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="playerName" className={labelClass}>
          Player Name
        </label>
        <input
          id="playerName"
          name="playerName"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="grade" className={labelClass}>
          Grade / Age
        </label>
        <input
          id="grade"
          name="grade"
          type="text"
          required
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="parentName" className={labelClass}>
          Parent / Guardian Name
        </label>
        <input
          id="parentName"
          name="parentName"
          type="text"
          required
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="notes" className={labelClass}>
          Anything we should know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-full bg-carolina px-6 py-3 font-semibold text-paper transition-colors hover:bg-carolina-dark"
        >
          Sign Up for Basketball
        </button>
        {status === "submitted" && (
          <p className="text-sm font-semibold text-carolina-dark" role="status">
            Thanks! We&rsquo;ve received your sign-up and will be in touch soon.
          </p>
        )}
      </div>
    </form>
  );
}
