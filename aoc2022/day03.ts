import * as data from "./data.ts"
import * as utils from "./utils.ts"

const parse = (data: string) => data.split("\n")

const findCommon = ([first, ...rest]: string[]) => {
  const sets = rest.map(str => new Set(str))
  const common = [...first].find(char =>
    sets.every(set => set.has(char))
  ) as string

  return common
}

const findPriority = (common: string) =>
  common.charCodeAt(0) - (/[a-z]/.test(common) ? 96 : 64 - 26)

// part 1

const toHalves = (data: string) => [
  data.slice(0, data.length / 2),
  data.slice(data.length / 2, data.length),
]

const solveP1 = (data: string) =>
  utils.sum(parse(data).map(toHalves).map(findCommon).map(findPriority))

utils.log(() => solveP1(data.day03.custom))

// part 2

const solveP2 = (data: string) =>
  utils.sum(utils.group(parse(data), 3).map(findCommon).map(findPriority))

utils.log(() => solveP2(data.day03.custom))
