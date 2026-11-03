import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reforma Viveiro",
  description: "Gestão de orçamentos, financeiro e cronograma da reforma",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white font-sans text-zinc-900">{children}</body>
    </html>
  );
}
