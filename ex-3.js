// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber = numbers[0];

// Start coding here

console.log(minNumber);

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log(minNumber);
