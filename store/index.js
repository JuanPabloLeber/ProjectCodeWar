export const state = () => ({
  katas: [
    {
      id: 1,
      title: "String repeat",
      difficulty: "8 Kyu",
      description:
        "Write a function called repeatStr which repeats the given string string exactly n times.",
      examples: ["[I,5] ==> IIIII"],
      tests: [
        {
          input: ["I", 5],
          output: "IIIII",
        },
        {
          input: ["Hello", 6],
          output: "HelloHelloHelloHelloHelloHello",
        },
        {
          input: ["#", 4],
          output: "####",
        },
        {
          input: ["*", 3],
          output: "***",
        },
        {
          input: ["ha ", 2],
          output: "ha ha ",
        },
      ],
    },
    {
      id: 2,
      title: "Convert a string to an array",
      difficulty: "8 Kyu",
      description:
        "Write a function to split a string and convert it into an array of words. For example:",
      examples: [
        "Robin Singh ==> [Robin, Singh]",
        "I love arrays they are my favorite ==> [I, love, arrays, they, are, my, favorite]",
      ],
      tests: [
        {
          input: ["Robin Singh"],
          output: ["Robin", "Singh"],
        },
        {
          input: ["I love arrays they are my favorite"],
          output: ["I", "love", "arrays", "they", "are", "my", "favorite"],
        },
      ],
    },
    {
      id: 3,
      title: "Max and min",
      difficulty: "8 Kyu",
      description:
        "Write a function called maxMin that finds the max and min numbers in an array of numbers, and return and array with both numbers",
      examples: ["[1, 2, 3] ==> [3, 1]", "[-2, 4, 0, 7, -1] ==> [7, -2]"],
      tests: [
        {
          input: [[1, 2, 3, 4, 5]],
          output: [5, 1],
        },
        {
          input: [[-2, 4, 0, 7, -1]],
          output: [7, -2],
        },
        {
          input: [[42, 54, 65, 87, 0]],
          output: [87, 0],
        },
      ],
    },
  ],
});

export const getters = {
  getKataById: (state) => (id) => {
    return state.katas.find((kata) => kata.id == id);
  },
};
