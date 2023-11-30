// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;

// Start coding here

console.log(minNumber);

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < numbers[0]) {
    minNumber = numbers[i];
  }
}

console.log(minNumber);
