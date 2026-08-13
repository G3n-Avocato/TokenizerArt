import { expect } from "chai";
import { network } from "hardhat";

const { ethers, networkHelpers } = await network.create();
const { loadFixture } = networkHelpers;

async function deployMyNFT() {
    
    const [owner, alice, bob] = await ethers.getSigners();   
    
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const nft = await MyNFT.deploy();  

    await nft.waitForDeployment(); 
    
    return { nft, owner, alice, bob };
}

describe("MyNFT", function () {

    it("Should deploy the NFT contract", async function () {

        const { nft, owner, alice, bob } = await loadFixture(deployMyNFT);

        expect(await nft.name()).to.equal("PipBoy42");
        expect(await nft.symbol()).to.equal("PB42");
        expect(await nft.owner()).to.equal(owner.address);

    });
    it("Should mint an NFT and assign ownership", async function () {
        
        const { nft, owner, alice, bob } = await loadFixture(deployMyNFT);
 
        const uri = "ipfs://QmTestMetadata";
        
        await nft.safeMint(alice.address, uri);

        expect(await nft.ownerOf(0)).to.equal(alice.address);
        expect(await nft.tokenURI(0)).to.equal(uri);

    });
    it("Should track the number of minted NFTs", async function () {

        const { nft, owner, alice, bob } = await loadFixture(deployMyNFT);

        expect(await nft.totalMinted()).to.equal(0);

        await nft.safeMint(alice.address, "ipfs://Metadata1");
        expect(await nft.totalMinted()).to.equal(1);

        await nft.safeMint(bob.address, "ipfs://Metadata2");
        expect(await nft.totalMinted()).to.equal(2);

    });
    it("Should assign unique token IDs", async function () {

        const { nft, owner, alice, bob } = await loadFixture(deployMyNFT);

        await nft.safeMint(alice.address, "ipfs://Metadata0");
        await nft.safeMint(bob.address, "ipfs://Metadata1");

        expect(await nft.ownerOf(0)).to.equal(alice.address);
        expect(await nft.ownerOf(1)).to.equal(bob.address);

        expect(await nft.tokenURI(0)).to.equal("ipfs://Metadata0");
        expect(await nft.tokenURI(1)).to.equal("ipfs://Metadata1");
    });
    it("Should prevent non-owner from minting", async function () {

        const { nft, owner, alice, bob } = await loadFixture(deployMyNFT);

        const uri = "ipfs://QmFakeMetadata";

        await expect(nft.connect(alice)
            .safeMint(alice.address, uri)
        )
        .to.be.revertedWithCustomError(nft, "OwnableUnauthorizedAccount");

    });
    it("Should emit Transfer event when minting", async function () {

        const { nft, owner, alice, bob } = await loadFixture(deployMyNFT);
        
        const uri = "ipfs://QmTestMetadata";
        
        await expect(nft.safeMint(alice.address, uri)).to.emit(nft, "Transfer").withArgs(
            ethers.ZeroAddress, alice.address, 0);

    });
    it("Should transfer NFT ownership", async function () {

        const { nft, owner, alice, bob } = await loadFixture(deployMyNFT);

        const uri = "ipfs://QmTestMetadata";

        // Mint NFT for alice
        await nft.safeMint(alice.address, uri);
        expect(await nft.ownerOf(0)).to.equal(alice.address);

        // Alice transfer NFT to bob
        await nft.connect(alice)["safeTransferFrom(address,address,uint256)"](
            await alice.getAddress(),
            await bob.getAddress(),
            0
        );
        expect(await nft.ownerOf(0)).to.equal(bob.address);

    });

});