const { ethers } = require("ethers");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contract with account: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`Account balance: ${balance.toString()}`);

    const GenToken = await ethers.getContractFactory('GenerationToken');
    const genToken = await GenToken.deploy();
    console.log(`GenerationToken address: ${genToken.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });