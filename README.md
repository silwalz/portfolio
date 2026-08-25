# Portfólio — Silvia Walz

Portfólio estático criado em React, Vite e CSS, preparado para ser publicado no **GitHub Pages**. O conteúdo foi elaborado a partir do currículo de Silvia Walz, com foco em Product Management, Product Ownership, pesquisa e dados.

## Executar localmente

Instale o [Node.js 22](https://nodejs.org/) e execute os comandos abaixo na pasta do projeto:

```bash
corepack enable
pnpm install
pnpm dev
```

Para gerar a versão estática usada pelo GitHub Pages:

```bash
pnpm build:pages
```

## Publicar no GitHub Pages

1. Crie um repositório vazio no GitHub, por exemplo `silvia-walz-portfolio`.
2. Envie todos os arquivos desta pasta, inclusive a pasta oculta `.github`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **GitHub Actions**.
5. Faça um commit na branch `main`. O workflow `.github/workflows/deploy.yml` criará e publicará o site automaticamente.
6. Ao terminar, o GitHub mostrará a URL pública em **Actions** e em **Settings → Pages**.

## Atualizações seguras

Toda alteração deve seguir um fluxo simples: editar, testar localmente, fazer commit e enviar para o GitHub. O histórico do repositório preserva versões anteriores e permite recuperar qualquer estado do site.

```bash
git add .
git commit -m "Atualiza portfólio"
git push origin main
```

## Arquivos importantes

| Caminho | Finalidade |
|---|---|
| `client/src/pages/Home.tsx` | Conteúdo e estrutura do portfólio. |
| `client/src/index.css` | Identidade visual e responsividade. |
| `client/index.html` | Metadados, fontes e favicon. |
| `.github/workflows/deploy.yml` | Publicação automática no GitHub Pages. |
| `ideas.md` | Direção visual do projeto. |
| `client/public/assets/` | Imagens e símbolo de marca usados no site. |

> **Nota sobre as imagens:** as imagens já estão incluídas na pasta `client/public/assets/`. Não é necessário depender de links externos para publicar no GitHub Pages.
