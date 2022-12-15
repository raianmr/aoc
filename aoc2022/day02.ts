import * as data from "./data.ts"
import * as utils from "./utils.ts"

utils.log(() => solveP1(data.day02.custom))
utils.log(() => solveP2(data.day02.custom))

function parse(data: string): string[][] {
  return data.split("\n").map(data => data.split(" "))
}

// because js, being the high iq language that it is, hoists variables, but
// without actually making them usable, i cannot list declarations as they are
// needed. the thought process during writing the code simply cannot be
// documented here.

enum Move {
  ROCK = 1,
  PAPER = 2,
  SCISSOR = 3,
}

const P1Scores: {
  [opponent: string]: { [player: string]: number }
} = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
}

const P1Moves: {
  [move: string]: number
} = {
  X: Move.ROCK,
  Y: Move.PAPER,
  Z: Move.SCISSOR,
}

function solveP1(data: string): number {
  return utils.sum(
    parse(data).map(
      ([opponent, player]) => P1Scores[opponent][player] + P1Moves[player]
    )
  )
}

const P2Moves: {
  [opponent: string]: { [move: string]: number }
} = {
  A: { X: Move.SCISSOR, Y: Move.ROCK, Z: Move.PAPER },
  B: { X: Move.ROCK, Y: Move.PAPER, Z: Move.SCISSOR },
  C: { X: Move.PAPER, Y: Move.SCISSOR, Z: Move.ROCK },
}

const P2Scores: {
  [player: string]: number
} = {
  X: 0,
  Y: 3,
  Z: 6,
}

function solveP2(data: string): number {
  return utils.sum(
    parse(data).map(
      ([opponent, outcome]) => P2Moves[opponent][outcome] + P2Scores[outcome]
    )
  )
}
