## MetaMask Connect

#### This application basically connects to your MetaMask wallet and shows your wallet address on the screen.

### Prerequisites :

1. The [MetaMask Extension](https://metamask.io/download.html) downloaded.
2. Node.js [Downloaded and Installed](https://nodejs.org/)

### In this project :

- A basic setup is maintained with `index.html` and `contract.js` only two files.
- Package used for running server `static-server`
- `npm run serve` to run the server.

### A Confusion :

- why `<script src="node_modules/@metamask/onboarding/dist metamask-onboarding.bundle.js" defer></script>`

  instead of `import MetaMaskOnboarding from '@metamask/onboarding'` in `contract.js`
