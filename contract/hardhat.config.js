require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",

  // Configure networks
  networks: {
    hardhat: {
      chainId: 31337, // Default chain ID for Hardhat network
    },
  },
};
