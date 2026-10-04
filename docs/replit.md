Origem GitHub: https://github.com/luscaarmstrong1/conexium-engenharia

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm test
```

## Runtime

- Framework: Astro
- Gerenciador: pnpm, conforme `packageManager` e `pnpm-lock.yaml`
- Preview local: `pnpm dev`
- Build de producao: `pnpm build`

## Variaveis e segredos

Nenhum segredo obrigatorio foi identificado na auditoria local. Se novos servicos forem conectados, configure chaves e tokens apenas pelo painel de Secrets do Replit.

## Validacao antes da importacao

- `pnpm install --frozen-lockfile`: OK
- `pnpm audit`: OK, sem vulnerabilidades conhecidas apos dedupe seguro
- `pnpm run build`: OK
- `pnpm test`: OK
