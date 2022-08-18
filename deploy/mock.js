const {network}=require("hardhat");
const {networkConfig, decimals, INITIAL_ANSWER, developmentChains}= require("../helper-hardhat-config");

async function main({getNamedAccounts, deployments}){
    const{deploy, log}=deployments
    const{deployer}= await getNamedAccounts()
    // const chainId=network.config.chainId
    const chainId = "31337"

    if(developmentChains.includes(chainId)){
        log("Local netwrok detected! Deploying mocks! ")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: "deployer",
            log: true,
            args: [decimals, INITIAL_ANSWER]
        })
        log("Mocks Deployed")
        log("Mocks end here ----------------------------------------------------------")
    }
}

module.exports=main
module.exports.tags=["all", "mocks"]