# BuildTheFutureWeb

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd BuildTheFutureWeb/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash

# 1. Install dependencies
npm install

# 2. Install Vessel which is a dependency
https://github.com/dfinity/vessel:

npm run dev
Note: this starts a replica which includes the canisters state stored from previous sessions.
If you want to start a clean local IC replica (i.e. all canister state is erased) run instead: npm run erase-replica

# 3. Deploys your canisters to the replica and generates your candid interface
Local:
dfx deploy --argument "(principal\"$(dfx identity get-principal)\")" BuildTheFutureWeb_backend
dfx deploy

--> access frontend at http://localhost:4943/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai
access routes like so http://localhost:4943/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai#/testroom
or http://localhost:4943/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai#/space/0 (for space with spaceid 0)

needs to be redeployed after every change to reflect changes

# Alternative 3. Run a local vite UI (note that this had issues communicating to the backend canister for some setups in the past)
npm run vite
--> runs on port 3000
access routes like "http://172.30.141.44:3000/#/testroom" (same as on Mainnet)
hot reloads with every UI change

# Production Deployement
npm install

dfx start --background

Deploy to Mainnet (live IC):
Ensure that all changes needed for Mainnet deployment have been made (e.g. define HOST in store.ts)

dfx deploy --network ic --argument "(principal\"$(dfx identity get-principal)\")" BuildTheFutureWeb_backend
dfx deploy --network ic

In case there are authentication issues, you could try this command
Note that only authorized identities which are set up as canister controllers may deploy the production canisters

dfx deploy --network ic --wallet "$(dfx identity --network ic get-wallet)" --argument "(principal\"$(dfx identity get-principal)\")" BuildTheFutureWeb_backend
dfx deploy --network ic --wallet "$(dfx identity --network ic get-wallet)"

# Get and delete Email Subscribers
dfx canister call BuildTheFutureWeb_backend getEmailSubscribers
dfx canister call BuildTheFutureWeb_backend deleteEmailSubscriber 'j@g.com'

dfx canister call BuildTheFutureWeb_backend getEmailSubscribers --network ic
dfx canister call BuildTheFutureWeb_backend deleteEmailSubscriber 'j@g.com' --network ic

# Cycles for Production Canisters
Fund wallet with cycles (from ICP): https://medium.com/dfinity/internet-computer-basics-part-3-funding-a-cycles-wallet-a724efebd111

Top up cycles:
dfx identity --network=ic get-wallet
dfx wallet --network ic balance
dfx canister --network ic status BuildTheFutureWeb_backend
dfx canister --network ic status BuildTheFutureWeb_frontend
dfx canister --network ic --wallet 3v5vy-2aaaa-aaaai-aapla-cai deposit-cycles 3000000000000 BuildTheFutureWeb_backend
dfx canister --network ic --wallet 3v5vy-2aaaa-aaaai-aapla-cai deposit-cycles 300000000000 BuildTheFutureWeb_frontend

# Raw access
dfx canister call BuildTheFutureWeb_frontend get_asset_properties '("/index.html")' --network ic
dfx canister call BuildTheFutureWeb_frontend set_asset_properties '( record { key="/index.html"; allow_raw_access=opt(opt(true)) })' --network ic
dfx canister call BuildTheFutureWeb_frontend set_asset_properties '( record { key="/index.html"; headers=opt(opt(vec{ record{"Access-Control-Allow-Origin"; "*"}})); allow_raw_access=opt(opt(true)) })' --network ic

Resources used:
https://internetcomputer.org/docs/current/references/asset-canister
https://forum.dfinity.org/t/dfx-0-13-1-is-promoted-with-breaking-changes/18743/14
https://forum.dfinity.org/t/how-to-config-image-urls-to-work-the-same-as-raw-version/19949/23
https://github.com/dfinity/sdk/blob/master/CHANGELOG.md#featfrontend-canister-add-allow_raw_access-config-option

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`NODE_ENV` to `production` if you are using Webpack
- use your own preferred method to replace `process.env.NODE_ENV` in the autogenerated declarations
- Write your own `createActor` constructor
