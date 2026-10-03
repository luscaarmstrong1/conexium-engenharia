export function whatsappMessageForPath(pathname: string): string {
  if (pathname.includes("consultoria-tecnico-regulatoria") || pathname.includes("consultoria-regulatoria")) {
    return "Olá, gostaria de falar com a Conexium Engenharia sobre uma demanda técnica de consultoria técnico-regulatória.";
  }
  if (pathname.includes("engenharia-projetos-eletricos")) {
    return "Olá, gostaria de falar com a Conexium Engenharia sobre uma demanda técnica de engenharia e projetos elétricos.";
  }
  if (pathname.includes("pericias-pareceres-tecnicos") || pathname.includes("pericias-quesitos-pareceres")) {
    return "Olá, gostaria de falar com a Conexium Engenharia sobre uma demanda técnica de perícias, quesitos ou pareceres.";
  }
  return "Olá, gostaria de falar com a Conexium Engenharia sobre uma demanda técnica.";
}

export function buildWhatsAppUrl(number: string | undefined, message: string): string {
  const defaultNumber = "551138429930";
  const rawNumber = number || defaultNumber;
  const digits = rawNumber.replace(/\D/g, "");
  if (!digits) return "/contato/";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
