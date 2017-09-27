# node-search-engine

> Search Engine using Node and Elasticsearch

## Getting started

```sh
# Clone the project
git clone git@github.com:pranavpr/node-search-engine.git
cd node-search-engine

# Install dependencies
npm install

# or if you're using Yarn
yarn
```

_If you don't use [Yarn](https://yarnpkg.com/) you can just replace `yarn` with `npm` in the commands that follow._

Then you can begin development:

```sh
yarn dev
```

This will launch a [nodemon](https://nodemon.io/) process for automatic server restarts when your code changes.

### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/). This project also uses [supertest](https://github.com/visionmedia/supertest) for demonstrating a simple routing smoke test suite. Feel free to remove supertest entirely if you don't wish to use it.

Start the test runner in watch mode with:

```sh
yarn test
```

You can also generate coverage with:

```sh
yarn test --coverage
```

### Environmental variables

The project uses [dotenv](https://www.npmjs.com/package/dotenv) for setting environmental variables. Check `.env` and update env vars as you see fit. 

### Building

```sh
yarn run build
```

will compile your src into `/dist` for production deployment.

## License
MIT License. See the [LICENSE](LICENSE) file.
