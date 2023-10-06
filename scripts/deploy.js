async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("Calculator"); //Replace with name of your smart contract
  const token = await Token.deploy();
  console.log("Token: ", token);
  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// 0x71B5f6FF8FDaD48500403bEcF3413d393cA40514 : address
// RDZN3EMDDR7MKKKTHXJMRPR4YI8PRFGFFR : apikey for this project in bnb network