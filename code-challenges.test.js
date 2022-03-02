// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

// a describe method that lists the name of the function OR naming of the particular test.
describe("divisibleByThree", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns a string that says whether or not the number is divisible by 3.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(divisibleByThree(15)).toEqual("15 is divisible by three")
    expect(divisibleByThree(0)).toEqual("0 is divisible by three")
    expect(divisibleByThree(-7)).toEqual("-7 is not divisible by three")
  })
})

// Running this test has failed which is what we are looking for.
// ReferenceError: divisiblebyThree is not defined

// b) Create the function that makes the test pass.

// Create a function with the name of divisibleByThree that will take in one parameter, num.
// Write an if/else conditional statement within the function that checks whehter or not the argument is a number that is divisible by three.
// The notation to write this out would be utilizing the modulo operator since the modulo operator returns the remainder after dividing two values. If the entered parameter modulo three is strictly equal to 0, that means that num is divisible by three. Otherwise, the number is not divisible by three.
// Return the appropriate string using string interpolation to let the user know that the entered argument is divislbe by three.

const divisibleByThree = (num) => {
  if(num % 3 === 0){
    return `${num} is divisible by three`
  } else {
    return `${num} is not divisible by three`
  }
}

// The test passed (green) :)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// a describe method that lists the name of the function OR naming of the particular test.
describe("arrayCapitalizer", () => {
  const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns an array with all the words capitalized.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(arrayCapitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(arrayCapitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// Running this test has failed which is what we're looking for.
// ReferenceError: arrayCapitalizer is not defined
// b) Create the function that makes the test pass.

// Create a function with the name arrayCapitalizer that will take in one parameter, array.
// Set a variable within the function called capitalizedArray and assign it to an empty array. The reason I am assigning this variable to an empty array is because I am planning on utilizing the built-in .push() method to push the new capitalized words into this empty array and returning that variable at the very end.
// In order to go through each element within the array, set up a for loop with the correct starting condition (i=0), ending condition (i< array.length) and a how to respond (i++).
// Within the code block of the for loop, implement the .push() method and within the parentheses of .push(), write a line of code that will make it so that the first letter of each string within the array is capitalized.
// It is important to note that if one were to only write a line of code with just .toUpperCase(), the function would return a string where all of the letters within the string are capitalized which is not our goal. We only want the first letter of each string to be capitalized.
// Taking this into consideration, we will have to use a combination of the charAt() method and the toUpperCase() method. The charAt() will take in the 0th index as its parameter since that will correspond to only the first letter of the string which will be followed up by .toUpperCase() which will capitalize only that first letter.
// After writing that line of code, we will have to add the rest of the string to the capitalized letter so in order to accomplish this, I will concat the rest of the string by using the .slice() built-in method. This method will take in the 1st index as its parameter, since the 1st index will always correspond to the second letter of the string and the slice method will make it so that if it is only taking one parameter, it will include the rest of the string.
// Final step is to just return the variable capitalizedArray which should make it so that our test passes.

const arrayCapitalizer = (array) => {
  let capitalizedArray = []
  for(let i = 0; i<array.length; i++){
    capitalizedArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
  }
  return capitalizedArray
}

// The test passed (green) :)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// Expected output: 1
// const vowelTester2 = "academy"
// Expected output: 0
// const vowelTester3 = "challenges"
// Expected output: 2

// a describe method that lists the name of the function OR naming of the particular test.
describe("vowelIndexFinder", () => {
  const vowelTester1 = "learn"
  const vowelTester2 = "academy"
  const vowelTester3 = "challenges"
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("logs the index of the first vowel.", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(vowelIndexFinder(vowelTester1)).toEqual(1)
    expect(vowelIndexFinder(vowelTester2)).toEqual(0)
    expect(vowelIndexFinder(vowelTester3)).toEqual(2)
  })
})

// Running this test has failed which is what we're looking for.
// ReferenceError: vowelIndexFinder is not defined

// b) Create the function that makes the test pass.

// Create a function called vowelIndexFinder that will take in one parameter, string.
// Within the function, set a variable called splitString and assign it to string.split(""). The reasoning for this is because the goal of this function is to return the index of the first vowel of a string. The .split() built-in method will make it so that the passed string argument will be converted into an array with each letter of theh string havin its own index. It is important to note that within the parentheses of .split(), quotations marks with no space in between must be included which will make it so that each letter of the string has its own index.
// Now, create a for loop that will loop through the variable splitString. The starting condition should be i=0, ending condition i<splitString.length, and how to respond i++.
// Within the for loop, write a conditional statement stating that if the value of the splitString at index i is strictly equal to a vowel (a, e, i, o, or u), then return the index i since the expected output of the function is the index at which the first vowel appears.

const vowelIndexFinder = (string) => {
  let splitString = string.split("")
  for(let i = 0; i<splitString.length; i++){
    if(splitString[i] === "a" || splitString[i] === "e" || splitString[i] === "i" || splitString[i] === "o" || splitString[i] === "u"){
      return i
    }
  }
}

// The test passed (green) :)
