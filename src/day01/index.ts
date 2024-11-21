import run from "aocrunner"
import { max, sortBy } from "lodash-es"

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((l) => parseInt(l, 10))

const part1 = (rawInput: string) => common(rawInput, 1)

const common = (rawInput: string, count: number) => {
  const input = parseInput(rawInput)
  const sums: number[] = [0]
  for (const l of input) {
    if (isNaN(l)) {
      sums.push(0)
    } else {
      sums[sums.length - 1] += l
    }
  }
  return max(sortBy(sums).slice(0, count))
}

const part2 = (rawInput: string) => common(rawInput, 3)

const sample1 = `
        1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000
        `
run({
  part1: {
    tests: [
      {
        input: sample1,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: sample1,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
})
