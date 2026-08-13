import { network } from "hardhat";

const { ethers } = await network.create();

async function main() {
    
    const contractAddress = process.env.NFT_CONTRACT_ADDR;
    if (!contractAddress)
        throw new Error("NFT_CONTRACT_ADDR is not defined");

    const nft = await ethers.getContractAt(
        "MyNFT",
        contractAddress
    );

    const tokenid = process.env.NFT_TOKEN_ID;
    if (!tokenid)
        throw new Error("NFT_TOKEN_ID is not defined");

    console.log("Owner :", await nft.ownerOf(tokenid));
    console.log("URI   :", await nft.tokenURI(tokenid));
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});