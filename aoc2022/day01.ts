import * as data from "./data.ts"
import * as utils from "./utils.ts"

utils.log(() => solveP1(data.day01.custom))
utils.log(() => solveP2(data.day01.custom))

function parse(data: string): number[][] {
  return data.split("\n\n").map(data => data.split("\n").map(Number))
}

function solveP1(data: string): number {
  return Math.max(...parse(data).map(utils.sum))
}

function solveP2(data: string): number {
  return utils.sum(
    parse(data)
      .map(utils.sum)
      .sort((a, b) => b - a)
      .slice(0, 3)
  )
}
