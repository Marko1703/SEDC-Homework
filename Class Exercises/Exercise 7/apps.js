console.log("It's working");

function generateNumArray(num) {
    const arr = [];

    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }

    return arr;
}

const numbers = generateNumArray(500);

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
      numbers[i] *= 10; 
    }
  }

console.log(numbers);