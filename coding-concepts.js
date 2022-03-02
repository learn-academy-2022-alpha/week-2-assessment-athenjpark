// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
console.log(cohort.split(""))

// a) Your answer: ["A", "l", "p", "h", "a", " ", "2", "0", "2", "2"]
// b) Verify and explain: The .split() built-in method is a method that takes a string and converts it into an array. However, it is imporant to note that the string can be split up in different ways. In order to split up the string in a specific way, you would have to modify the placement of the quotation marks within the .split() parentheses. If there is no space between the quotation marks, the result would be an array with each letter having its own index. However, if one were to put a space between the quotation marks, you would actually receive a different result which would be an array with each complete string having its own index (["Alpha", "2022"]). If there are no quotation marks whatsoever, the result would be just the entire string with its own index ["Alpha 2022"].


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: I guessed that 'undefined' would be the output on the terminal. The reason is because there is no return statement to be found anywhere within the function greeter. Whenever a function is present, there must always be a return statement.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The array containing the values [8, 10, 12, 14, 16] would be the output on the terminal because the .map() method is a higher order function that works on arrays, iterates over the array, and always returns a separate array of the same length. Since the value argument is returning back value * 2, that means the new array will contain values of the original array all multiplied by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The array containing the values [11, 13, 15] would be the output on the terminal because the .filter() method is a higher order function that works on arrays, iterates over the array, and always returns a separate array that is shorter than the original array which is the difference between .filter() and .map().  The value argument is returning back value % 2 !== 0 which essentially translate to "return only the values where the remainder of that specific value divided by two does not equal to 0". As the variable name suggests, we are looking to filter only the odd values within the array which is why the output is [11, 13, 15].


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: myCodingSkills is an example of an object with is essentially collections of key:values pairs. In the example above, the keys are languages, frameworks, databases, and versionControl and the values are ["JavaScript", "Ruby"], ["React", "Ruby on Rails"], "PostgreSQL", and "GitHub". The console.log statement is trying to access the value from the object with dot notation by calling the name of the variable and key. Since the value for languages is an array (["JavaScript", "Ruby"]) followed by an index of [0], the console.log statement would output the first element within the languages key which is JavaScript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn {student: "George", cohort: "Alpha", year: 2022}
// b) Verify and explain: Learn is an example of a class which is defined as the blueprints for objects. The constructor argument in the example above takes in one argument, name. Lines 65 and 66 are hard-coded to be "Alpha" and 2022 respectively but this.student will be assigned to the name that is passed as the argument. Line 69 is creating an object by the name of learnStudnet which now has access to the class Learn. Since the argument of "George" is passed, the console.log would output the student's name "George", followed by the cohort "Alpha" and the year "2022". 
