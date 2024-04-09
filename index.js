const person = {
  name: "John Doe",
  age: 23,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};

// Create a new object with the same properties as the original object.
const otherPerson = { ...person };

otherPerson.name = "Jane Doe";

console.log(`Person's name is: ${person.name}`);
console.log(`Other Person's name is: ${otherPerson.name}`);

const people = [
  {
    id: 1,
    name: "John Doe",
    age: 23,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 29,
  },
  {
    id: 3,
    name: "Jim Doe",
    age: 34,
  },
  {
    id: 4,
    name: "Jill Doe",
    age: 45,
  },
  {
    id: 5,
    name: "Jack Doe",
    age: 56,
  },
  {
    id: 6,
    name: "Jenny Doe",
    age: 67,
  },
];

function renameOdds(p) {
  for (let i = 0; i < people.length; i += 1) {
    if (p[i].id % 2 !== 0) {
      people[i].name = "Odd Name";
    }
  }

  return p;
}

console.log(renameOdds(people));
