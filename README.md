MY CRYPTO WALLET (TRUFFLY)

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

##INSTALLATION AND SETUP
1.Prerequisites
    Node.js
    NPM or Yarn
    Hardhat
    MetaMask browser extension

2. -run 'npm install' in main directory to install all dependencies
   -cd client
   -npm install
   -npm run start

3. host local Hardhat blockchain
   Open terminal
   cd into Contracts folder
   npx hardhat node
   
yay you set up your loacl blockchain . Hardhat provides you with 10 test accounts and 1000 tokens.

4.connect local blockchain to metamask 
   open metamask extention > click on the networks dopdown in top left corner > add a network.
   scroll down to add a network manually
   enter these -> Network-name : hardhat block chain ; rpc URL : http://127.0.0.1:8545 ; chain ID : 31337 ; currency Symbol : GO
   click save

yay done!

5. connect hardhat's account to metamask
   in your hardhat cli copy the private key of any account
   open metamask >click accounts on the top center> add account or hardware wallet> paste private key > import



Yay import successful

logout out on your dApp and click connect to metamask . it will automatically log in to the active account in your metamask


##DEPLOY CONTRACT COMMANDS

npx hardhat compile 
npm hardhat run scripts/script-name.js --network <network name>

#COMPLETE
now you can transfer eth , mint nfts 


   
