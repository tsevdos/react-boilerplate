# React boilerplate

[![dependencies Status](https://david-dm.org/tsevdos/react-boilerplate/status.svg)](https://david-dm.org/tsevdos/react-boilerplate) [![devDependencies Status](https://david-dm.org/tsevdos/react-boilerplate/dev-status.svg)](https://david-dm.org/tsevdos/react-boilerplate?type=dev)

React boilerplate is a super basic, unopinionated [React](https://facebook.github.io/react/) boilerplate with minimal [webpack](https://webpack.github.io/) configuration (that you can actually read and understand). It comes with all the bare minimum such as linting, hot reloading and web-pack-dev server.

## Features

* React
* ES6 (es2015) using babel
* Linting using eslint (airbnb config)

## Installation

```
npm install
npm build # creates the dist directory, read note below
npm start
open http://localhost:8080
```

*Note: You need to create the `dist` directory, because webpack-dev-server is configured to serve dist directory.*

## Tasks

* `npm start` starts the development server. Navigate to [http://localhost:8080](http://localhost:8080) and start working on your project
* `npm run lint` lints your .js files
* `npm run watch` builds/bundles your app on change
* `npm run build` builds/bundles your app to the `./dist` directory`
