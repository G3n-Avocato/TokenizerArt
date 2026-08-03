import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("MyNFT", function () {

    let MyNFT;
    let nft;
    let owner;
    let alice;
    let bob;

    /// function exec before every test, create new contract for all test
    beforeEach(async function () {

        [owner, alice, bob] = await ethers.getSigners();

        MyNFT = await ethers.getContractFactory("MyNFT");

        nft = await MyNFT.deploy();

        await nft.waitForDeployment();
    });


    it("Should deploy the NFT contract", async function () {

        expect(await nft.name()).to.equal("PipBoy42");
        expect(await nft.symbol()).to.equal("PB42");

    });
    it("Should mint an NFT and assign ownership", async function () {
        
        const uri = "ipfs://QmTestMetadata";
        
        await nft.safeMint(alice.address, uri);

        expect(await nft.ownerOf(0)).to.equal(alice.address);
        expect(await nft.tokenURI(0)).to.equal(uri);

    });
    it("Should prevent non-owner from minting", async function () {

        const uri = "ipfs://QmFakeMetadata";

        await expect(nft.connect(alice)
            .safeMint(alice.address, uri)
        )
        .to.be.revertedWithCustomError(nft, "OwnableUnauthorizedAccount");

    });
    it("Should emit Transfer event when minting", async function () {
        
        const uri = "ipfs://QmTestMetadata";
        
        await expect(nft.safeMint(alice.address, uri)).to.emit(nft, "Transfer").withArgs(
            ethers.ZeroAddress, alice.address, 0);

    });
    it("Should transfer NFT ownership", async function () {

        const uri = "ipfs://QmTestMetadata";

        // Mint NFT for alice
        await nft.safeMint(alice.address, uri);
        expect(await nft.ownerOf(0)).to.equal(alice.address);

        // Alice transfer NFT to bob
        await nft.connect(alice).safeTransferFrom(alice.address, bob.address, 0);
        expect(await nft.ownerOf(0)).to.equal(bob.address);

    });


});