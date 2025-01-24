const sumNumbers = (array: number[]) => {
  return array.reduce((acc, value) => acc + value, 0);
};

export default sumNumbers;