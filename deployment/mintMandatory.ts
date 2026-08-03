import { network } from "hardhat";

const { ethers } = await network.create();

async function main() {

    const contractAddress = "0x956dAf34d48E17E1860D1062606C70bd98b3D4B5";

    const nft = await ethers.getContractAt(
        "MyNFT",
        contractAddress
    );

    const [owner] = await ethers.getSigners();

    const metadataURI = "ipfs://bafkreigf6ulfoio4zfylbugifko22woryuwiysvhacmc25s4sc736n4a2y";

    const tx = await nft.safeMint(owner.address, metadataURI);

    await tx.wait();

    console.log("NFT minted");
    console.log("Owner:", owner.address);
    console.log("Token ID: 0");
    console.log("Metadata:", metadataURI);

}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });