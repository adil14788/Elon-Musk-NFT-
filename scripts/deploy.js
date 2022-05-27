async function main() {
    const ElonNFT = await hre.ethers.getContractFactory("ElonNFT");
    const elon = await ElonNFT.deploy();
    elon.deployed();
    console.log("NFT deployed to:", elon.address);
    let txn = await elon.mintNFT();
    await txn.wait();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });