import Web3 from "web3";

const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sendEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

let provider = window.ethereum;
const web3 = new Web3(provider);

const contract = new web3.eth.Contract(contractABI, contractAddress);

export const transferEther = async (
  recipient,
  amount,
  setMessage,
  setBalance,
  setRecipient,
  setAmount
) => {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return;
  }
  try {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const amountInWei = web3.utils.toWei(amount.toString(), "ether");

    // Send the transaction
    const tx = await contract.methods.sendEther(recipient).send({
      from: account,
      value: amountInWei, // Send the amount as value in Wei
    });

    // Check the receipt status
    if (tx.status) {
      const balanceInWei = await web3.eth.getBalance(accounts[0]);
      const balanceInEther = web3.utils.fromWei(balanceInWei, "ether");
      setBalance(balanceInEther);

      let transactions =
        JSON.parse(sessionStorage.getItem("transactions")) || [];
      let newTx = {
        recipient: recipient.slice(0, 5) + "..." + recipient.slice(-4),
        amount: web3.utils.fromWei(amountInWei, "ether"),
        transactionHash: tx.transactionHash,
      };

      transactions.push(newTx);
      sessionStorage.setItem("transactions", JSON.stringify(transactions));

      setMessage(`Transaction successful!`);
      setAmount("");
    } else {
      setMessage(`Transaction failed!`);
      throw new Error("Transaction failed");
    }
  } catch (error) {
    setMessage(`Error: ${error.message}`);
    throw new Error(error);
  }
};

export const fetchTransactionsFromHardhat = async (account) => {
  const latestBlock = await web3.eth.getBlockNumber();
  const transactions = [];

  // Loop through all blocks and get their transactions
  for (let i = 0; i <= latestBlock; i++) {
    const block = await web3.eth.getBlock(i, true); // true to include transactions
    if (block && block.transactions) {
      block.transactions.forEach((tx) => {
        if (tx.to != null) {
          if (
            tx.from.toLowerCase() === account.toLowerCase() || // Check if the account is the sender
            tx.to.toLowerCase() === account.toLowerCase() // Check if the account is the receiver
          ) {
            transactions.push(tx);
          }
        }
      });
    }
  }

  // Format the transaction history to a more readable format
  const transactionHistory = transactions.map((transaction) => ({
    recipient: transaction.to.slice(0, 5) + "..." + transaction.to.slice(-4), // Shorten recipient address
    amount: web3.utils.fromWei(transaction.value, "ether"), // Convert from Wei to Ether
    transactionHash: transaction.hash, // Get the transaction hash
  }));

  // Optionally, store the transaction history in sessionStorage (or localStorage, depending on your use case)
  sessionStorage.setItem("transactions", JSON.stringify(transactionHistory));

  return transactionHistory;
};
