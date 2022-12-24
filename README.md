## Kisaragi - Front

### After cloning the repository the following steps must be followed:

First, install all dependencies with the command yarn install:

```bash
yarn install
```

Then add the environment variables that appear in the .env.example file:

```bash
# Kisaragi Auth Endpoint
NEXT_PUBLIC_KISARAGI_AUTH=https://kisaragi-auth-prod.herokuapp.com/api/v1
# Kisaragi Core Endpoint
NEXT_PUBLIC_KISARAGI_CORE=https://kisaragi-core.herokuapp.com/
# Tax Rate
NEXT_PUBLIC_TAX_RATE=0.15
# Secret for signing token
NEXTAUTH_SECRET=
```

Then run the local server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### To run all the tests:

```bash
yarn test
```

### To be able to see the coverage

```bash
yarn test:coverage
```
