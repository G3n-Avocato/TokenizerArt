import { network } from "hardhat";

const { ethers } = await network.create();

async function main() {
    
    const MyNFT = await ethers.getContractFactory("MyNFT");
    
    const nft = await MyNFT.deploy();

    await nft.waitForDeployment();

    console.log("Contract:", await nft.getAddress());
    console.log(`https://sepolia.etherscan.io/address/${await nft.getAddress()}`)

}

main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });