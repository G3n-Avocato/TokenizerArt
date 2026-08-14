# Deployment and Minting

## Prerequisites

The following tools are required:

- Node.js
- npm
- Hardhat 3
- a wallet with a Sepolia account
- Sepolia ETH for transaction fees
- an Ethereum Sepolia RPC endpoint

No real ETH is required.

## Env Variables

Create a `.env` file.  

```txt
SEPOLIA_PRIVATE_KEY=
SEPOLIA_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
NFT_CONTRACT_ADDR=
NFT_METADATA_URI=
NFT_TOKEN_ID=
NEW_NFT_OWNER_ADDRESS=
ETHERSCAN_API_KEY=
```

## Installation

Install dependencies:  
```bash
npm install
```

## Compile Contract

```bash
npx hardhat compile
```

## Run Test

```bash
npx hardhat test
```

The tests verify the main behavior of the NFT contract, including: contract deployment, ownership, metadata, minting, NFT ownership.  

## Deploy

```bash
npx hardhat run deployment/deployMandatory.ts --network sepolia
```

The resulting contract address must then be added to: `NFT_CONTRACT_ADDR` in `.env`.  
The RPC endpoint used to communicate with Sepolia is configured in `hardhat.config.ts`.  

The contract is deployed by the project owner. The deployer becomes the owner of the smart contract.  

## Verify contract on Etherscan

With `ETHERSCAN_API_KEY`, you can verify the contract using Etherscan's verification tools.  

```bash
npx hardhat verify --network sepolia "NFT_CONTRACT_ADDR"
```

## Mint
Minting is restricted to the contract owner.  

Mint NFT:  
```bash
npx hardhat run deployment/mintMandatory.ts --network sepolia
```

The minting script calls the `safeMint` function of the smart contract to create a new NFT.  

The script uses the metadata URI stored in the environment configuration.

The metadata URI points to the JSON file stored on IPFS.  

## Verify

```bash
npx hardhat run deployment/verifyMandatory.ts --network sepolia
```

The script checks:

- contract name;
- contract symbol;
- contract owner;
- NFT owner using `ownerOf`;
- metadata using `tokenURI`.

The `ownerOf(tokenId)` function is used to verify the current owner
of the NFT.  

The `tokenURI(tokenId)` function is used to retrieve the metadata URI
associated with the NFT.  

## Deployed Contract

Network: Ethereum Sepolia

Contract: 0xF7c1638280ef03fdC46eBBf1e03246fD3D366627

The contract can be inspected using a Sepolia blockchain explorer.