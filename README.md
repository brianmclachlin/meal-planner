# Meal Planner

## Docker

### Running the app

```bash
$ docker-compose up
```

### SSH into Docker container

Alpine containers do not have `/bin/bash`, so we need to use `/bin/ash`, which is a lightweight Unix shell. 

```bash
# Connect to running container
$ docker exec -it api /bin/ash
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
