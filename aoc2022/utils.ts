export function sum(nums: number[]): number {
  return nums.reduce((cur, num) => cur + num)
}

// both strings and arrays are objects in js, have nearly identical apis
// and yet, because there are no language constructs (interfaces or abstract
// classes) to represent this relation, it's kinda not a good experience
// writing generic functions that work on both these types. im sure there's
// some ugly ts type system hack to achieve this, but im neither willing nor
// capable enough to pull that off.
// EDIT: ok i was wrong about everything i just said

type Sliceable<T> = {
  length: number
  slice(start?: number, end?: number): T
}

export function group<T extends Sliceable<T>>(a: T, n: number): T[] {
  return a.length == 0 ? [] : [a.slice(0, n), ...group(a.slice(n), n)]
}

export function log<T>(clos: () => T): void {
  try {
    console.log(clos())
  } catch (error) {
    // ts cant catch all bugs, and neither can go. but go's explicit error
    // handling makes sure i dont do the dumb shit ive done here. handling
    // errors retrospectively is a huge pain imo, and explains why it's so easy
    // to write complete and utter garbage in python, js, c++ and so on. go
    // actually doesnt miss out on anything by making these things explicit,
    // you can ignore errors using `discards` all you want. the reason people
    // complain, i assume, is that this syntax reminds them to clean after
    // themselves and uncovers issues that would've otherwise gone unnoticed
    if (error instanceof TypeError) console.log(`parsing failed (probably)`)

    console.log(error.stack)
  }
}
