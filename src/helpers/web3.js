import Web3 from "web3"
import { abi, networks } from "../contracts/CryptoMon.json"

const web3 = new Web3("http://localhost:9545/", {

})

const contract = new web3.eth.Contract(abi, networks["4447"].address)

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

export const fight = ({ team, minBet, bet }) => {
  // return getContractInstance()
  //   .then(contract => {
  return web3.eth.getAccounts()
    .then(([ address ]) => {
      return contract.methods.fight(team, minBet).send({ value: bet, from: address })
    })

    // })
}
