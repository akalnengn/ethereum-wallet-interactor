# Ethereum Wallet Interactor

`ethereum-wallet-interactor` is a Node.js library designed to simplify interactions with the Ethereum blockchain. It provides easy-to-use functions for checking Ethereum wallet balances and sending transactions, making it an ideal tool for developers looking to integrate Ethereum functionalities into their applications.

## Features

- **Check Ethereum Wallet Balance:** Quickly retrieve the balance of any Ethereum wallet.
- **Send Ethereum Transactions:** Easily create and send transactions on the Ethereum network.
- **Environment Variables for Security:** Utilizes `.env` files to securely manage sensitive information like private keys.
- **Simple Command Line Interaction:** Includes a command-line interface for direct interaction.

## Installation

To install `ethereum-wallet-interactor`, run the following command in your project directory:

npm install ethereum-wallet-interactor

This will add `ethereum-wallet-interactor` as a dependency to your project, and you can start using it right away.

## Quick Start

### Set up your `.env` file

Create a `.env` file in the root of your project and add your Ethereum network URL and private key:

INFURA_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID

PRIVATE_KEY=your_private_key_here


### Using the Library

Here's a quick example to get you started:

```javascript
const { getBalance, sendTransaction } = require('ethereum-wallet-interactor');

// Check wallet balance
getBalance('your_wallet_address').then(balance => console.log(`Wallet Balance: ${balance} ETH`));

// Send transaction
sendTransaction('from_address', 'private_key', 'to_address', 'amount_in_ether')
  .then(receipt => console.log(`Transaction Successful: ${receipt.transactionHash}`))
  .catch(error => console.error(`Transaction Failed: ${error.message}`));
```

## Documentation

For detailed information about how to use `ethereum-wallet-interactor`, including setup, API references, and examples. Here, you'll find everything you need to start integrating Ethereum wallet functionalities into your application, enhancing your blockchain development journey.

## Contributing

We welcome contributions from everyone! If you're interested in improving `ethereum-wallet-interactor`. Here are some ways you can contribute:

- Reporting bugs and proposing feature requests by creating issues.
- Submitting pull requests to help solve issues or add features.
- Improving documentation to make it more accessible.
- Providing feedback and suggestions on enhancements.

Before contributing, please read through our guidelines where you'll find instructions on how to submit your pull requests and our code of conduct. We're excited to welcome you to our community!

## License

`ethereum-wallet-interactor` is made available under the [MIT License](LICENSE). This means you're free to use, modify, distribute, and in private or commercial projects, as long as you include the original copyright and license notice in any copy of the software/source. For more details, see the LICENSE file.

## Acknowledgments

A big thank you to:

- The Ethereum community for providing the essential tools and frameworks that made this project possible.
- All the contributors who've helped shape `ethereum-wallet-interactor` into what it is today.
- Our users who've provided valuable feedback and support.

This project stands on the shoulders of giants and is a testament to the power of collaboration and open-source spirit.

