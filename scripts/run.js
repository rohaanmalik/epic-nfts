const main = async () => {
    // compiling the code
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    // waiting for it to get deployed
    const nftContract = await nftContractFactory.deploy()
    // waiting for the contract to be mined
    await nftContract.deployed()
    console.log("COntract deployed to:", nftContract.address)
};

const runMain = async () => {
    try{
        await main();
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain();