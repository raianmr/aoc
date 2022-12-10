export const sum = (nums: number[]) => nums.reduce((cur, num) => cur + num)
export const log = (clos: () => number) => {
  try {
    console.log(clos())
  } catch (error) {
    error instanceof TypeError &&
      console.log(`parsing failed (probably) + ts sucks`)

    console.log(error.stack)
  }
}
