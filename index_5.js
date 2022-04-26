// Переписать консольное приложение из предыдущего юнита на классы.

class Device{
  constructor(brand, price, power) {
    this.price = price;
    this.brand = brand;
    this.power = power;
    this.isOn = false;
  }

  printPrice() {
    console.log(`The price of this device is ${this.price} dollars`);
  }

  toggle() {
    this.isOn = !this.isOn;
  }
}

class Laptop extends Device{
  constructor(brand, price, power, cpu) {
    super(brand, price, power);
    this.cpu = cpu;
  }
}

class Lamp extends Device{
  constructor(brand, price, power, brightness) {
    super(brand, price, power)
    this.brightness = brightness;
  }
}

const devices = [
  new Laptop('lenovo', 900, 75,'AMD'),
  new Lamp('Xiaomi', 100, 520, 9),
  new Laptop('Asus',1500, 120, 'Intel'),
  new Lamp('Philips', 200, 700, 12,)
];

console.log(devices);

devices[2].toggle();
devices[3].toggle();

console.log(devices);

let totalPower = 0;
for (let i = 0; i < devices.length; i++) {
  if (devices[i].isOn) {
    totalPower = totalPower + devices[i].power;
  }
}

console.log(totalPower);
