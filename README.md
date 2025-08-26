Crypto Wallet DApp

A decentralized application (dApp) extension to mint, manage, and display NFTs on a local blockchain using Hardhat Framework, and a React front-end.

##ABOUT
This project demonstraits Transferring/recieving Ether(ETH) , minting NFTs on a local blockchain simulated using Ganache. It uses Hardhat to set-up a localblochain with simulated ethers. This allows a user to interact with the Dapp and check it's features wihtout having any real coins in the mainnet.
about some of the files and their usage :
 -EtherTransfer.sol : this is a smart contract that has a payable function which allows to transfer. payable allows a function to send/recieve tokens
 -MintNFT : it allows the minting of Nfts . uses _safeMint ERC721.sol contract to mint token.
 -backend/EtherTransferContract.js & mintNFT.js : connects with the contract using contractABI and contract address . An ABI is a Application binary interface like an API 

##TECHNOLOGIES USED

1.Hardhat:
Hardhat is a framework that allows users to write, deploy and test Smart contracts usually in pair with a Loacal Blockchain to simulate transactions using simulated GO Coins. This allows for testing and development of Smart Contracts without spending actaual crypto coins.

2.React: 
Front-end to interact with the Smart contracts.

3.OpenZeppelin: 
Provides ERC-721 Contract that allows the minting of NFTs.Open source library with reliable and tested contracts.

4.MetaMask:
Browser wallet for interacting with the dApp.

##FEATURES

1.transfer eth : you can transfer eth between any accounts in your ganache.simply copy paste the reciepent account's address ,enter the eth and hit send. confirmt the transaction in the metamask pop up that shows up.
2.mint nft : copy and paste the uri of any image on the internet and hit mint
3.transaction histpry : histories section shows your previous transactions and dynamically updates it.



   
