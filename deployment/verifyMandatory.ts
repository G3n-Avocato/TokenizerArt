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

    console.log("Name:", await nft.name());
    console.log("Symbol:", await nft.symbol());
    console.log("Contract Owner:", await nft.owner());

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});