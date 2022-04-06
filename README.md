# Meal Planner

## Docker

### Running the app

```bash
$ docker-compose up
```

### Adding npm packages

In the main service config, we defined node_modules as an anonymous volume to prevent our host files from overriding the directory. So if we were to add a new npm package by using npm install, the package wouldn’t be available in the Docker context, and the application would crash.

Even if you run docker-compose down and then docker-compose up again in order to start over, the volume would stay the same. It won’t work because anonymous volumes aren’t removed until their parent container is removed.

To fix this, we can run the following command:

```bash
$ docker-compose up --build -V
```

### SSH into Docker container

Alpine containers do not have `/bin/bash`, so we need to use `/bin/ash`, which is a lightweight Unix shell. 

```bash
# Connect to running container
$ docker exec -it meal-planner-api-1 /bin/ash
```

## TypeScript compilation

### tsconfig compilerOptions paths

Paths are a series of entries which re-map imports to lookup locations relative to the baseUrl. This lets you declare how TypeScript should resolve an import in your `require/import`s.

```json
{
  "compilerOptions": {
    "paths": {
      "@meal-planner/*": ["libs/*/src"]
    }
  }
}
```

When TypeScript compiles, the folder structure depends on whether the project has any imports from another project. This means that the entry file for projects will need to be updated accordingly.

#### Without Imports From Another Project
```
/dist
    /migrations
    /recipes
    main.js
```

nest-cli.json `entryFile` can be omitted because `main.ts` is in the root of the dist folder.

#### With Imports From Another Project
```
/dist
    /apps
        /meal-planner-api
            /src
                /migrations
                /recipes
                main.js
    /libs
        /common
            /src
                index.js
```

nest-cli.json `entryFile` needs to point to `apps/meal-planner-api/src/main`. 

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
