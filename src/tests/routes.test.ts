import { describe, expect, it } from "vitest";
import { allRoutes, servicePages } from "../data/site";
import { absoluteUrl, withBase } from "../lib/urls";

describe("routes and SEO helpers", () => {
  it("inclui todas as rotas principais solicitadas", () => {
    expect(allRoutes).toContain("/servicos/");
    expect(allRoutes).toContain("/servicos/engenharia-projetos-eletricos/");
    expect(allRoutes).toContain("/servicos/consultoria-tecnico-regulatoria/");
    expect(allRoutes).toContain("/servicos/pericias-pareceres-tecnicos/");
    expect(allRoutes).toContain("/conteudos/");
    expect(allRoutes).toContain("/a-conexium/");
    expect(allRoutes).toContain("/contato/");
    expect(allRoutes).toContain("/politica-de-privacidade/");
    expect(allRoutes).toContain("/politica-de-cookies/");
    expect(allRoutes).toContain("/404/");
    expect(servicePages).toHaveLength(3);
    expect(servicePages.map((service) => service.slug)).toEqual([
      "engenharia-projetos-eletricos",
      "consultoria-tecnico-regulatoria",
      "pericias-pareceres-tecnicos",
    ]);
  });

  it("gera URLs com base técnica e domínio canônico da Conexium", () => {
    expect(withBase("/contato/")).toBe("/contato/");
    expect(absoluteUrl("/servicos/")).toBe("https://conexiumengenharia.com.br/servicos/");
  });
});
