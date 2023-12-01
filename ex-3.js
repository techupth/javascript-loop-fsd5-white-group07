// Exercise #3: Find a Minimum Number
let numbers = [10, 100, 20, 3, 1000];
let minNumber;
let maxNumber;
// Start coding here
for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
        minNumber = numbers[i]
        maxNumber = numbers[i]
    }  else{
        if (minNumber > numbers[i]){
            minNumber = numbers[i]
        } else if (maxNumber < numbers[i]){
            maxNumber = numbers[i]
        }
}
}
//   if (maxNumber < numbers[i]) {
//     maxNumber = numbers[i];
//   } else if (minNumber > numbers[i]){
//     minNumber = numbers[i]
//   }
  // if (numbers[i]< numbers[i+1])
  // minNumber = numbers[i]
  // else  (numbers[i]>numbers[i+1])
  // maxNumber = numbers[i]
console.log(minNumber);
console.log(maxNumber);
