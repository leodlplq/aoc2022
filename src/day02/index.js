import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const inputs = input.split("\n");
  //A Rock
  //B Paper
  //C Scissor

  //X Rock
  //Y Paper
  //Z Scissor
  let points = inputs.reduce((acc, curr) => {
    const [enemy, me] = curr.split(" ");

    let total = 0;
    switch (me) {
      case "X":
        total += 1;
        if (enemy == "C") total += 6;
        if (enemy == "A") total += 3;
        break;
      case "Y":
        total += 2;
        if (enemy == "A") total += 6;
        if (enemy == "B") total += 3;
        break;
      case "Z":
        total += 3;
        if (enemy == "B") total += 6;
        if (enemy == "C") total += 3;
        break;

      default:
        break;
    }
    return acc + total;
  }, 0);
  return points;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const inputs = input.split("\n");

  //A Rock
  //B Paper
  //C Scissor

  //X Rock 1
  //Y Paper 2
  //Z Scissor 3

  //X LOSE
  //Y DRAW
  //Z WIN
  let points = inputs.reduce((acc, curr) => {
    const [enemy, me] = curr.split(" ");
    let total = 0;
    switch (me) {
      case "X":
        total += 0;
        if (enemy == "A") total += 3;
        if (enemy == "B") total += 1;
        if (enemy == "C") total += 2;
        break;
      case "Y":
        total += 3;
        if (enemy == "A") total += 1;
        if (enemy == "B") total += 2;
        if (enemy == "C") total += 3;
        break;
      case "Z":
        total += 6;
        if (enemy == "A") total += 2;
        if (enemy == "B") total += 3;
        if (enemy == "C") total += 1;
        break;

      default:
        break;
    }
    return acc + total;
  }, 0);
  return points;
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
