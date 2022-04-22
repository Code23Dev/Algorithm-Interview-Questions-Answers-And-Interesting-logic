//Question=>Find a duplicate number in an array of integers

const names = ['k2', 'm4', 'k2', 'g4', 'm5', 'k2', 'm5'];
const count = names =>
  names.reduce((result, value) => ({ ...result,
    [value]: (result[value] || 0) + 1
  }), {}); // don't forget to initialize the accumulator
const duplicates = dict =>
  Object.keys(dict).filter((a) => dict[a] > 1);

console.log(count(names)); // {k2: 3, m4: 1, g4: 1, m5: 2}
console.log(duplicates(count(names))); // ['k2', 'm5']

/*
  This question is most popular. We often use in logic.
*/