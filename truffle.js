module.exports = {
  contracts_build_directory: "../src/contracts",
  networks: {
    local: {
      host: "http://127.0.0.1",
      port: 9545,
      network_id: "*", // Match any netw ork id
      gas: 8000000,
      gasPrice: 1000
    }
  }
}
