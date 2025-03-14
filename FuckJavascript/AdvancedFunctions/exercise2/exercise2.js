const multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 4));

const countPositive = (param) => {
  let positiveNum = 0;
  param.forEach((element) => {
    if (element >= 0) {
      positiveNum++;
    }
  });
  return positiveNum;
};
console.log(countPositive([1, 2, 3, -2, -3, 0]));

const addNum = (arr, num) => arr.map((value) => value * num);
console.log(addNum([1, 2, 3, 0, -4], 10));

let count = 0;
const removeEgg = (arr) =>
  arr.filter((value, index) => {
    if (value === "egg" && count < 2) {
      count++;
      return false;
    }
    return true;
  });
console.log(removeEgg(["egg", "apple", "egg", "pie", "egg", "burger"]));
