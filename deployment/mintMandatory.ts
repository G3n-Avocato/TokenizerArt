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

    const nftOwner = process.env.NEW_NFT_OWNER_ADDRESS;
    if (!nftOwner)
        throw new Error("NEW_NFT_OWNER_ADDRESS is not defined");

    const metadataURI = process.env.NFT_METADATA_URI;
    if (!metadataURI)
        throw new Error("NFT_METADATA_URI is not defined");
    
    const tx = await nft.safeMint(nftOwner, metadataURI);
    await tx.wait();

    const totalMinted = await nft.totalMinted();
    const tokenId = totalMinted - 1n;

    console.log("NFT minted");
    console.log("Owner:", nftOwner);
    console.log("Token ID:", tokenId);
    console.log("Metadata:", metadataURI);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});