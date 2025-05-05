# 🏡 Imobiliária SaaS

Sistema **SaaS completo para gestão de imóveis e anúncios imobiliários**.
A aplicação é dividida em duas áreas:

* **Site público**, onde clientes podem visualizar os imóveis disponíveis para venda ou locação, realizar buscas personalizadas por nome e localização, e acessar detalhes de cada imóvel.
* **Painel administrativo restrito**, onde a equipe da imobiliária poderá cadastrar novos imóveis, editar ou remover anúncios, controlar preços e informações, além de acompanhar o histórico de cadastros e atualizações.

Este projeto foi pensado especialmente para **pequenas e médias imobiliárias** que buscam centralizar o gerenciamento de seus imóveis e comunicação com clientes em uma plataforma moderna, responsiva e fácil de administrar.

## ✨ Funcionalidades do projeto

✅ Visualização de lista de imóveis disponíveis
✅ Filtro de imóveis por nome e estado (SP, RJ, MG)
✅ Busca dinâmica com atualização em tempo real
✅ Exibição de imagens, preços e detalhes de cada imóvel
✅ Área pública e administrativa separadas
✅ Cadastro, edição e exclusão de imóveis pelo painel administrativo (em andamento)
✅ Layout responsivo e otimizado para dispositivos móveis

## 📚 Tecnologias utilizadas no Front-end

* **React.js**
* **Vite**
* **React Router DOM**
* **Styled-Components**
* **Axios**
* **Lucide React** (biblioteca moderna de ícones para React)
* **JSON Server** (para simular API REST durante o desenvolvimento)

## 📦 Como rodar o projeto

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/jhonatann-per/imobiliaria-saas.git
cd imobiliaria-saas
npm install
```

Para iniciar o projeto:

```bash
npm run dev
```

Para rodar o servidor fake (JSON Server):

```bash
npx json-server --watch db.json --port 3001
```

