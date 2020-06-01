# e-commerce-application

E-Commerce Application powered by Machine Learning and Blockchain

## Get Started

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

# run tests
npm run test
```

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

Setup database using ```db_structure.sql```, and change the user name and password values in  ```config/config.json``` to whatever was used to setup the database. This assumes that mysql is running on port number 3306.

```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "ecpDB",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "ecpDB",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "ecpDB",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}

```

## Run It

#### Run in *development* mode:

Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It

* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/examples` endpoint 
  
  ```shell
  curl http://localhost:3000/api/v1/examples
  ```

## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test:debug
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file

## Lint It

View prettier linter output

```
npm run lint
```

Fix all prettier linter errors

```
npm run lint
```

## Deploy It

Deploy to CloudFoundry

```shell
cf push e-commerce-application
```
