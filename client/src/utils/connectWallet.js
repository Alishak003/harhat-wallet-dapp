import Web3 from "web3";
import { fetchTransactionsFromHardhat } from "../backend/EtherTransferContract";

export async function init() {
  if (window.ethereum) {
    let provider = window.ethereum;
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const balanceInWei = await web3.eth.getBalance(accounts[0]);
    const balanceInEther = web3.utils.fromWei(balanceInWei, "ether");
    const transactions = await fetchTransactionsFromHardhat(accounts[0]);

    return {
      account: accounts[0],
      balanceInEther,
      networkId,
      transactions,
    };
  } else {
    alert("MetaMask is not Installed. Kindly Install it");
  }
}

export async function getBalance() {
  let provider = window.ethereum;
  const web3 = new Web3(provider);
  const accounts = await web3.eth.getAccounts();
  const balanceInWei = await web3.eth.getBalance(accounts[0]);
  const balanceInEther = web3.utils.fromWei(balanceInWei, "ether");
  return balanceInEther;
}
