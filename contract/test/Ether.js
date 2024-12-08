const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ether", function () {
  let EtherTransfer;
  let etherTransfer;
  let sender;
  let recipient;

  beforeEach(async function () {
    EtherTransfer = await ethers.getContractFactory("EtherTransfer");
    [sender, recipient] = await ethers.getSigners();

    etherTransfer = await EtherTransfer.deploy();
    await etherTransfer.deployTransaction.wait();
  });

  it("should deploy the contract", async function () {
    expect(etherTransfer.address).to.properAddress;
  });

  it("should should send ether to the recipient and emit Event", async function () {
    const amountToSend = ethers.utils.parseEther("1.0");
    await expect(
      etherTransfer.sendEther(recipient.address, { value: amountToSend })
    )
      .to.emit(etherTransfer, "Sent")
      .withArgs(sender.address, recipient.address, amountToSend);

    const recipientAddress = await recipient.getBalance();
    expect(recipientAddress).to.equal(amountToSend);

    const contractBalance = await etherTransfer.getBalance();
    expect(contractBalance).to.equal(0);
  });
});
