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

const proxyAddress = process.env.PROXY_ADDRESS || "0xdf9bf7F4Be89647c60Ac8BbAac834285Bf76DC6f";
const upgradeToVersion = parseInt(process.env.UPGRADE_TO_VERSION||"2",10);

upgradeProxy(proxyAddress, upgradeToVersion)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
