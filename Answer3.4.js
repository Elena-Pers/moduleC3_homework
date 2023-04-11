function ElectricalDevices(name, power) {
    this.name = name;
    this.power = power;
    this.turnOn = false;
}


// Прибор 1
function Kettle(name, brand, power, style) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.style = style;
    this.turnOn = false;
    // собственный метод, который выводит стиль Чайника
    this.getStyle = function(){
    console.log(`Style ${name} is ${style}`)
    }
 }

Kettle.prototype = new ElectricalDevices();

// Прибор 2
function Fridge(name, brand, power, type, size) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.size = size;
    this.turnOn = true;
    // собственный метод, который выводит размер Холодильника
    this.getSize = function(){
    console.log(`Size ${name} ${brand} is ${size} sm`)
    }
 }

Fridge.prototype = new ElectricalDevices();

//метод, который определяет прибор как включеный в розетку
ElectricalDevices.prototype.turnOnn = function() {
    console.log(this.name + " is turn on!");
    this.turnOn = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalDevices.prototype.turnOff = function() {
    console.log(this.name + " is turn off!");
    this.turnOn = false;
};

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
