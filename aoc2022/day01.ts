import * as data from "./data.ts"
import * as utils from "./utils.ts"

const parse = (data: string) =>
  data.split("\n\n").map(data => data.split("\n").map(Number))

// part 1

const solveP1 = (data: string) => Math.max(...parse(data).map(utils.sum))

utils.log(() => solveP1(data.day01.custom))

// part 2

const solveP2 = (data: string) =>
  utils.sum(
    parse(data)
      .map(utils.sum)
      .sort((a, b) => b - a)
      .slice(0, 3)
  )

utils.log(() => solveP2(data.day01.custom))
