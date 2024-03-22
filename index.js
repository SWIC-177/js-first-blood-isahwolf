const fullName = "Isaiah Wolf"; // string operator
const personAge = 19; // number operator

function verifyAdulthood(name, age) {
  // function with parameters
  if (age >= 18) {
    // if older than 18
    return `Welcome, ${name}!`;
  }

  return `You are not old enough to enter, ${name}.`;
}

console.log(verifyAdulthood(fullName, personAge));
