let arr =[
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
                    "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
                    "age": 20
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
                    "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
                    "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
                    "age": 70
    },
            {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
                    "age": 45
    }
]


// Задача 1
let fullName = arr.map(user => ({
    fName : `${user.first_name} ${user.last_name}`
}));

let nameString =  fullName.map(users => `${Object.values(users)}`).join(", ")
console.log(nameString);

// Задача 2
let getAge = {
    average: arr.reduce((aver, user) => aver + user.age, 0) / arr.length, 
    under30: arr.filter((a, b) => a.age > 30 ? 1 : 0).length,
    under40: arr.filter((a, b) => a.age > 40 ? 1 : 0).length,
    under18: arr.filter((a, b) => a.age > 18 ? 1 : 0).length,
}

console.log(getAge);


// Задача 3


// Задача 4
let emailsArr = arr.filter((a) => a.email ).length
console.log(emailsArr);
