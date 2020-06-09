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

# seed database with values prepared in advance.
# must be executed after the project is run.
# omit to start with empty database.

sequelize db:seed:all

# The values added in advance are
#   Customer: {email: "johndoe123@gmail.com",  password: "12312d"} for customer login. New users can be added via /buyer/signup route.
#   Seller: {email: "rupesh@abc.com", password: "12312d"} for seller login  New users can be added via /seller/signup route.
#   Category: {categoryID: 1} For adding new products.
# With the above seeds, new products can be added and purchased.

```
In the ```config/config.json```, enter the database password and username, after creating a new empty database with the name "ecpDB".

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


## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

Install MySQL server.

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
