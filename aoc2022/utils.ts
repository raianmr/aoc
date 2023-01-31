// both strings and arrays are objects in js, have nearly identical apis
// and yet, because there are no language constructs (interfaces or abstract
// classes) to represent this relation, it's kinda not a good experience
// writing generic functions that work on both these types. im sure there's
// some ugly ts type system hack to achieve this, but im neither willing nor
// capable enough to pull that off.
// EDIT: ok i was wrong about everything i just said
// EDIT 2: aight im confoosed as to how this works pertaining to extension
// methods so im just gona make strings into char arrays beforehand from now
// on and implement every utility method for arrays only

// type Sliceable<T> = {
//   length: number
//   slice(start?: number, end?: number): T
// }

// export function group<T extends Sliceable<T>>(a: T, n: number): T[] {
//   return a.length == 0 ? [] : [a.slice(0, n), ...group(a.slice(n), n)]
// }

declare global {
  interface String {
    chars(): string[]
  }

  interface Array<T> {
    sum(this: number[]): number
    product(this: number[]): number
    string(this: string[]): string
    equals(other: T[]): boolean
    chunks(n: number): T[][]
  }
}

String.prototype.chars = function (): string[] {
  return this.split("") // or [...this]
}

Array.prototype.sum = function (): number {
  return this.reduce((cur, num) => cur + num)
}

Array.prototype.product = function (): number {
  return this.reduce((cur, num) => cur * num)
}

Array.prototype.string = function (): string {
  return this.join("")
}

Array.prototype.equals = function <T>(other: T[]): boolean {
  return this.every((v, i) => v === other[i])
}

Array.prototype.chunks = function <T>(this: T[], n: number): T[][] {
  return this.length == 0 ? [] : [this.slice(0, n), ...this.slice(n).chunks(n)]
}

export function log<T>(clos: () => T): void {
  try {
    console.log(clos())
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(`parsing failed (probably)`)
    }

    console.log(error.stack)
  }
}
