type TUsers = {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: TUsers[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]
// 1. Создать строку из имен пользователей через запятую
const getStrName = (arr: TUsers[]): string =>
    arr.map(user => user.name).join(',');
console.log(getStrName);

// 2. Подсчитать общее количество машин у пользователей
const countOfCars = (users: TUsers[]): number =>
    // arr.map(user => user.cars);
    users.filter((cars => cars).length);

// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования
const getFilterUsersOfAducation = (arr: TUsers[]): TUsers[] =>
    arr.filter(elem => elem.hasEducation);

// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных

const usersHasAnimals = (arr: TUsers[]): TUsers[] =>
    arr.filter(el => el.animals);

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую
const getArrayCars = (arr: TUsers[]): string =>
    arr.map(user => user.cars).join(',');