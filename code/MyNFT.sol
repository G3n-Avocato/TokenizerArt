// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title MyNFT
/// @author lamasson
/// @notice Simple ERC-721.
contract MyNFT is ERC721URIStorage, Ownable {

    uint256 private _nextTokenId;

    constructor() ERC721("PipBoy42", "PB42") Ownable(msg.sender) {

    }

    function safeMint(address to, string memory uri) public onlyOwner {

        uint256 tokenId = _nextTokenId;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        _nextTokenId += 1;

    }

    function totalMinted() public view returns(uint256) {
        return _nextTokenId;
    }

}