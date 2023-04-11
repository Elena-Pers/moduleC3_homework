const person = {

 city: "Moscow",
 country: "Russia"

}

// создаем объект с прототипом

const student = Object.create(person);

// добавляем собственное свойство объекту student

student.ownCity = "Piter";
student.name = "Ivan";

//функция вывода собственных свойств
function printProper (obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(`Property ${prop} is ${obj[prop]}`);
    }
  }
}

printProper(student); //выведет "Property ownCity is Piter" 
                      //выведет "Property name is Ivan"

