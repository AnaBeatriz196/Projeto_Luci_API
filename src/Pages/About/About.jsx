import React from 'react';

function About() {
  return (
    <div>
      <h4>Objetivo:</h4>
      <p>Desenvolver uma aplicação web SPA (Single Page Application) utilizando React.js, com foco em autenticação, roteamento, consumo de APIs externas (usando fetch e axios), manipulação de estados locais e globais, renderização de listas dinâmicas e componentização reutilizável.</p>

      <h4>Descrição:</h4>
      <p>A aplicação será uma interface de gestão (tema livre, mediante aprovação), que consome dados de uma API simulada (pode usar JSON Server ou uma API pública gratuita).</p>

      <h4>Tema:</h4>
      <p>Gestão de tarefas</p>

      <h4>1. Tela de Login</h4>
      <p>Campos de usuário e senha. Validação simulada (hardcoded). Utilizar uma lista de usuário com login e senha, onde a senha deve ser criptografada. Após login bem-sucedido, redirecionar para a tela principal (Dashboard). Caso o usuário não esteja cadastrado, deve ser possível realizar o cadastro de um novo usuário, através de um form próprio para isso.</p>

      <h4>2. Consumo de APIs com fetch e axios</h4>
      <p>Pelo menos duas chamadas de API: Uma utilizando fetch e outra utilizando axios. Utilizar async/await para requisições assíncronas. Exibir dados obtidos em uma lista dinâmica (ex: lista de tarefas, usuários, filmes).</p>

      <h4>3. Roteamento com React Router</h4>
      <p>No mínimo 4 rotas: /login – Tela de autenticação, /register - Tela de registro de usuário, /dashboard – Tela principal com menu e cards, /items – Página de listagem dos itens vindos da API, /item/:id – Detalhamento do item.</p>

      <h4>4. Componentes Reutilizáveis</h4>
      <p>Criar e reutilizar componentes como: Header, Sidebar, Footer, ItemCard, Button, etc.</p>

      <h4>5. Hooks (useState, useEffect)</h4>
      <p>useState: para armazenar inputs, estado do login, lista de itens, etc. useEffect: para buscar dados ao carregar componentes (ex: chamadas de API).</p>

      <h4>6. Estado Global (Context API ou biblioteca)</h4>
      <p>Usar Context API para armazenar: Informações do usuário logado, tema (modo claro/escuro), ou lista global de itens.</p>

      <h4>7. Lista Dinâmica</h4>
      <p>Exibir lista de itens vindos da API. Permitir criar, editar e remover itens (pode ser apenas local ou integrado à API simulada).</p>

      <h4>8. Estilização com CSS</h4>
      <p>Estilização modular com CSS simples ou framework leve (como Tailwind ou CSS Modules). Aplicação deve ser responsiva e usável.</p>
    </div>
  );
}

export default About;
