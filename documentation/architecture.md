# Architecture

## Overview 

The project is composed of three main components:  

- the `MyNFT` ERC-721 smart contract deployed on Ethereum Sepolia  
- the NFT metadata stored on IPFS  
- the NFT artwork referenced by the metadata and stored on IPFS  

```text

      Ethereum Sepolia 
      Blockchain
        |
        |
        v
    ------------------------
    |Contract MyNFT ERC-721|
    ------------------------
        |
      tokenURI(tokenId)
        |   
        v
    --------------------
    |metadata.json IPFS|
    --------------------
        |
      image
        |
        v
    ----------------
    |NFT image IPFS|
    ----------------

```
The smart contract does not store the image itself.  
The smart contract stores the reference to the NFT metadata.
The metadata then contains the reference to the NFT artwork.

## Smart Contract

The `MyNFT` smart contract is written in Solidity and follows the ERC-721 standard using OpenZeppelin implementations instead of implementing the standard from scratch.  
```text
MyNFT
 ├── ERC721URIStorage
 │      └── ERC721
 │
 └── Ownable
```

The contract is responsible for:

- creating NFTs;
- assigning ownership;
- associating NFTs with metadata;
- controlling who is allowed to mint.

Each NFT has a unique `tokenId`.

## Ownership

There are two different types of ownership:

### Contract ownership

The `owner()` function identifies the owner of the smart contract.

The contract owner has privileged access to owner-only functions such as minting.

### NFT ownership

The `ownerOf(tokenId)` function identifies the owner of a specific NFT.

These two addresses can be different.

In this project, the first NFT is initially owned by the same wallet that deployed the contract.

## Metadata

Each NFT references metadata using the `tokenURI()` function.

The URI points to an IPFS-hosted JSON document.

The JSON document contains information about the NFT and references the artwork stored on IPFS.
