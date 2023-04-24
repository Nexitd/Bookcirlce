# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


Архитекутра и стэк технологий:

Стэк на котором написано всё приложение React + TypeScript, Redux-toolkit. Redux-toolkit используется в качестве стейт-менеджера и хранилища данных. TypeScript используется для типизации.

Архитекутра приложения: Feature Sliced Design. Эта архитектура отлично подходит для крупных проектов. Она легко масштабируется и при разарботке предоставляет хорошую изоляцию модулей, а также создание Public API. 

Краткий ввод в архитектуру.
Сама архитектура строится из 7 слоев, где хранится какая-либо логика. По идеалогии этой архитектуры слои могут использовать друг друга, но только в иерархическом порядке. Это означается что наиболее низжий слой, не может использовать что-либо из вернхнего, а верхние в свою очередь могут пользоваться нижестоящими слоями. Самих слоев 7: app - самый верхний слой, в нем происходит инициализация приложения, а также подключение роутера и редакс стора, processes (нет в данном приложении), pages - страницы приложения, widgets - общие части приложения, в данном случае это футер и сайдбар, features - фичи (это какие-либо фильтры, лайки и тд), entities - бизнес-сущности, тут происходит отправка запросов и работа со стором, shared - самый низкий слой, тут находится весь UI Kit, все общие типы и в принципе все общие части, которые использует приложение. 
