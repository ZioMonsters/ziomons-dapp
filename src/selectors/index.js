export const getAddress = state => {
  if (state.drizzleStatus.initialized) {
    return Object.keys(state.accountBalances)[0]
  }
}
