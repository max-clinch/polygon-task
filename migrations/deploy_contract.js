const ether = 10**18; // 1 ether = 1000000000000000000 wei

var EthBank = artifacts.require("EthBank");

module.exports = function(deployer) {
  deployer.deploy(EthBank, { value: 30 * ether });
};