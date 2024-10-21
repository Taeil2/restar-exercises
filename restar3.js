// Q7. Please write a program to build a list containing the numbers from 1 to 100, except that multiples of 3 are replaced by "Fizz", the multiples of 5 are removed, and multiples of 15 are replaced by "FizzBuzz".
// The result should looks like:
// [1, 2, "Fizz", 4, "Fizz", 7, 8, "Fizz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, …]

const FizzBuzz = () => {
  const result = [];
  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz")
    } else if (i % 3 === 0 || i % 5 === 0) {
      result.push("Fizz")
    } else {
      result.push(i)
    }
  }

  return result
}

console.log(FizzBuzz())