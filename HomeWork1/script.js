let arr = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    age: 23,
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    age: 20,
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    age: 40,
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    age: 36,
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    age: 70,
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    age: 45,
  },
];

// Задача 1
let fullName = arr.map((user) => ({
  fName: `${user.first_name} ${user.last_name}`,
}));
let nameString = fullName.map((users) => `${Object.values(users)}`).join(", ");
console.log(nameString);

//!!Доп. Решение
/* const users1 = users
  .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
  .join(", "); */

// Задача 2
let getAge = {
  average: arr.reduce((aver, user) => aver + user.age, 0) / arr.length,
  under30: arr.filter((a, b) => a.age > 30).length,
  under40: arr.filter((a, b) => a.age > 40).length,
  under18: arr.filter((a, b) => a.age > 18).length,
};
console.log(getAge);

//!!Доп. Решение
/* const users2 = users.reduce(
  ({ averageAge, olderThen30, olderThen40, olderThen18 }, { age }, index) => {
    const { length: userLength } = users;
    const isLastUser = index + 1 === userLength;

    return {
      averageAge: isLastUser
        ? (averageAge + age) / userLength
        : averageAge + age,
      olderThen30: age > 30 ? olderThen30 + 1 : olderThen30,
      olderThen40: age > 40 ? olderThen40 + 1 : olderThen40,
      olderThen18: age > 18 ? olderThen18 + 1 : olderThen18,
    };
  },
  {
    averageAge: 0,
    olderThen30: 0,
    olderThen40: 0,
    olderThen18: 0,
  }
); */

// Задача 3
let idName = arr.map((user) => ({
  uId: user.id,
  uName: `${user.first_name} ${user.last_name}`,
}));
console.log(idName);

//!!Доп. Решение
/* const users3 = users.map(({ id, first_name, last_name }) => ({
  id,
  name: `${first_name} ${last_name}`,
})); */

// Задача 4
let emailsArr = arr
  .map((mails) => mails.email)
  .sort((a, b) => (a > b ? 1 : -1));
console.log(emailsArr);

//!!Доп. Решение
/* const users4 = users.map(({ email }) => email).sort(); */

// Задача 5
let youngAge = arr
  .filter((user) => user.age < 40)
  .sort((a, b) => (a.age > b.age ? 1 : -1));
console.log(youngAge);

//!!Доп. Решение
/* const users5 = users
  .filter((user) => user.age < 40)
  .sort((a, b) => a.age - b.age); */

// Задача 6
const transformObj = arr.reduce((acc, { last_name }) => {
  const key = last_name[0].toLowerCase();
  if (acc.hasOwnProperty(key))
    return { ...acc, [key]: [...acc[key], last_name] };
  return { ...acc, [key]: [last_name] };
}, {});
console.log(transformObj);

//!!Доп. Решение
/* const users6 = users.reduce((acc, { last_name }) => {
  const firstLetterLastName = last_name[0].toLowerCase();

  if (acc.hasOwnProperty(firstLetterLastName)) {
    return {
      ...acc,
      [firstLetterLastName]: [...acc[firstLetterLastName], last_name],
    };
  }
  return { ...acc, [firstLetterLastName]: [last_name] };
}, {}); */
