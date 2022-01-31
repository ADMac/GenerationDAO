var GenerationToken = artifacts.require("./GenerationToken.sol");
var GovernanceTimeLock = artifacts.require("./GovernanceTimeLock.sol");
var GenerationGovernor = artifacts.require("./GenerationGovernor.sol");
var Multisig = "0xRandomStringOfCharactersForAddress"

module.exports = function(deployer) {
  deployer.then(async () => {
      await deployer.deploy(GenerationToken);
      await deployer.deploy(GovernanceTimeLock, Multisig);
      await deployer.deploy(GenerationGovernor, GenerationToken.address, GovernanceTimeLock.address);
  });
};
