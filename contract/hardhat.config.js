require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",

  // Configure networks
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // This is the default URL for Hardhat's local node
      chainId: 1337,
    },
    hardhat: {
      chainId: 31337, // Default chain ID for Hardhat network
      persist: true,
    },
  },
};
