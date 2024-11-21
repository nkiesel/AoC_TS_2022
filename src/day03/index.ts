import run from "aocrunner"
import { chunk, intersection, sum } from "lodash-es"

const parseInput = (rawInput: string) => rawInput.split("\n")

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let sum = 0
  const a = "a".charCodeAt(0) - 1
  const A = "A".charCodeAt(0) - 27
  for (const l of input) {
    const a1 = l.slice(0, l.length / 2).split("")
    const a2 = l.slice(l.length / 2).split("")
    const c = intersection(a1, a2)[0]
    sum += c.charCodeAt(0) - (c >= "a" && c <= "z" ? a : A)
  }

  return sum
}

const ca = "a".charCodeAt(0) - 1
const cA = "A".charCodeAt(0) - 27
const priority = (s: string) => s.charCodeAt(0) - (s == s.toLowerCase() ? ca : cA)

const part1a = (rawInput: string) =>
  sum(
    parseInput(rawInput)
      .map((l) => intersection(...chunk(l.split(""), l.length / 2))[0])
      .map((s) => priority(s)),
  )

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    tests: [
      {
        input: `
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw
        `,
        expected: 157,
      },
    ],
    solution: part1a,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
})
