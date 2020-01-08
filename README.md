# TODO List Using React

**A TOTO list app using `react.js (context api & hooks for state management)` & `react-bootstrap`.

## To develop

1. Clone the repository

```bash
$ git clone https://github.com/maneeshd/todo-list.git

$ cd todo-list
```

2. Install the dependencies and devDependencies

```bash
$ yarn install
```

3. To build the `js` & `css` bundle for production:

```bash
$ yarn build
```

## To Run

1. To run the app in [webpack-dev-server](https://github.com/webpack/webpack-dev-server) in development:

```bash
$ yarn serve
```

2. To run the app with the provided [python server](dist/server.py):

```bash
$ python --version
Python 3.7.6

$ python -m pip install starlette uvicorn aiofiles -U
...
Successfully installed ...

$ cd dist

$ python -m uvicorn server:app
INFO:     Started server process [29822]
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

## Built using

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Yarn](https://yarnpkg.com/lang/en/)

## Author

### 👨‍💻 Maneesh Divana | 📧 maneeshd77@gmail.com
