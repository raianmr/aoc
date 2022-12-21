import * as data from "./data.ts"
import * as utils from "./utils.ts"

utils.log(() => solveP1(data.day04.custom))
utils.log(() => solveP2(data.day04.custom))

function parse(data: string): number[][] {
  return data.split("\n").map(pair =>
    pair
      .match(/(\d+)-(\d+),(\d+)-(\d+)/)
      ?.slice(1)
      .map(Number)
  ) as number[][] // man do i miss mypy
}

function solveP1(data: string): number {
  return parse(data).filter(
    ([a1, b1, a2, b2]) => (a1 >= a2 && b1 <= b2) || (a1 <= a2 && b1 >= b2)
  ).length
}

function solveP2(data: string): number {
  return parse(data).filter(([a1, b1, a2, b2]) => a1 <= b2 && a2 <= b1).length
}
