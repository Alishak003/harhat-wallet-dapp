const ethers = require("ethers");

const ABI = require("./artifacts/contracts/Ether.sol/EtherTransfer.json").abi;

const contractFactory = new ethers.ContractFactory(ABI, provider);

const contract = await contractFactory.deploy();

const contractAddress = contract.address;

console.log(contractAddress);
