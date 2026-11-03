// pt-BR formatting helpers. Money is always stored as integer cents (ADR-0002).

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

/** 123456 -> "R$ 1.234,56" */
export function formatBRL(cents: number): string {
  if (!Number.isInteger(cents)) throw new Error("Money must be integer cents");
  // Intl uses a non-breaking space after "R$"; normalize to a plain space.
  return brl.format(cents / 100).replace(/ /g, " ");
}

/** Range: equal values show one amount, otherwise "R$ 1,00 – R$ 2,00". */
export function formatBRLRange(minCents: number, maxCents: number): string {
  if (minCents > maxCents) throw new Error("min must be <= max");
  if (minCents === maxCents) return formatBRL(minCents);
  return `${formatBRL(minCents)} – ${formatBRL(maxCents)}`;
}

/** Parse user input like "R$ 1.234,56", "1234,5" or "1234" into cents. */
export function parseBRL(input: string): number {
  const cleaned = input.replace(/R\$|\s/g, "");
  if (!/^-?[\d.]*(,\d{0,2})?$/.test(cleaned) || !/\d/.test(cleaned)) {
    throw new Error(`Valor inválido: "${input}"`);
  }
  const [intPart, decPart = ""] = cleaned.replace(/\./g, "").split(",");
  const negative = intPart.startsWith("-");
  const units = Number(intPart.replace("-", "") || "0");
  const cents = units * 100 + Number(decPart.padEnd(2, "0"));
  return negative ? -cents : cents;
}

/** Date -> "DD/MM/AAAA" (uses the date's calendar day, no timezone shift for ISO dates). */
export function formatDate(value: Date | string): string {
  if (typeof value === "string") {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
    if (!m) throw new Error(`Data inválida: "${value}"`);
    return `${m[3]}/${m[2]}/${m[1]}`;
  }
  const dd = String(value.getDate()).padStart(2, "0");
  const mm = String(value.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${value.getFullYear()}`;
}

/** Percentage with one decimal: 0.153 -> "15,3%" */
export function formatPercent(ratio: number): string {
  return `${(ratio * 100).toFixed(1).replace(".", ",")}%`;
}
