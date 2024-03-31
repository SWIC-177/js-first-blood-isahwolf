<<<<<<< HEAD
const people = [
    {
      name: "John",
      age: 17,
    },
    {
      name: "Jane",
      age: 20,
    },
    {
      name: "Mary",
      age: 25,
    },
    {
      name: "Peter",
      age: 30,
    },
    {
      name: "Paul",
      age: 35,
    },
  ];
  
  
  function verifyAdulthood(personName, personAge) {
    if (personAge >= 18) return `Welcome, ${personName}!`;
  
    return `You are not old enough to enter, ${personName}.`;
  }
  
  for (let person of people) 
  {
    const adultMessage = verifyAdulthood(person.name, person.age);
    console.log(adultMessage);
  }
=======
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
>>>>>>> 2fe609365c29c8368eb3ab198f65c6345a403d42
