# TokenizerArt
42 project TokenizerArt - PipBoy42 NFT    

## Project Overview
This project consists of creating and deploying a Non-Fungible Token (NFT) on the Ethereum Sepolia test network.  

The NFT follows the ERC-721 standard and represents a unique digital artwork inspired by the Fallout universe.  

The project demonstrates the complete lifecycle of an NFT:  
- creation of the digital artwork;
- decentralized storage of the artwork and metadata using IPFS;
- development of an ERC-721 smart contract;
- deployment of the smart contract on Ethereum Sepolia;
- minting of the NFT;
- verification of its owner and metadata.

## NFT Description
 
```text
An NFT (Non-Fungible Token) is a unique token on a blockchain, identified by a tokenId. 
Unlike fungible tokens, NFTs are individually identifiable and are not interchangeable 
on a one-to-one basis because each token can represent a distinct asset.
```

The NFT represents a digital artwork inspired by the T-60 Power Armor
from Fallout, featuring the number 42.

The NFT contract is named **PipBoy42** and uses the symbol **PB42**.

The artwork and its metadata are stored on IPFS.

The metadata follows the standard NFT metadata structure and contains:

- the NFT name;
- a description;
- the artist name;
- the IPFS URI of the artwork.

## Technical Choices

### Blockchain
The project uses the **Ethereum Sepolia** test network.  

Sepolia was chosen because it is an Ethereum test network that allows smart contracts and NFTs to be deployed without using real ETH.  

The contract can therefore be tested on a public blockchain while avoiding real financial transactions.  

### NFT Standard

The NFT contract follows the **ERC-721** standard.  
  
It was chosen because it is the standard designed for non-fungible tokens on Ethereum. Each NFT is identified by a unique `tokenId`.  
  
`safeMint()` : creates a new NFT. Only the contract owner can call this function.  

The `_safeMint()` function from the OpenZeppelin library verifies, when minting to a contract, that the contract correctly implements the ERC-721 reception mechanism.  
This prevents NFTs from being minted to smart contracts that cannot receive ERC-721 tokens correctly.  
  
`totalMinted()` : returns the number of NFTs minted by the contract.  
  
The contract also uses functions provided by OpenZeppelin and ERC-721,
including:  

#### Main Functions

Lib OpenZeppelin extension -> ERC721URIStorage.sol  
Each NFT will therefore have its own IPFS URI with this extension library.  

```solidity
function balanceOf(address _owner) external view returns (uint256);
function ownerOf(uint256 _tokenId) external view returns (address);
function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;
function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;
function transferFrom(address _from, address _to, uint256 _tokenId) external payable;
function approve(address _approved, uint256 _tokenId) external payable;
function setApprovalForAll(address _operator, bool _approved) external;
function getApproved(uint256 _tokenId) external view returns (address);
function isApprovedForAll(address _owner, address _operator) external view returns (bool);
```

#### Main Events

```solidity
event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
```

### Programming Language

The smart contract is written in **Solidity**.

The project uses **Hardhat 3** as the development environment and **Ethers.js** through the Hardhat Ethers plugin.

### Storage

The NFT artwork and its metadata are stored using **IPFS**.

The image is referenced by its IPFS CID in the metadata.

The metadata itself is then referenced by the NFT smart contract through its `tokenURI`.

This allows the blockchain to store a reference to the NFT data without storing the image directly on-chain.

## Project Structure
  
```text
code/
|
|-- MyNFT.sol

scripts/
|  
|-- checkNFT.ts

test/
|
|-- MyNFT-test.ts

deployment/
|
|-- deployMandatory.ts
|-- mintMandatory.ts
|-- verifyMandatory.ts

mint/
|
|-- image.png
|-- metadata.json

documentation/
|
|-- architecture.md
|-- deployment.md
|-- ipfs.md

hardhat.config.ts
package-lock.json
package.json
README.md
.env (not provided)

```
  
`code` directory contains the smart contract.  
`deployment` directory contains the deployment scripts for the smart contract and for minting the NFT token.  
`script` directory contains the network deployment verification test.  
`test` directory contains unit tests for smart contract.  
`mint` directory contains the NFT artwork and its metadata.  
  
## Installation
 
```bash
npm install
```
  
## Configuration
  
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
Update the `NFT_CONTRACT_ADDR` variable in the event of a new deployment.  
Update the `SEPOLIA_RPC_URL` if the URL changes.  

## Compile 

```bash
npx hardhat compile
```

## Testing 

```bash
npx hardhat test
```

## Deployment

```bash
npx hardhat run deployment/deployMandatory.ts --network sepolia
```

The script deploys the `MyNFT` contract and displays its blockchain address.  

## Minting

Minting is restricted to the contract owner.  

```bash
npx hardhat run deployment/mintMandatory.ts --network sepolia
``` 

## NFT Verification

```bash
npx hardhat run deployment/verifyMandatory.ts --network sepolia
```

## Deployed Contract

* Network: `Ethereum Sepolia`  
  
* Contract MyNFT address: `0xF7c1638280ef03fdC46eBBf1e03246fD3D366627`  

* Explorer: `https://sepolia.etherscan.io/address/0xF7c1638280ef03fdC46eBBf1e03246fD3D366627`  

* NFT metadata URI: `ipfs://bafkreigf6ulfoio4zfylbugifko22woryuwiysvhacmc25s4sc736n4a2y`  

* Gateway IPFS metadata: `https://ipfs.io/ipfs/bafkreigf6ulfoio4zfylbugifko22woryuwiysvhacmc25s4sc736n4a2y`  

* NFT image URI: `ipfs://bafybeib63tvpe6pkxqr2xmzssghpfs6x4t4moxzgtgj7sbioetcqqco2i4`  

* Gateway IPFS image: `https://ipfs.io/ipfs/bafybeib63tvpe6pkxqr2xmzssghpfs6x4t4moxzgtgj7sbioetcqqco2i4`  

## Security

The minting function is restricted to the smart contract owner. This prevents unauthorized accounts from minting NFTs through the contract.  
The contract uses OpenZeppelin's `Ownable` mechanism.  

NFT ownership is separate from contract ownership.  
The contract owner is retrieved using: `owner()`.  
The owner of an individual NFT is retrieved using: `ownerOf(tokenId)`.  

## Technologies

Blockchain : `Sepolia Ethereum`  
Standard : `ERC-721`   
Language : `Solidity 0.8.28`  
Framework : `Hardhat`  
Bibliothèque : `OpenZeppelin`  
Interaction : `ethers.js`  
Wallet : `MetaMask`  
Stockage : `IPFS (Pinata)`  

## License

This project is released under the MIT License.