"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const { error } = await createClient().auth.signInWithOtp({
      email,
      // Only invited people can log in: no self sign-up.
      options: { shouldCreateUser: false, emailRedirectTo: `${location.origin}/auth/callback` },
    });
    if (error) {
      setError("Não foi possível enviar o link. Verifique se o seu e-mail foi convidado.");
      setStatus("error");
    } else {
      setStatus("sent");
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center gap-6 px-4 py-12">
      <h1 className="text-2xl font-semibold">Reforma Viveiro</h1>
      {status === "sent" ? (
        <p>Enviamos um link de acesso para <strong>{email}</strong>. Abra o e-mail neste aparelho.</p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm font-medium">E-mail</label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-zinc-300 px-3 py-2 text-base"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-md bg-zinc-900 px-3 py-2 font-medium text-white disabled:opacity-50"
          >
            {status === "sending" ? "Enviando…" : "Receber link de acesso"}
          </button>
          {status === "error" && <p className="text-sm text-red-700">{error}</p>}
        </form>
      )}
    </main>
  );
}
