import { Contract, ContractFactory } from "ethers";
import { ethers, upgrades } from "hardhat";

/**
 * * Run the deployProxy.ts file on the localhost to get the address for `PROXY_CONTRACT_ADDRESS`
 */


async function upgradeProxy(proxyContractAddress:string, upgradeToVersion: string) {
    const version = formatVersion(upgradeToVersion);
    console.log(version)
    const upgradedContract: ContractFactory = await ethers.getContractFactory(
        `ImplementationV_${version}`
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

function formatVersion(version: string): string {
    return version.replace(/\./g, '_');
}
const proxyAddress = process.env.PROXY_ADDRESS || "0xA2335efac69836724b1d3068506B8Ad1dB558227";
const upgradeToVersion = process.env.UPGRADE_TO_VERSION||"1.0.1";

upgradeProxy(proxyAddress, upgradeToVersion)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
