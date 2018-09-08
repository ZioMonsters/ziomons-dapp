import Web3 from "web3"
import { abi, networks } from "../contracts/CryptoMon.json"

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(Web3.version)
//const contract = web3.eth.Contract(abi).at(networks["4447"].address)  

// export const getContractInstance = () => {
//   if (contract) {
//     return contract
//   } else {
//     new web3.eth.Contract(abi, networks["4447"].address)
//       .then(instance => {
//         contract = instance
//         return instance
//       })
//   }
// }

export const fight = (team, minBet, bet) => { //{ team, minBet, bet }
//console.log(web3.eth.accounts)
}
