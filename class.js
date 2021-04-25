class PenDrive {
  constructor(capacity, color, price) {
    this.capacity = capacity;
    this.color = color;
    this.price = price;
  }
}
const ignite = new PenDrive("64GB", "White", 600);
console.log(ignite);

const oakWood = new PenDrive("32GB", "White");
console.log(oakWood);

class Mobile {
  constructor(specs, color, price) {
    this.specs = specs;
    this.color = color;
    this.price = price;
  }
}
const Iphone12ProMAx = new Mobile(
  "Screen: 6.5inch, Battery: 4500mAh, Ram: 6GB, Camera: Dual Camera",
  "Black",
  1300
);
console.log(Iphone12ProMAx);

function StickyNote(color, price) {
  this.color = color;
  this.price = price;
}
const yellow = new StickyNote("yellow", 40);
console.log(yellow);
