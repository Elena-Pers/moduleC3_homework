const person = {
 city: "Moscow",
 country: "Russia"
}

// создаем объект с прототипом
const student = Object.create(person);

// добавляем собственное свойство объекту student
student.ownCity = "Piter";
student.name = "Ivan";


//функция проверки свойств с заданным именем
function checkProp (str, obj) {
  return (str in obj);
  
}

console.log(checkProp('age', student)); //выведет false
console.log(checkProp('name', student)); //выведет true
