## Installation

```bash
$ npm install
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

## To reproduce graphql request and nestjs throttling rate limiter error

```bash
# URL (POST)
http://localhost:3020/graphql

# QUERY
query ($_id: String!) {
    blog (
        _id: $_id
    ) {
        __typename
        _id
        description
        title
    }
}

# GRAPHQL VARIABLES
{
    "_id": "eu"
}

# Error received
{
    "errors": [
        {
            "message": "Cannot read properties of undefined (reading 'header')",
            "locations": [
                {
                    "line": 2,
                    "column": 5
                }
            ],
            "path": [
                "blog"
            ],
            "extensions": {
                "code": "INTERNAL_SERVER_ERROR"
            }
        }
    ],
    "data": null
}

```
