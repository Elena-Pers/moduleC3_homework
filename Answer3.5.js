class ElectricalDevices {
  constructor(name, power){
    this.name = name;
    this.power = power;
    this.turnOn = false;
  }
  // метод, который определяет прибор как включенный в розетку
  turnOnn() {
    console.log(this.name + " is turn on!");
    this.turnOn = true;
  }


  // метод, который определяет прибор как выключеный из розетки
  turnOff() {
    console.log(this.name + " is turn off!");
    this.isPlugged = false;
  }
}

// Прибор 1
class Kettle extends ElectricalDevices{
  constructor(name, brand, power, style){
    super(name, power);
    this.brand = brand;
    this.style = style;
    this.turnOn = false;
     }
    // собственный метод, который выводит стиль Чайника
    getStyle(){
    console.log(`Style ${this.name} is ${this.style}`)
    }
}

// Прибор 2
class Fridge extends ElectricalDevices{
  constructor(name, brand, power, type, size) {
    super(name, power);
    this.type = type;
    this.brand = brand;
    this.size = size;
    this.turnOn = true;
    }
    // собственный метод, который выводит размер Холодильника
    getSize(){
    console.log(`Size ${this.name} ${this.brand} is ${this.size} sm`);
    }
 }


// Создание экземпляра Чайник
const electricKettle = new Kettle("Electrical Kettle", "Bosch", 100, "minimalism");

// Создание экземпляра Холодильник
const electricFridge = new Fridge("Kitchen Fridge", "Miele", 350, "stationary", "120*60*60");


// Отключить холодильник из розетки
electricFridge.turnOff();
// Включить чайник в розетку
electricKettle.turnOnn();

// Вывести стиль чайника
electricKettle.getStyle()
// Вывести размер холодильника
electricFridge.getSize()



//Информация о приборах
console.log(electricKettle)
console.log(electricFridge)
