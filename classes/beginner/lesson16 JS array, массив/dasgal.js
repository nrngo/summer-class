let numbers = [1, 2, 3, 4, 5];
let chars = ["a", "b", "c", "d", "e"];
let object_array = [{ name: "" }, { name: "" }, { name: "" }];
let boolean_array = [true, false, true, false];

// push , unshift

const lessons = [
  { name: "Математик", point: 100 },
  { name: "Англи хэл", point: 90 },
  { name: "Монгол хэл", point: 95 },
];
const english = lessons.find((element) => {
  return element.name === "Математик";
});

const numbers = [1, 2, 3, 4, 5];
numbers.slice(2, 5);

const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 6, 7, 8];
const numbers = [...numbers1, 4, 5, 6, ...numbers2];
