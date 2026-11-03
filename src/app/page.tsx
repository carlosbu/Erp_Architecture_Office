import { supabaseEnv } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/server";
import { formatBRL } from "@/lib/format";

export default async function Home() {
  if (!supabaseEnv()) {
    return (
      <main className="mx-auto w-full max-w-xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Reforma Viveiro</h1>
        <p className="mt-4">Sistema ainda não conectado ao banco de dados. Veja docs/setup.md.</p>
      </main>
    );
  }

  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main className="mx-auto w-full max-w-xl px-4 py-8">
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Reforma Viveiro</h1>
        <form action="/auth/signout" method="post">
          <button className="text-sm underline">Sair</button>
        </form>
      </header>
      <p className="mt-2 text-sm text-zinc-600">Conectado como {data.user?.email}</p>
      <section className="mt-8 rounded-lg border border-zinc-200 p-4">
        <p className="text-sm text-zinc-600">Orçamento total</p>
        <p className="text-3xl font-semibold">{formatBRL(50000000)}</p>
        <p className="mt-2 text-sm text-zinc-600">Cômodos, orçamentos e painel chegam nas próximas entregas.</p>
      </section>
    </main>
  );
}
