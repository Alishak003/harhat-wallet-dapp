const hre = require("hardhat");

async function main() {
  try {
    const [deployer] = await hre.ethers.getSigners();

    console.log(
      "Deploying EtherTransfer contract with the account:",
      deployer.address
    );

    const EtherTransfer = await hre.ethers.getContractFactory("EtherTransfer");

    const etherTransfer = await EtherTransfer.deploy();

    console.log("EtherTransfer contract deployed at:", etherTransfer.target);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
