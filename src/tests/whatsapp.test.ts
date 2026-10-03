import { describe, expect, it } from "vitest";
import { buildWhatsAppUrl, whatsappMessageForPath } from "../lib/whatsapp";

describe("whatsapp utilities", () => {
  it("gera mensagem contextual por página", () => {
    expect(whatsappMessageForPath("/servicos/consultoria-tecnico-regulatoria/")).toContain("consultoria técnico-regulatória");
    expect(whatsappMessageForPath("/servicos/engenharia-projetos-eletricos/")).toContain("engenharia e projetos elétricos");
    expect(whatsappMessageForPath("/servicos/pericias-pareceres-tecnicos/")).toContain("perícias, quesitos ou pareceres");
  });

  it("gera link seguro usando o número corporativo configurado ou padrão", () => {
    const url = buildWhatsAppUrl("55 (11) 3842-9930", "Olá");
    expect(url).toBe("https://wa.me/551138429930?text=Ol%C3%A1");
  });
});
