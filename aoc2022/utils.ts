export const sum = (nums: number[]) => nums.reduce((cur, num) => cur + num)

export const group = <T>(a: T[], n: number): T[][] =>
  a.length == 0 ? [] : [a.slice(0, n), ...group(a.slice(n), n)]

export const log = <T>(clos: () => T) => {
  try {
    console.log(clos())
  } catch (error) {
    error instanceof TypeError &&
      console.log(`parsing failed (probably) + ts sucks`)

    console.log(error.stack)
  }
}
