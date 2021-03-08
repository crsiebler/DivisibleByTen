const divisibleByTen = (x, y) => {
  return (x % 2 === 0 && y % 5 === 0) || (x % 5 === 0 && y % 2 === 0);
};

console.log(divisibleByTen(5, 12));
console.log(divisibleByTen(12, 5));
console.log(divisibleByTen(10, 20));
console.log(divisibleByTen(20, 10));
console.log(divisibleByTen(2, 10));
console.log(divisibleByTen(10, 2));
console.log(divisibleByTen(4, 15));
console.log(divisibleByTen(15, 4));

console.log(divisibleByTen(1, 2));
console.log(divisibleByTen(2, 1));
console.log(divisibleByTen(3, 5));
console.log(divisibleByTen(5, 3));
