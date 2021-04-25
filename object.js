class Hero {
  constructor(Name, power) {
    this.name = Name;
    this.power = power;
  }
  getPower() {
    if (this.power) {
      return this.power;
    }
    return "I have no power";
  }
  goForGrocery(budget) {
    if (this.power && budget > 1000) {
      console.log(this.getPower());
    }
    return "Price is too high, I cant buy";
  }
}

const batman = new Hero("Batman", "Deep Khamsi");

console.log(batman.goForGrocery(570));
