export const basePath = import.meta.env.PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Conexium Engenharia",
  legalName: "CONEXIUM ENGENHARIA",
  title: "Conexium Engenharia | Engenharia Elétrica, Regulação e Perícias Técnicas",
  tagline: "Engenharia elétrica, consultoria técnico-regulatória e evidência técnica para decisões seguras.",
  description:
    "Engenharia elétrica, consultoria técnico-regulatória, perícias, quesitos e pareceres técnicos para projetos, processos e decisões no setor elétrico.",
  defaultDescription:
    "Engenharia elétrica, consultoria técnico-regulatória, perícias, quesitos e pareceres técnicos para projetos, processos e decisões no setor elétrico.",
  institutionalDescription:
    "A Conexium Engenharia é uma empresa técnica premium especializada exclusivamente em engenharia e projetos elétricos, consultoria técnico-regulatória e perícias, quesitos e pareceres técnicos para o setor elétrico.",
  institutionalNotice:
    "A Conexium Engenharia é uma marca técnica utilizada por Renovera Energias Renováveis Ltda. Os serviços são prestados conforme escopo técnico contratado, com emissão de ART quando aplicável.",
  technicalNotice:
    "A Conexium Engenharia presta serviços técnicos de engenharia, consultoria e análise documental. Os conteúdos publicados têm caráter informativo e não substituem análise individual do caso concreto, projeto específico, parecer técnico formal ou orientação jurídica quando aplicável.",
  forensicNotice:
    "A atuação em perícias, quesitos e pareceres é de natureza técnica, limitada ao campo da engenharia elétrica. Demandas jurídicas, peticionamento e estratégia processual devem ser conduzidos por advogado habilitado.",
  url: import.meta.env.PUBLIC_SITE_URL || "https://conexium-engenharia.vercel.app",
  repositoryUrl: "https://github.com/luscaarmstrong1/conexium-engenharia",
  email: "conexiumengenharia@gmail.com",
  directEmail: "conexiumengenharia@gmail.com",
  phone: "+55 11 3842-9930",
  phoneDisplay: "+55 11 3842-9930",
};

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Quem somos", href: "/a-conexium/" },
  { label: "Serviços", href: "/servicos/" },
  { label: "Casos e insights", href: "/conteudos/" },
  { label: "Contato", href: "/contato/" },
];

export const servicePages = [
  {
    title: "Engenharia e Projetos Elétricos",
    slug: "engenharia-projetos-eletricos",
    eyebrow: "Engenharia e Projetos",
    shortTitle: "Engenharia e Projetos Elétricos",
    cardDescription:
      "Desenvolvimento de estudos e projetos com foco em segurança, desempenho, viabilidade e conformidade normativa.",
    description:
      "Desenvolvimento de estudos e projetos de engenharia elétrica com foco em segurança, desempenho, viabilidade e conformidade normativa.",
    whatsappMessage: "Olá, gostaria de falar com a Conexium Engenharia sobre uma demanda técnica de engenharia e projetos elétricos.",
    image: "/assets/conexium/subestacao-sol.png",
    cardBullets: [
      "Estudos e projetos de subestações",
      "Análise de conexão e expansão",
      "Estudos elétricos e coordenação",
      "Memoriais e especificações técnicas",
    ],
    sections: [
      "Estudos e projetos de instalações elétricas",
      "Estudos de conexão e expansão",
      "Estudos elétricos e coordenação de proteção",
      "Diagramas unifilares e trifilares funcionais",
      "Coordenação, seletividade e especificações",
      "Memoriais de cálculo e especificações técnicas",
      "Adequações, reformas e aumento de carga",
      "Regularizações e documentação para implantação e conexão",
    ],
    scope: [
      "Estudos e projetos de instalações elétricas em baixa e média tensão",
      "Estudos de conexão e expansão de capacidade instalada",
      "Estudos elétricos: fluxo de potência, curto-circuito e coordenação de proteção",
      "Elaboração de diagramas funcionais, memoriais descritivos e de cálculo",
      "Especificações técnicas de equipamentos, quadros e subestações",
      "Adequações técnicas e regularizações perante concessionárias",
      "Documentação completa para implantação, comissionamento e conexão à rede",
    ],
    whenToHire: [
      "Implantação de novas unidades consumidoras industriais, comerciais ou de geração",
      "Necessidade de aumento de demanda ou expansão de infraestrutura elétrica existente",
      "Exigência da concessionária de estudos de proteção, seletividade ou curto-circuito",
      "Adequação de instalações elétricas antigas a normas de segurança e desempenho",
      "Necessidade de responsabilidade técnica formal (ART) para projetos e obras",
    ],
    howWeWork: [
      "Levantamento de dados e premissas da instalação e do ponto de entrega",
      "Modelagem e simulações elétricas normativas com softwares especializados",
      "Elaboração de memoriais de cálculo, diagramas e especificações técnicas",
      "Revisão técnica de conformidade com ABNT, concessionária e normas aplicáveis",
      "Emissão de documentação técnica executiva com ART correspondente ao escopo",
    ],
    deliverables: [
      "Projeto elétrico executivo completo (diagramas, plantas e detalhes)",
      "Memoriais de cálculo e dimensionamento devidamente fundamentados",
      "Estudo de proteção e parametrização de relés",
      "Especificação técnica detalhada de materiais e equipamentos",
      "Anotação de Responsabilidade Técnica (ART) conforme escopo contratado",
    ],
    note:
      "Escopos como projeto executivo, laudo, ART ou estudo especializado são tratados conforme contratação formal e responsabilidade técnica definida.",
  },
  {
    title: "Consultoria Técnico-Regulatória",
    slug: "consultoria-tecnico-regulatoria",
    eyebrow: "Regulação e Setor Elétrico",
    shortTitle: "Consultoria Técnico-Regulatória",
    cardDescription:
      "Suporte técnico especializado em processos regulatórios e na interface com a ANEEL, distribuidoras e demais agentes do setor elétrico.",
    description:
      "Suporte técnico especializado em processos regulatórios e na interface com a ANEEL, distribuidoras e demais agentes do setor elétrico.",
    whatsappMessage: "Olá, gostaria de falar com a Conexium Engenharia sobre uma demanda técnica de consultoria técnico-regulatória.",
    image: "/assets/conexium/consultoria-regulatoria-mesa.png",
    cardBullets: [
      "Interpretação e aplicação da regulação",
      "Análise de processos e pleitos técnicos",
      "Suporte em fiscalizações e exigências",
      "Elaboração de notas e manifestações técnicas",
    ],
    sections: [
      "Interpretação regulatória e aplicação de normas do setor",
      "Análise de processos e pleitos de conexão à rede",
      "Análise técnica de documentos e pareceres de distribuidoras",
      "Conexão de geração distribuída e avaliação de orçamentos de conexão",
      "Estudos de viabilidade técnica de conexão e alternativas de escoamento",
      "Contestações, manifestações técnicas e respostas a distribuidoras",
      "Memórias de cálculo e notas técnicas fundamentadas",
      "Suporte técnico em exigências, fiscalizações, ANEEL, PRODIST e REN 1.000/2021",
    ],
    scope: [
      "Interpretação regulatória e enquadramento normativo perante ANEEL e PRODIST",
      "Auditoria de pareceres de acesso e orçamentos de conexão emitidos por distribuidoras",
      "Avaliação de restrições de rede, critérios de gratuidade e encargos de conexão",
      "Estruturação de contestações técnico-administrativas e pedidos de reconsideração",
      "Respostas fundamentadas a exigências, notificações e fiscalizações de concessionárias",
      "Elaboração de notas técnicas e memórias de cálculo para subsídio decisório",
      "Aplicação da Resolução Normativa ANEEL nº 1.000/2021 e Lei nº 14.300/2022 quando pertinente",
    ],
    whenToHire: [
      "Recebimento de parecer de acesso com obras vultosas, prazos excessivos ou negativas",
      "Restrições técnicas ou exigências de rede sem fundamentação transparente da distribuidora",
      "Necessidade de contestação técnica junto à ouvidoria da concessionária ou ANEEL",
      "Dúvidas sobre legalidade ou coerência técnica de exigências feitas pela distribuidora",
      "Necessidade de parecer técnico-regulatório independente para investidores ou clientes",
    ],
    howWeWork: [
      "Auditoria minuciosa do processo administrativo, pareceres e estudos da distribuidora",
      "Confronto dos dados técnicos com as diretrizes do PRODIST, REN 1.000/2021 e normas da concessionária",
      "Identificação de inconsistências, premissas frágeis ou alternativas menos onerosas",
      "Elaboração de manifestação técnica formal e estruturada em matriz de evidências",
      "Acompanhamento técnico das respostas e desdobramentos regulatórios",
    ],
    deliverables: [
      "Relatório de auditoria técnico-regulatória do processo de conexão",
      "Minuta de manifestação/contestação técnica fundamentada para protocolo",
      "Matriz de inconsistências normativas e alternativas técnicas",
      "Memória de cálculo demonstrativa de fluxo de carga e premissas de rede",
      "Parecer técnico-regulatório com conclusões objetivas e rastreáveis",
    ],
    note:
      "A Conexium estrutura evidências, auditorias e estratégias proporcionais ao contexto técnico e regulatório. A atuação é estritamente técnico-regulatória de engenharia, não prestando serviços de representação advocatícia.",
  },
  {
    title: "Perícias, Quesitos e Pareceres Técnicos",
    slug: "pericias-pareceres-tecnicos",
    eyebrow: "Evidência Técnica e Pareceres",
    shortTitle: "Perícias, Quesitos e Pareceres Técnicos",
    cardDescription:
      "Elaboração de laudos, pareceres e respostas técnicas fundamentadas em evidências para demandas administrativas, extrajudiciais e judiciais.",
    description:
      "Elaboração de laudos, pareceres e respostas técnicas fundamentadas em evidências para demandas administrativas, extrajudiciais e judiciais.",
    whatsappMessage: "Olá, gostaria de falar com a Conexium Engenharia sobre uma demanda técnica de perícias, quesitos ou pareceres.",
    image: "/assets/conexium/pericia-termografia.png",
    cardBullets: [
      "Perícias judiciais e extrajudiciais",
      "Análise e elaboração de quesitos",
      "Pareceres técnicos fundamentados",
      "Avaliação de conformidade e verificação de fatos",
    ],
    sections: [
      "Perícias técnicas e assistência técnica em engenharia elétrica",
      "Elaboração e análise crítica de quesitos técnicos",
      "Respostas técnicas a quesitos com fundamentação normativa",
      "Pareceres técnicos independentes e laudos periciais",
      "Impugnações técnicas de laudos contraditórios ou omissos",
      "Avaliação de conformidade de instalações elétricas e medições",
      "Investigação de falhas, danos em equipamentos e queima de componentes",
      "Análise de evidências, faturas e suporte técnico em controvérsias",
    ],
    scope: [
      "Atuação como assistente técnico em processos judiciais e procedimentos arbitrais",
      "Elaboração de quesitos técnicos iniciais, suplementares e de esclarecimento",
      "Manifestação técnica crítica e impugnação fundamentada de laudos periciais",
      "Elaboração de pareceres técnicos extrajudiciais para instrução de disputas",
      "Vistorias técnicas, ensaios, termografia e análise de conformidade de instalações",
      "Apuração técnica de causas de sinistros elétricos, queima de aparelhos e incêndios",
      "Auditoria de medição de energia elétrica, desvios e irregularidades apontadas (TOI)",
    ],
    whenToHire: [
      "Existência de litígio judicial ou procedimento administrativo envolvendo engenharia elétrica",
      "Ocorrência de queima de equipamentos ou sinistros com divergência sobre responsabilidade",
      "Imputação indevida de irregularidade de medição ou recuperação de consumo pela concessionária",
      "Necessidade de formular perguntas precisas (quesitos) para o perito do juízo responder",
      "Necessidade de avaliar a solidez e consistência de um laudo pericial já juntado aos autos",
    ],
    howWeWork: [
      "Exame aprofundado dos autos, documentos técnicos, faturas, fotos e registros do evento",
      "Organização cronológica e estruturação da matriz de evidências técnicas verificáveis",
      "Realização de diligências, inspeções técnicas e medições quando aplicável ao caso",
      "Redação técnica objetiva de quesitos ou pareceres alinhada às normas da ABNT e setor elétrico",
      "Fornecimento de subsídios técnicos sólidos para o profissional do direito conduzir o caso",
    ],
    deliverables: [
      "Rol de quesitos técnicos pertinentes e estrategicamente formulados",
      "Parecer técnico pericial conclusivo com fundamentação normativa e evidências",
      "Relatório de manifestação crítica sobre laudo do perito judicial",
      "Matriz de evidências técnicas confrontando alegações e dados fáticos",
      "ART de cargo/função ou serviço técnico pericial",
    ],
    note:
      "A Conexium presta apoio técnico de engenharia elétrica. Atividades jurídicas, peticionamento, representação processual e estratégia jurídica devem ser conduzidas por advogado habilitado.",
  },
];

export const methodologySteps = [
  {
    step: "01",
    title: "Briefing",
    description: "Entendimento da demanda e definição do escopo.",
  },
  {
    step: "02",
    title: "Análise técnica",
    description: "Estudos, levantamento de dados e avaliação normativa.",
  },
  {
    step: "03",
    title: "Evidência",
    description: "Consolidação das análises e documentação técnica.",
  },
  {
    step: "04",
    title: "Parecer",
    description: "Emissão de laudos, pareceres ou recomendações objetivas.",
  },
];

export const trustBarItems = [
  {
    title: "Metodologia rastreável",
    subtitle: "Análises técnicas com base normativa",
    icon: "compass",
  },
  {
    title: "Responsabilidade técnica",
    subtitle: "ART conforme o escopo contratado",
    icon: "shield",
  },
  {
    title: "Atuação técnica especializada",
    subtitle: "Engenharia, setor elétrico e regulação",
    icon: "users",
  },
  {
    title: "Conformidade normativa",
    subtitle: "ANEEL, ABNT, ONS, IEC e outras",
    icon: "file-text",
  },
];

export const whenCanHelpItems = [
  {
    title: "Desenvolvimento de projetos",
    description: "Da concepção ao detalhamento, com foco em segurança, viabilidade e conformidade.",
    icon: "activity",
  },
  {
    title: "Processos regulatórios",
    description: "Suporte técnico em pleitos, fiscalizações e interações com a ANEEL e agentes do setor.",
    icon: "settings",
  },
  {
    title: "Disputas e litígios",
    description: "Elaboração de laudos, pareceres e respostas técnicas para demandas administrativas e judiciais.",
    icon: "scale",
  },
  {
    title: "Tomada de decisão",
    description: "Análises técnicas independentes para suporte a decisões estratégicas e de investimento.",
    icon: "users",
  },
];

export const allRoutes = [
  "/",
  "/servicos/",
  "/servicos/engenharia-projetos-eletricos/",
  "/servicos/consultoria-tecnico-regulatoria/",
  "/servicos/pericias-pareceres-tecnicos/",
  "/conteudos/",
  "/a-conexium/",
  "/contato/",
  "/politica-de-privacidade/",
  "/politica-de-cookies/",
  "/404/",
];
