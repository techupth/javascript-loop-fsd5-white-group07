// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";
let numbers = 1;

// Start coding here

for (let i = 0; i < companyName.length; i++) {
  console.log(`Number ${numbers++} character is ${companyName[i]}`);
}

// หรือใช้ for of loop

for (let i of companyName) {
  console.log(`Number ${numbers++} character is ${i}`);
}
