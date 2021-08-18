const arrayFood = [
  {
    id: 1,
    name: "Биг Тейсти",
    price: 6,
    currency: "euro",
    ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
    type: "burger",
    available: true,
  },
  {
    id: 2,
    name: "Тройной чизбургер",
    price: 2.3,
    currency: "usd",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    available: true,
  },
  {
    id: 3,
    name: "Чизбургер",
    price: 1,
    currency: "euro",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    available: true,
  },
  {
    id: 4,
    name: "Картофель фри",
    price: 2,
    currency: "usd",
    ingredients: ["potato"],
    type: "snack",
    available: true,
  },
  {
    id: 5,
    name: "Картофель по-деревенски",
    price: 2,
    currency: "usd",
    ingredients: ["potato"],
    type: "snack",
    available: false,
  },
  {
    id: 6,
    name: "Чикен МакНаггетс™",
    price: 5,
    currency: "euro",
    ingredients: ["chicken"],
    type: "chicken",
    available: true,
  },
  {
    id: 7,
    name: "Стрипсы",
    price: 2.6,
    currency: "euro",
    ingredients: ["chicken"],
    type: "chicken",
    available: false,
  },
  {
    id: 8,
    name: "МакЧикен",
    price: 4.3,
    currency: "euro",
    ingredients: ["chicken", "flour", "cheese", "sauce"],
    type: "burger",
    available: false,
  },
];

//?? Task 1
//Собрать в массив ингредиентов (без повторения).

const ingredients = arrayFood
  .map((food) => food.ingredients)
  .join(",")
  .split(",");
const ingridResult = Array.from(new Set(ingredients));

console.log(ingridResult);

//?? Task 2
//Создать функцию, которая принимает массив продуктов и id, и возвращает продукт с таким же id.

const filterById = (arrayFood, id) =>
  arrayFood.filter((product) => product.id === id);

console.log(...filterById(arrayFood, 2));

//?? Task 3
//Создать массив с отсортированными продуктами по цене.

const showPrice = arrayFood.sort((big, small) => big.price - small.price);
console.log(showPrice);

//!! Task 4
//Сгруппировать продукты по типам. Создать объект, где ключ это тип, а значение - массив с продуктами.
/* const typeOfFood = arrayFood.reduce((acc, { last_name }) => {
    const key = last_name[0].toLowerCase()
    if (acc.hasOwnProperty(key)) return { ...acc, [key]: [...acc[key], last_name], }
    return { ...acc, [key]: [last_name] }
}, {})
console.log(transformObj); */

//?? Task 5
//Создать массив с продуктами, которые доступны.

const getArrayFood = (arrayFood) => {
  return arrayFood.reduce((names, food) => {
    if (food.available) {
      names.push(food.name);
    }
    return names;
  }, []);
};
console.log(getArrayFood(arrayFood));

//?? Task 6
// Создать функцию, которая принимает массив продуктов и строку = название ингредиента,
//и возвращает массив с продуктами, где содержится такой ингредиент.

const giveIngredient = (arr, str) =>
  arrayFood.filter((item) => item.ingredients.includes(str));
console.log(giveIngredient(arrayFood, "chicken"));

/* function giveProducts (arr, str) {
	const someProducts = arrayFood.filter( item => item.ingredients.includes(str) )
	return someProducts
}
console.log(giveProducts(arrayFood, "chicken")); */

//!! Task 7
//Создать функцию, которая принимает массив продуктов и массив ингредиентов,
// и возвращает массив с продуктами, где содержатся такие ингредиенты.

//?? Task 8
//Создать функцию, которая принимает массив продуктов и цену, и возвращает массив продуктов,
//где цена продукта ниже или равна цене из второго аргумента функции.

const showProductPrice = (arr, num) =>
  arrayFood.filter((item) => item.price <= num);
console.log(showProductPrice(arrayFood, 2));

//!! Task 9
//Создать функцию, которая принимает массив продуктов и массив айдишников,
// и возвращает строку, где строка включает в себя название продуктов и их цену через запятую, у которых айдишники совпадают.
//Например: `"Биг Тейсти: цена 4€, Картофель по-деревенски: 2$"`

//!! Task 10
// Создать функцию, которая принимает массив продуктов и массив айдишников,
// и возвращает объект, c общими суммами цен продуктов(у которых айдишники совпадают) по каждой валюте.
//  Например: `{ euro: 20, usd: 6}`

//!! Task 11
//Создать функцию, которая принимает массив продуктов и массив айдишников,
//и строку, где число равно сумме цен продуктов + значок валюты.
//При этом если, у нас попадают продукты с разными валютами,
//то мы должны получить сумму в евро и перевести доллары в евро(использовать для этого курс евро/доллар).
