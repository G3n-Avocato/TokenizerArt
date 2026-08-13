# Technologies

This project uses several technologies and libraries to develop, test,
deploy and store the NFT.  

### Solidity ^0.8.28
the programming language used to develop smart contracts on the Ethereum Virtual Machine (EVM).

In this project, Solidity is used to implement the `MyNFT` smart contract and its ERC-721 functionality.  

### OpenZeppelin
OpenZeppelin Contracts is a widely used open-source library providing reusable and standardized implementations of Ethereum smart contract standards and common security mechanisms.  
It is used in this project instead of implementing the ERC-721 standard and ownership management from scratch.  

The contract inherits from:  

- ERC721URIStorage - extends the ERC-721 implementation with support for storing an individual metadata URI for each NFT.  
- Ownable - provides contract ownership management.  

### Hardhat 3.9.0
a development environment used to compile, test and deploy Ethereum smart contract.

In this project, Hardhat is used for:
- compiling Solidity contract
- running automated tests
- deploying contract locally and on the Sepolia test network
- verifying deployed contract and interacting through script

### Ethers.js 6
a JavaScript/TypeScript library used to interact with Ethereum networks and smart contracts.

In this project, Ethers.js is used to:
- deploy contract through Hardhat
- connect to deployed contract
- interact with deployed contract
- retrieve contract information
- test contract behavior

It provides the connection between the TypeScript scripts and the blockchain.

### Ethereum Sepolia Testnet
an Ethereum public test network used to deploy and test smart contracts without using real ETH.

In this project, Sepolia is used for:
- deploying the `MyNFT` smart contract
- minting the NFT on a public blockchain
- testing blockchain interactions in a realistic environment

Sepolia allows the project to be demonstrated publicly while avoiding real transaction costs.

### IPFS
IPFS (InterPlanetary File System) is a distributed, content-addressed storage system.  

In this project, IPFS is used to store:  
- the NFT artwork  
- the NFT metadata JSON file  

The smart contract stores the metadata URI, while the actual metadata and artwork are stored on IPFS.  

### Pinata 
Pinata is an IPFS pinning service used to upload and maintain files on IPFS.  

In this project, Pinata is used to:  
- upload the NFT artwork to IPFS
- retrieve the CID of the artwork 
- upload the NFT metadata JSON file
- retrieve the CIF of the metadata

### MetaMask
a cryptocurrency wallet used to manage Ethereum accounts and interact with decentralized applications.

In this project, MetaMask is used to:
- manage test accounts
- connect to the Sepolia network
- send transactions
- interact with deployed smart contract

It provides the user interface between the blockchain and the user.