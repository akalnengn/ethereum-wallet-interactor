require('dotenv').config();
const Web3 = require('web3');
const prompt = require('prompt-sync')();
const { getBalance, sendTransaction } = require('./util');

// Get Ethereum network URL from environment variables
const infuraUrl = process.env.INFURA_URL;

// Create Web3 instance
const web3 = new Web3(infuraUrl);

// Get Ethereum wallet address from user
const address = prompt('Enter your wallet address: ');

// Function to display balance at the specified address
const displayBalance = async (address) => {
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    console.log(`Wallet balance: ${balanceEth} ETH`);
};

// Call the display balance function
displayBalance(address);

const { Transaction } = require('ethereumjs-tx');

// Get recipient address and ETH amount to send from user
const recipientAddress = prompt('Enter recipient address: ');
const amountToSend = prompt('Enter ETH amount to send: ');

// Function to create, sign, and send transaction
const processTransaction = async (fromAddress, privateKey, toAddress, amount) => {
    // Get nonce value
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest');

    // Define transaction details
    const transaction = {
        'to': toAddress,
        'value': web3.utils.toWei(amount, 'ether'),
        'gas': 3000000,
        'nonce': nonce,
        'chainId': 1 // For Ethereum mainnet
    };

    // Create and sign the transaction
    const tx = new Transaction(transaction, { 'chain': 'mainnet' });
    tx.sign(Buffer.from(privateKey, 'hex'));

    // Send the transaction and capture the result
    const serializedTx = tx.serialize();
    const receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));

    console.log(`Transaction successfully sent: ${receipt.transactionHash}`);
};

// Read private key from .env file
const privateKey = Buffer.from(process.env.PRIVATE_KEY, 'hex');

// Call the send transaction function
processTransaction(address, privateKey, recipientAddress, amountToSend);

// New Function: Check current gas prices
const checkGasPrices = async () => {
    const prices = await web3.eth.getGasPrice();
    console.log(`Current gas price: ${web3.utils.fromWei(prices, 'ether')} ETH`);
};

// New Function: Get transaction details by hash
const getTransactionDetails = async (hash) => {
    const txDetails = await web3.eth.getTransaction(hash);
    console.log(`Transaction Details: ${JSON.stringify(txDetails)}`);
};

// New Function: List transactions for an address
const listTransactions = async (address) => {
    const blockNumber = await web3.eth.getBlockNumber();
    const blocks = 10; // Number of blocks to look back
    for (let i = blockNumber; i >= blockNumber - blocks; i--) {
        const block = await web3.eth.getBlock(i, true);
        block.transactions.forEach(tx => {
            if (tx.from === address || tx.to === address) {
                console.log(`Transaction: ${JSON.stringify(tx)}`);
            }
        });
    }
};

// Add prompt for new features
const featureChoice = prompt('Choose a feature: 1 - Check Gas Prices, 2 - Get Transaction Details, 3 - List Transactions');
switch (featureChoice) {
    case '1':
        checkGasPrices();
        break;
    case '2':
        const txHash = prompt('Enter transaction hash: ');
        getTransactionDetails(txHash);
        break;
    case '3':
        listTransactions(address);
        break;
    default:
        console.log('Invalid choice');
}
