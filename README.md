# ToDo App
Um aplicativo simples de lista de tarefas usando React no frontend e Node.js com Express no backend. O app permite adicionar, atualizar, marcar como concluída e excluir tarefas. As tarefas são armazenadas em um banco de dados MongoDB.

## Funcionalidades

- Adicionar uma nova tarefa com uma data associada.
- Atualizar o texto e a data de uma tarefa existente.
- Marcar uma tarefa como concluída.
- Excluir uma tarefa.
- Exibir uma lista de tarefas com suas datas e status de conclusão.

## Tecnologias Utilizadas

### Frontend

- React
- CSS (para estilização)

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

## Instalação

### Pré-requisitos

- Node.js instalado
- MongoDB Atlas ou servidor MongoDB local
- Yarn ou npm

## Diagrama de classes

+---------------------+         +----------------------------+
|      Product        |         |      Scrum Master          |
|       Owner         |         |                            |
+----------+----------+         +--------------+-------------+
|          |                                    |            |
|          |                                    |            |
|          v                                    v            |
|          +----------------------+  +----------+------------+
|          |        Use Case       |  |        Use Case         |
|          |                      |  |                          |
|          | - Adicionar Tarefa   |  | - Marcar Tarefa como    |
|          | - Editar Tarefa      |  |   Concluída             |
|          | - Excluir Tarefa     |  |                          |
|          | - Exibir Lista de    |  +--------------------------+
|          |   Tarefas            |
+----------+----------------------+


+---------------------+
|      Developers     |
|                     |
+---------------------+
          |
          |
          v
+-----------------------------+
|         Use Case             |
|                             |
| - Adicionar Tarefa          |
|   - Ator Principal:         |
|     Product Owner (PO)      |
|   - Ator Secundário:        |
|     Scrum Master            |
|   - Fluxo Principal:        |
|     1. Product Owner (PO)   |
|        insere a tarefa      |
|        desejada.            |
|     2. Scrum Master verifica|
|        a viabilidade da     |
|        tarefa.               |
|     3. Scrum Master e       |
|        Developers discutem  |
|        os detalhes da tarefa.|
|     4. Scrum Master adiciona|
|        a tarefa ao backlog.  |
|                             |
| - Editar Tarefa             |
|   - Ator Principal:         |
|     Product Owner (PO)      |
|   - Ator Secundário:        |
|     Scrum Master            |
|   - Fluxo Principal:        |
|     1. Product Owner (PO)   |
|        solicita a edição da |
|        tarefa.               |
|     2. Scrum Master avalia   |
|        a necessidade de     |
|        edição.               |
|     3. Scrum Master e       |
|        Developers realizam  |
|        as alterações na tarefa.|
|                             |
| - Excluir Tarefa            |
|   - Ator Principal:         |
|     Product Owner (PO)      |
|   - Ator Secundário:        |
|     Scrum Master            |
|   - Fluxo Principal:        |
|     1. Product Owner (PO)   |
|        solicita a exclusão da|
|        tarefa.               |
|     2. Scrum Master verifica|
|        a viabilidade da     |
|        exclusão.             |
|     3. Scrum Master e       |
|        Developers removem   |
|        a tarefa do backlog.  |
|                             |
| - Exibir Lista de Tarefas   |
|   - Ator Principal:         |
|     Product Owner (PO)      |
|   - Ator Secundário:        |
|     Scrum Master            |
|   - Fluxo Principal:        |
|     1. Product Owner (PO)   |
|        solicita a exibição  |
|        da lista de tarefas.  |
|     2. Scrum Master e       |
|        Developers preparam  |
|        e exibem a lista.     |
+-----------------------------+

### Clonando o repositório

```bash
git clone https://github.com/seu-usuario/todo-app.git
cd todo-app


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
