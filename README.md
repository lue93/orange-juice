```markdown
# 🚀 Elysia + Bun

Este projeto foi criado com o comando:

```bash
bun create elysia my-app
```

Ele fornece um esqueleto moderno para aplicações **backend** usando:
- ⚡ [Elysia](https://elysiajs.com/) — framework web rápido e minimalista para Bun
- 🥟 [Bun](https://bun.sh/) — runtime e gerenciador de pacotes ultrarrápido

---

## 📂 Estrutura do projeto

```
my-app/
├─ src/
│  └─ index.ts      # Ponto de entrada do servidor Elysia
├─ package.json     # Scripts e dependências
├─ bun.lockb        # Lockfile do Bun
└─ tsconfig.json    # Configuração TypeScript (se habilitado)
```

---

## ⚙️ Instalação

Instale as dependências com Bun:

```bash
bun install
```

---

## 🖥️ Desenvolvimento

Para rodar o servidor em modo desenvolvimento:

```bash
bun run dev
```

O servidor será iniciado em `http://localhost:3000`.

---

## 📦 Build de produção

Para gerar e rodar em produção:

```bash
bun run build
bun run start
```

---

## 🛠️ Scripts disponíveis

- `bun run dev` → inicia servidor em modo desenvolvimento  
- `bun run build` → gera build otimizado  
- `bun run start` → inicia servidor em produção  

---

## 📚 Recursos úteis

- [Documentação Elysia](https://elysiajs.com/docs)  
- [Documentação Bun](https://bun.sh/docs)  

---

## 🎯 Próximos passos

- Criar novas rotas dentro de `src/index.ts`  
- Adicionar middlewares para autenticação, logs ou CORS  
- Integrar banco de dados (PostgreSQL, MongoDB, etc.)  
- Deploy em serviços como Fly.io, Railway ou Vercel  

---

Feito com ❤️ usando **Elysia + Bun**
```