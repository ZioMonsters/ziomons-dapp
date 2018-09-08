const gulp = require("gulp")
const path = require("path")
const sfGulpDeployer = require("@soluzioni-futura/sf-gulp-deployer")


const options = {
  envs: ["staging", "production"],
  folder: path.join(__dirname, "build"),
  bucket: "cryptomon",
  prefix: env => `dapp/${env}`
}

sfGulpDeployer(gulp, options)
