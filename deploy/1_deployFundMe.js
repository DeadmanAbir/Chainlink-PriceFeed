const {networkConfig}= require("../helper-hardhat-config");

async function deployFunc({getNamedAccounts, deployments}){
    const{deploy, log}=deployments
    const{deployer}= await getNamedAccounts()
    const chainId=network.config.chainId

    const feedAddress=networkConfig[chainId]["ethUsd"]

    const address="0x8A753747A1Fa494EC906cE90E9f37563A8AF630e"

    const fundMe=await deploy("FundMe", {
        from: deployer,
        args: [

        ],
        log: true
    })
}


module.exports.default=deployFunc