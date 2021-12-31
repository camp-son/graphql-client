export const people = [
  {
    id: 1,
    name: 'camp-son',
    age: 31,
    gender: 'male',
  },
  {
    id: 2,
    name: 'jys',
    age: 30,
    gender: 'male',
  },
  {
    id: 3,
    name: 'yjl',
    age: 29,
    gender: 'male',
  },
  {
    id: 4,
    name: 'bkk',
    age: 28,
    gender: 'male',
  },
  {
    id: 5,
    name: 'jwp',
    age: 27,
    gender: 'male',
  }
];

export const getById = id => {
  return people.filter((person) => person.id === id)[0];
};
