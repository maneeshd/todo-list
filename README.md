# todo-list
TODO list using react and reactstrap

## Requirements

**1. [node.js & npm](https://nodejs.org/en/)**

**2. [yarn](https://yarnpkg.com/en/)**

**3. [git](https://git-scm.com/)**

## Usage

- Clone this repository

```bash
$ git clone https://github.com/maneeshd/todo-list.git

$ cd todo-list
```

- Install the dependencies and devDependencies

```bash
$ yarn install
```

- Delete the following files:

1. [dist/static/js/bundle.js](dist/static/js/bundle.js)

2. [dist/static/css/styles.css](dist/static/css/styles.css)

```bash
$ rm -f dist/static/js/bundle.js dist/static/css/styles.css
```

- Then to run the app in hot-reloading mode in development:

```bash
$ yarn serve
```

- To build the `js` and `css` bundle for production:

```bash
$ yarn build --mode production    # use --mode development for un-minified large bundles and source maps
```

## Author

**[Maneesh Divana](mailto:maneeshd77@gmail.com)**

-----
