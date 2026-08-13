import { network } from "hardhat";

const { ethers } = await network.create();

async function main() {
    
    const MyNFT = await ethers.getContractFactory("MyNFT");
    
    const nft = await MyNFT.deploy();

    await nft.waitForDeployment();

    const contractAddress = await nft.getAddress();

    console.log("Contract:", contractAddress);
    console.log(`https://sepolia.etherscan.io/address/${contractAddress}`)

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});