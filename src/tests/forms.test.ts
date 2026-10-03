import { describe, expect, it } from "vitest";
import { formatPhone, scoreLead, sanitizeText, validateLead } from "../lib/forms";

const valid = {
  nome: "Lucas",
  empresa: "Indústria ABC Ltda",
  email: "contato@empresa.com.br",
  telefone: "(11) 99999-9999",
  perfil: "Engenharia e Projetos Elétricos",
  mensagem: "Preciso de parecer e projeto elétrico para subestação de média tensão.",
  lgpd: true,
  website: "",
};

describe("form utilities", () => {
  it("aplica máscara de telefone brasileira", () => {
    expect(formatPhone("11999999999")).toBe("(11) 99999-9999");
    expect(formatPhone("1133334444")).toBe("(11) 3333-4444");
  });

  it("sanitiza caracteres HTML simples", () => {
    expect(sanitizeText("<script>alert(1)</script> Empresa")).toBe("scriptalert(1)/script Empresa");
  });

  it("valida consentimento e campos obrigatórios", () => {
    const errors = validateLead({ ...valid, email: "invalido", lgpd: false });
    expect(errors.email).toBeTruthy();
    expect(errors.lgpd).toBeTruthy();
  });

  it("valida limite da mensagem", () => {
    const errors = validateLead({ ...valid, mensagem: "x".repeat(1601) });
    expect(errors.mensagem).toBe("Resuma o contexto em até 1600 caracteres.");
  });

  it("calcula prioridade alta para sinais críticos", () => {
    expect(scoreLead(valid)).toBe("alta");
  });
});
