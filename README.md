# Ethereum Wallet Interactor

`ethereum-wallet-interactor` is a Node.js library designed to simplify interactions with the Ethereum blockchain. It provides easy-to-use functions for checking Ethereum wallet balances and sending transactions, making it an ideal tool for developers looking to integrate Ethereum functionalities into their applications.

## Features

- **Check Ethereum Wallet Balance:** Quickly retrieve the balance of any Ethereum wallet.
- **Send Ethereum Transactions:** Easily create and send transactions on the Ethereum network.
- **Environment Variables for Security:** Utilizes `.env` files to securely manage sensitive information like private keys.
- **Simple Command Line Interaction:** Includes a command-line interface for direct interaction.

## Installation

```bash
npm install ethereum-wallet-interactor

## Quick Start

Set up your `.env` file:
Create a .env file in the root of your project and add your Ethereum network URL and private key:

INFURA_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_private_key_here

## Using the Library:

Here's a quick example to get you started:

const { getBalance, sendTransaction } = require('ethereum-wallet-interactor');

// Check wallet balance
getBalance('your_wallet_address').then(balance => console.log(balance));

// Send transaction
sendTransaction('from_address', 'private_key', 'to_address', 'amount_in_ether')
  .then(receipt => console.log(receipt))
  .catch(error => console.error(error));


## Documentation

For more detailed information about `ethereum-wallet-interactor` and how to use it, please visit our [official documentation page](https://github.com/akalnengn/ethereum-wallet-interactor/wiki). This documentation includes comprehensive guides, API references, and examples to help you get started.

## Contributing

We welcome contributions from the community! If you're interested in contributing to `ethereum-wallet-interactor`, please read our [contributing guidelines](https://github.com/akalnengn/ethereum-wallet-interactor/CONTRIBUTING.md). This document provides information on how to report issues, suggest enhancements, and submit pull requests.

## License

`ethereum-wallet-interactor` is made available under the ISC License. For more information, please refer to the [LICENSE](https://github.com/akalnengn/ethereum-wallet-interactor/LICENSE) file in our repository.

## Acknowledgments

We would like to thank the following for their contributions, support, and resources:

- The [Ethereum Foundation](https://ethereum.org/) for developing and maintaining the Ethereum protocol.
- The [Web3.js team](https://github.com/ethereum/web3.js/) for creating the Web3.js library, which this project heavily relies on.
- All contributors who have submitted pull requests, reported bugs, or provided feedback.

Special thanks to our community of users and developers who inspire us to keep improving `ethereum-wallet-interactor`.
