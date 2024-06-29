### Projeto final para apresentaçao no curso Descodificadas - trilha4

# API_BUSCAR_MUSEU

Esse projeto visa o desenvolvimento de uma aplicação web que faz busca em um conjunto de dados utilizando filtros conforme preferência do usuário. Nesse caso a busca é por museus brasileiros.
	

Instalaçoes necessária
---
- Node.js e npm
- Express, cors, sqlite3
- React, react-router-dom e axios
- Bootstrap

A construção se deu em duas partes: Backend e Frontend

**1. BACKEND**

 Desenvolvido com Node.js que lê dados de um arquivo JSON e insere-os a um banco de dados. Expõe também um API RESTful que permite consultar os dados inseridos. Na pasta Backend foi criado 3 arquivos: database.jsx, importData.jsx e server.jsx. Além do arquivo json com os registros.
 

**2. FRONTEND**

A aplicação foi construída usando o React e configurada usando o Vite. Para as requisições usamos o axios.

Foi criada as pastas:
- components com os arquivos Header.jsx, Footer.jsx, Filters.jsx, Results.jsx e Details.jsx.
- pages com os arquivos About.jsx, Contact.jsx, Document.jsx e Home.jsx.
- styles com os arquivos Header.css, Footer.css e App.css.

No arquivo App.jsx configuramos as rotas. Em main.jsx criamos um ponto de entrada raiz dentro do ‘root’ que está dentro de index.html e também aqui renderizamos o componente App.

No arquivo index.html temos a div com id=’root’ que é o container onde será montada toda a nossa aplicação.

Na pasta public é onde colocamos todas as imagens e ícones que serão usados.

Os detalhes de como construir e executar o projeto estão descritos na página Document.jsx.