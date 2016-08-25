# Kustomer Banking Challenge

This is Phil Ditzler's submission for Kustomer's banking challenge. The initial boilerplate was cloned from [redux-webpack-es6-boilerplate](https://github.com/nicksp/redux-webpack-es6-boilerplate).
A static version of the app is available on [heroku](http://kustomer-banking-ditzler.herokuapp.com/index.html).

The stack is:
- React and Redux for flux
- Redux-saga for simulating asynchronous submission of deposits/withdrawals
- Semantic-UI CSS served from a CDN
- Using [Stardust](https://github.com/TechnologyAdvice/stardust) for Semantic-UI JS within React (see the Form component)
- Mocha for tests
- webpack for development and live reloading
- Babel for ES6 transpiling

### Installation
```
$ git clone https://github.com/philly-d/kustomer-banking-challenge.git pditzler-kustomer-banking
$ cd pditzler-kustomer-banking
$ npm install
```

## Development

There are two ways in which you can build and run the web app:

* Build once for (ready for ***Production***):
  * `$ npm run build`
  * Open `build/index.html` through the local webserver


* Hot reloading via webpack dev server:
  * `$ npm start`
  * Point your browser to http://localhost:3000/, page hot reloads automatically when there are changes

## Testing

To execute all unit tests, use:

```sh
npm run test
```

To run unit tests continuously during development (watch tests), use:

```sh
npm run test:watch
```


## License

[MIT](http://opensource.org/licenses/MIT)

Brought to you by Nick S. Plekhanov
