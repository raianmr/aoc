export function sum(nums: number[]): number {
  return nums.reduce((cur, num) => cur + num)
}

// both strings and arrays are objects in js, have nearly identical apis
// and yet, because there are no language constructs (interfaces or abstract
// classes) to represent this relation, it's kinda not a good experience
// writing generic functions that work on both these types. im sure there's
// some ugly ts type system hack to achieve this, but im neither willing nor
// capable enough to pull that off.

export function group<T>(a: T[], n: number): T[][] {
  return a.length == 0 ? [] : [a.slice(0, n), ...group(a.slice(n), n)]
}

export function log<T>(clos: () => T): void {
  try {
    console.log(clos())
  } catch (error) {
    if (error instanceof TypeError) {
      // ts cant catch all bugs, and neither can go. but go's explicit error
      // handling makes sure i dont the dumb shit ive done here. handling
      // errors retrospectively is a huge pain imo, and explains why it's so
      // easy to write complete and utter garbage in python, js, c++ and so on
      console.log(`parsing failed probably`)
    }

    console.log(error.stack)
  }
}
