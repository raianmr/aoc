import * as data from "./data.ts"

const sum = (nums: number[]) => nums.reduce((cur, num) => cur + num)

const parse = (data: string) =>
  data.split("\n\n").map(data => data.split("\n").map(Number))

// part 1

const solveP1 = (data: string) => Math.max(...parse(data).map(sum))

console.log(solveP1(data.day01.custom))

// part 2

const solveP2 = (data: string) =>
  sum(
    parse(data)
      .map(sum)
      .sort((a, b) => b - a)
      .slice(0, 3)
  )

console.log(solveP2(data.day01.custom))
