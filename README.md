# TokenizerArt
42 project TokenizerArt


## Techno
Blockchain : Sepolia Ethereum
Standard : ERC-721 
Langage : Solidity 0.8.x
Framework : Hardhat
Bibliothèque : OpenZeppelin
Interaction: ethers.js
Wallet : MetaMask
Stockage : IPFS (Pinata)

## ERC-721

Un NFT (Non-Fungible Token) est un jeton unique sur une blockchain identifié par un tokenId. Il représente un actif non interchangeable avec les autres jetons du même contrat. Ils représentent des objets différents. 
Le contrat contient - tokenID - owner - ref metadonnees TokenURI.

### Main Functions

Lib OppenZeppelin extention -> ERC721URIStorage.sol
Chaque NFT aura donc sa propre URI IPFS avec cette lib. 

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

### Main Events

```solidity
event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
```

## Project Structure

```text
code/
|
|--

scripts/
|  
|--

test/
|
|--

deployment/
|


mint/
|


documentation/
|


README.md
.env (not provided)

```

## Stockage : IPFS (Pinata)

image.png ->
Upload sur IPFS -> 
CID image ->
metadata.json (image = ipfs://CID_image) ->
Upload sur IPFS ->
CID metadata ->
safeMint(..., "ipfs://bafkreigf6ulfoio4zfylbugifko22woryuwiysvhacmc25s4sc736n4a2y")

## Deployment

```bash
npx hardhat run ../deployment/scripts/deploy.js --network sepolia
```

## A faire

Question pour le dossier Documentation:

pourquoi sepolia / hardhat / IPFS
comment compiler / deployer / minter / verifier le proprietaire / recuperer les metadonnees
fonctionnement general du contrat

ReadMe:

presentation projet - tech use - intsallation - compilation - tests - deploiement - mint 
addr contrat - reseau use - lien vers nft 

Nouvelle notions :

NFT unique 
diff entre tokenID et une addr
les metadonnees metadata.json
les uri
le stockage sur IFPS
safemint() pourquoi ? 
role de IERC721rECEIVER
LES APPROBATIONS - APPROVE ET SETAPPROVALFORALL


## Deployed Contracts

Network: Ethereum Sepolia  
  
Contract address: 0x956dAf34d48E17E1860D1062606C70bd98b3D4B5