import { Contract, ContractFactory } from "ethers";
import { ethers, upgrades } from "hardhat";

/**
 * * Run the deployProxy.ts file on the localhost to get the address for `PROXY_CONTRACT_ADDRESS`
 */


async function upgradeProxy(proxyContractAddress:string, upgradeToVersion: number) {
    const upgradedContract: ContractFactory = await ethers.getContractFactory(
        `ImplementationV${upgradeToVersion}`
    );
    const upgradedProxy: Contract = await upgrades.upgradeProxy(
        proxyContractAddress,
        upgradedContract, 
           );
    await upgradedProxy.deployed();

    const implementationAddress =
        await upgrades.erc1967.getImplementationAddress(upgradedProxy.address);

    console.log("Proxy contract address: " + upgradedProxy.address);

    console.log(
        `ImplementationV${upgradeToVersion} contract address: ` + implementationAddress
    );
}

const proxyAddress = process.env.PROXY_ADDRESS || "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
const upgradeToVersion = parseInt(process.env.UPGRADE_TO_VERSION||"2",10);

upgradeProxy(proxyAddress, upgradeToVersion)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
