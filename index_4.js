function Device(price, brand, power) {
  this.power = power;
  this.isOn = false;
  this.brand = brand;
  this.price = price;
}

Device.prototype = {
  toggle: function() {
    this.isOn = !this.isOn;
  },
  printPrice: function() {
    console.log(`The price of this device is ${this.price} dollars`);
  }
}

function Laptop(brand, cpu, power, price) {
  Device.call(this, price, brand, power);
  this.cpu = cpu;
}

function Lamp(brand, brightness, power, price) {
  Device.call(this, price, brand, power);
  this.brightness = brightness;
}

Laptop.prototype = new Device();
Lamp.prototype = new Device();

const devices = [
  new Laptop('Lenovo', 'AMD', 75, 900),
  new Lamp('Xiaomi', 520, 9, 100),
  new Laptop('Asus', 'Intel', 120, 1500),
  new Lamp('Philips', 700, 12, 200)
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
