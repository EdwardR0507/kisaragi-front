## Kisaragi - Front

### After cloning the repository the following steps must be followed:

First, install all dependencies with the command yarn install:

```bash
yarn install
```

Then add the environment variables that appear in the .env.example file:

```bash
# Kisaragi Auth Endpoint
NEXT_PUBLIC_KISARAGI_AUTH=
# Kisaragi Core Endpoint
NEXT_PUBLIC_KISARAGI_CORE=
# Tax Rate
NEXT_PUBLIC_TAX_RATE=
# Secret for signing token
NEXTAUTH_SECRET=
```

Then run the local server:

```bash
yarn dev
```
