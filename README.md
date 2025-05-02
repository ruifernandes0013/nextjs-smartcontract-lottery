# NextJS Smartcontract Lottery (Raffle)

This project is a NextJs decentralized lottery system. It integrates Chainlink VRF (Verifiable Random Function) to securely select a truly random winner and Chainlink Automation (formerly Keepers) to automatically trigger winner selection at defined intervals—fully automating the lottery process.

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [npm](https://npm) instead of `npm`
  - You'll know you've installed npm right if you can run:
    - `npm --version` and get an output like: `x.x.x`

## Quickstart

```
git clone
cd nextjs-smartcontract-lottery
nvm use
npm i
```

# Usage

1. Run your local blockchain with the lottery code

> In a different terminal / command line

```
git clone https://github.com/ruifernandes0013/hardhat-smartcontract-lottery
cd hardhat-smartcontract-lottery
nvm use
npm i
hh node
```

> You can read more about how to use that repo from its [README.md](https://github.com/ruifernandes0013/hardhat-smartcontract-lottery/blob/main/README.md)

2. Add hardhat network to your metamask/wallet

- Get the RPC_URL of your hh node (usually `http://127.0.0.1:8545/`)
- Go to your wallet and add a new network. [See instructions here.](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
  - Network Name: Hardhat-Localhost
  - New RPC URL: http://127.0.0.1:8545/
  - Chain ID: 31337
  - Currency Symbol: ETH
  - Block Explorer URL: None

Ideally, you'd then [import one of the accounts](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account) from hardhat to your wallet/metamask.

3. Run this code

Back in a different terminal with the code from this repo, run:

```
npm run dev
```

4. Go to UI and have fun!

Head over to your [localhost](http://localhost:3000) and play with the lottery!

## Testing

I didn't write any front end tests 😢

If you'd like to create some tests for this repo, please make a PR!

# Deploying to IPFS

1. Build your static code.

```
npm run build
```

2. Export your site

```
npm run next export
```

3. Deploy to IPFS

- [Download IPFS desktop](https://ipfs.io/#install)
- Open your [IPFS desktop app](https://ipfs.io/)
- Select `import` and choose the folder the above step just created (should be `out`)

4. Copy the CID of the folder you pinned

5. Get [IPFS companion](https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch?hl=en) for your browser (or use [Brave Browser](https://brave.com/))

6. Go to `ipfs://YOUR_CID_HERE` and see your ipfs deployed site!

# Deploy to IPFS using Fleek

You can also have [Fleek](https://fleek.co/) auto-deploy your website if you connect your github. Connect to fleek and follow along the docs there. You'll get an IPFS hash and a "regular" URL for your site.

# Thank you!

[![Rui Fernandes](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](http://linkedin.com/in/rui-pedro-fernandes-a83b14232)
