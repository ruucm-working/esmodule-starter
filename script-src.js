import { appendDiv } from "./append-div.js"
import * as d3 from "https://unpkg.com/d3?module"

appendDiv("Hello from inline script")

console.log("d3", d3)

import("./async-script.js").then(
  (moduleExports) => {
    moduleExports.go()
  },
  (error) => {
    console.error("there was an error loading the script")
    throw error
  }
)
