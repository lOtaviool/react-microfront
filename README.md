# React Micro Frontend - Module Federation

Aplicação desenvolvida utilizando:

- React + Vite
- TypeScript
- Module Federation
- Styled Components
- React Query
- Axios
- Jest + React Testing Library

O projeto consiste em uma arquitetura de Micro Frontends contendo:

- Container (App Principal)
- Header
- Footer
- Cards (Listagem de produtos)

---

# Objetivo

Demonstrar uma arquitetura moderna de micro frontends utilizando Module Federation com comunicação entre aplicações independentes.

---

# Arquitetura

```txt
react-microfront/
│
├── container/
├── header/
├── footer/
└── cards/
```

---

# Micro Frontends

| Aplicação | Porta | Responsabilidade |
|---|---|---|
| Container | 3000 | Aplicação principal |
| Header | 3001 | Cabeçalho + carrinho |
| Footer | 3002 | Rodapé |
| Cards | 3003 | Lista de produtos |

---

# Tecnologias

## Frontend

- React
- TypeScript
- Vite
- Styled Components

## Comunicação

- Axios
- React Query

## Arquitetura

- Module Federation
- vite-plugin-federation

## Testes

- Jest
- React Testing Library
- ts-jest

---

# Instalação

## Clone o projeto

```bash
git clone https://github.com/seu-usuario/react-microfront.git
```

---

# 📦 Instalar dependências

## Container

```bash
cd container

npm install
```

## Header

```bash
cd header

npm install
```

## Footer

```bash
cd footer

npm install
```

## Cards

```bash
cd cards

npm install
```

---

# Executando aplicações

## Container

```bash
npm run dev
```

Aplicação:

```txt
http://localhost:3000
```

---

## Header

```bash
npm run start
```

Aplicação:

```txt
http://localhost:3001
```

---

## Footer

```bash
npm run start
```

Aplicação:

```txt
http://localhost:3002
```

---

## Cards

```bash
npm run start
```

Aplicação:

```txt
http://localhost:3003
```

---

# Testes

## Executar testes

```bash
npm run test
```

---

# 👨‍💻 Autor

Desenvolvido por Luis Otavio Oliveira

---
