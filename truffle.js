module.exports = {
  contracts_build_directory: "./src/contracts",
  networks: {
    pippo: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
      gas: 8000000,
      gasPrice: 1000
    }
  }
}
