import Web3 from "web3"
import { abi } from "../contracts/CryptoMon.json"

const web3 = new Web3("http://localhost:9545/")

export const getContractInstance = () => {
  return new web3.eth.Contract(abi, "0x2c2b9c9a4a25e24b174f26114e8926a9f2128fe4") 
}