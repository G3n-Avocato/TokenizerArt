// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title PipBoy42 NFT
/// @author lamasson
/// @notice ERC-721 NFT contract with IPFS metadata and owner-restricted minting.
contract MyNFT is ERC721URIStorage, Ownable {

    /// ID that will be assigned to the next minted NFT.
    /// Starts at 0 and increases after each mint.
    uint256 private _nextTokenId;

    /// @notice Creates the NFT collection and sets the deployer as contract owner.
    constructor() ERC721("PipBoy42", "PB42") Ownable(msg.sender) {}

    /// @notice Mints a new NFT and assigns its metadata URI.
    /// @dev Only the contract owner can mint NFTs.
    /// @param to Address that will receive the NFT.
    /// @param uri URI pointing to the NFT metadata.
    function safeMint(address to, string memory uri) public onlyOwner {

        uint256 tokenId = _nextTokenId;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _nextTokenId += 1;

    }

    /// @notice Returns the number of NFTs minted by this contract.
    function totalMinted() public view returns(uint256) {
        return _nextTokenId;
    }

}