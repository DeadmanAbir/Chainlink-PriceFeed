require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.9",
  solidity: {
    compilers: [{version: "0.8.9"}, {version: "0.6.6"}]
  },
};
