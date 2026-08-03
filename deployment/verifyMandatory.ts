import { network } from "hardhat";

const { ethers } = await network.create();

async function main() {

    const nft = await ethers.getContractAt(
        "MyNFT",
        "0x956dAf34d48E17E1860D1062606C70bd98b3D4B5"
    );

    console.log("Name:", await nft.name());
    console.log("Symbol:", await nft.symbol());
    console.log("Owner:", await nft.owner());

    console.log("Owner :", await nft.ownerOf(0));
    console.log("URI   :", await nft.tokenURI(0));
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });