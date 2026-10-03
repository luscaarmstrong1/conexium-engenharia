export type LeadForm = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  perfil: string;
  mensagem: string;
  lgpd: boolean;
  website?: string;
};

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function sanitizeText(value: string): string {
  return value
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function scoreLead(form: Pick<LeadForm, "perfil" | "empresa" | "mensagem">): "alta" | "media" | "baixa" {
  const highSignals = [
    "Perícia",
    "Quesitos",
    "Parecer",
    "Regulatória",
    "Projetos",
    "Conexão",
    "Subestação",
  ];

  const joined = `${form.perfil} ${form.empresa} ${form.mensagem}`.toLowerCase();
  const hasHigh = highSignals.some((signal) => joined.includes(signal.toLowerCase()));
  if (hasHigh) return "alta";
  if (!form.empresa.trim() || form.mensagem.trim().length < 20) return "baixa";
  return "media";
}

export function validateLead(form: LeadForm): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!sanitizeText(form.nome)) errors.nome = "Informe seu nome.";
  if (!sanitizeText(form.empresa)) errors.empresa = "Informe a empresa.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errors.email = "Informe um e-mail corporativo válido.";
  if (form.telefone.replace(/\D/g, "").length < 10) errors.telefone = "Informe um telefone brasileiro válido com DDD.";
  if (!sanitizeText(form.perfil)) errors.perfil = "Selecione o tipo de demanda.";
  if (sanitizeText(form.mensagem).length < 10) errors.mensagem = "Descreva sua demanda com pelo menos 10 caracteres.";
  if (sanitizeText(form.mensagem).length > 1600) errors.mensagem = "Resuma o contexto em até 1600 caracteres.";
  if (!form.lgpd) errors.lgpd = "É necessário autorizar o contato para enviar sua solicitação.";
  if (form.website && form.website.trim()) errors.website = "Falha na validação anti-spam.";
  return errors;
}
