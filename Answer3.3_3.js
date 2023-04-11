const person = {
 city: "Moscow",
 country: "Russia"
}

// создаем объект с прототипом
const student = Object.create(person);

// добавляем собственное свойство объекту student
student.ownCity = "Piter";
student.name = "Ivan";


function createObj() {
  return Object.create(null);
}

console.log(createObj());   //выведет[object Object] { ... }
