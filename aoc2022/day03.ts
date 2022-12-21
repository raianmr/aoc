import * as data from "./data.ts"
import * as utils from "./utils.ts"

// i've settled on two new styles:
// 1. hoisting can be used to increase readabity immensely (pretty common
// practice in go), playing nice with our top to bottonm way of thinking and
// all. but js being the mess of a language that it is, doesn't have a way to
// hoist and make usable arrow functions at the same time. so i feel compelled
// to write all reusable functions in the traditional, verbose manner. and this
// leads me to my next realization:
// 2. prolly the only thing i miss from C#: top level functions or functions
// that are meant to be reused should have their return types spelled out. this
// can and probably should be done after writing the body). i had developed
// this weird style of storing **all** functions as consts watching all these
// youtubers but at this point this just seems dumb and bad for readability

utils.log(() => solveP1(data.day03.custom))
utils.log(() => solveP2(data.day03.custom))

function parse(data: string): string[] {
  return data.split("\n")
}

function solveP1(data: string): number {
  return utils.sum(parse(data).map(toHalves).map(findCommon).map(findPriority))
}

function solveP2(data: string): number {
  return utils.sum(
    utils.group(parse(data), 3).map(findCommon).map(findPriority)
  )
}

function findCommon([first, ...rest]: string[]): string {
  const sets = rest.map(str => new Set(str))
  return [...first].find(char => sets.every(set => set.has(char))) as string
}

function findPriority(common: string): number {
  return common.charCodeAt(0) - (/[a-z]/.test(common) ? 96 : 64 - 26)
}

function toHalves(data: string): string[] {
  return [
    data.slice(0, data.length / 2),
    data.slice(data.length / 2, data.length),
  ]
}
