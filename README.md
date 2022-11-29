# API test

## Getting Started

#### Install dependencies:

```sh
npm i
```

#### Set environment (vars):

```sh
ren .env.example .env
```

#### Start server:

```sh
# Ensure that a PostgreSQL database is running on your localhost
# Create databases. Their name are the same as value of UNIQUE_NAME_PG_TEST_DB, UNIQUE_NAME_PG_DB of '.env'

# Start server
npm start
```

#### Tests:

```sh
# Run tests written in ES6
npm run test
```

