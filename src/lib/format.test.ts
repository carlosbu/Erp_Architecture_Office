import { describe, expect, it } from "vitest";
import { formatBRL, formatBRLRange, formatDate, formatPercent, parseBRL } from "./format";

describe("formatBRL", () => {
  it("formats cents in pt-BR", () => {
    expect(formatBRL(23988607)).toBe("R$ 239.886,07");
    expect(formatBRL(0)).toBe("R$ 0,00");
    expect(formatBRL(-2891971)).toBe("-R$ 28.919,71");
  });
  it("rejects non-integer cents", () => {
    expect(() => formatBRL(1.5)).toThrow();
  });
});

describe("formatBRLRange", () => {
  it("shows a single value when min equals max", () => {
    expect(formatBRLRange(100, 100)).toBe("R$ 1,00");
  });
  it("shows a range (Todeschini cozinha)", () => {
    expect(formatBRLRange(15000000, 18000000)).toBe("R$ 150.000,00 – R$ 180.000,00");
  });
  it("rejects min > max", () => {
    expect(() => formatBRLRange(2, 1)).toThrow();
  });
});

describe("parseBRL", () => {
  it.each([
    ["R$ 1.234,56", 123456],
    ["1234,5", 123450],
    ["1234", 123400],
    ["620.000,00", 62000000],
    ["0,07", 7],
    ["-28.919,71", -2891971],
  ])("parses %s", (input, cents) => {
    expect(parseBRL(input)).toBe(cents);
  });
  it.each(["", "abc", "1,234", "12,3,4"])("rejects %s", (input) => {
    expect(() => parseBRL(input)).toThrow();
  });
  it("round-trips with formatBRL", () => {
    expect(parseBRL(formatBRL(64891971))).toBe(64891971);
  });
});

describe("formatDate", () => {
  it("formats ISO dates without timezone shift", () => {
    expect(formatDate("2026-10-16")).toBe("16/10/2026");
  });
  it("formats Date objects", () => {
    expect(formatDate(new Date(2026, 10, 3))).toBe("03/11/2026");
  });
});

describe("formatPercent", () => {
  it("uses comma decimal", () => {
    expect(formatPercent(0.153)).toBe("15,3%");
  });
});
