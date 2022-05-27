require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { API_URL_KEY, PRIVATE_KEY } = process.env; //environment variables are being loaded here.

module.exports = {
	solidity: "0.8.1",
	defaultNetwork: "rinkeby",
	networks: {
		rinkeby: {
			url: API_URL_KEY,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
};
