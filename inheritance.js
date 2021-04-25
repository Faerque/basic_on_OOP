class SmartDevice {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  charging() {
    console.log("I am eating electrons");
  }
}

class Phone extends SmartDevice {
  constructor(name, price, camera) {
    super(name, price);
    this.camera = camera;
  }
  sendSms() {
    console.log("I am sending text");
  }
}

class Watch extends SmartDevice {
  constructor(name, price, distance) {
    super(name, price);
    this.distance = distance;
  }
}

class Tablet extends SmartDevice {
  constructor(name, price, WiFi) {
    super(name, price);
    this.WiFi = WiFi;
  }
}

const samsung = new Phone("Samsung", 60000, "32mp");
samsung.charging();
samsung.sendSms();
console.log(samsung);

const appleWatch = new Watch("Watch 6", 32000, "15km");
appleWatch.charging();
console.log(appleWatch);

const iPad = new Tablet("iPad Pro", "70000", true);
iPad.charging();
console.log(iPad);
