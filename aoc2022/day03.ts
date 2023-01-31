import * as data from "./data.ts"
import * as utils from "./utils.ts"

utils.log(() => solveP1(data.day03.custom))
utils.log(() => solveP2(data.day03.custom))

function parse(data: string): string[] {
  return data.split("\n")
}

function solveP1(data: string): number {
  return parse(data).map(toHalves).map(findCommon).map(findPriority).sum()
}

function solveP2(data: string): number {
  return parse(data).chunks(3).map(findCommon).map(findPriority).sum()
}

function findCommon([first, ...rest]: string[]): string {
  const sets = rest.map(str => new Set(str))
  return first.chars().find(char => sets.every(set => set.has(char))) as string
}

function findPriority(common: string): number {
  return common.charCodeAt(0) - (/[a-z]/.test(common) ? 96 : 64 - 26)
}

function toHalves(data: string): string[] {
  return data
    .chars()
    .chunks(data.length / 2)
    .map(chars => chars.string())
}
