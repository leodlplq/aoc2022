import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const inputs = input.split("\n");
  const maxEach = [0];
  for (let i = 0; i < inputs.length; i++) {
    const length = maxEach.length;
    if (inputs[i] != "") {
      maxEach[length - 1] += parseInt(inputs[i]);
    } else {
      maxEach.push(0);
    }
  }

  return maxEach.sort((a, b) => b - a)[0];
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const inputs = input.split("\n");
  const maxEach = [0];
  for (let i = 0; i < inputs.length; i++) {
    const length = maxEach.length;
    if (inputs[i] != "") {
      maxEach[length - 1] += parseInt(inputs[i]);
    } else {
      maxEach.push(0);
    }
  }
  maxEach.sort((a, b) => b - a);

  const total = maxEach[0] + maxEach[1] + maxEach[2];
  return total;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
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
  onlyTests: false,
});
