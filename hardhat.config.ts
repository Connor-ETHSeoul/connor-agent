import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";

dotenv.config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY= process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL ? SEPOLIA_RPC_URL : "",
            accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
            gasPrice: 10000000000, 
          }
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
};

export default config;
