const config = process.env.NODE_ENV === "production" ?  require("../config.prod.json") : require("../config.json")

export const { apiUrl } = config
