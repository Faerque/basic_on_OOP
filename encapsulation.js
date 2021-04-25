class Tiger {
  #speed = 100;
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log(`I am ${this.name}. I am running at ${this.speed}mph`);
  }
}
const royal = new Tiger("Royal Bangal");
royal.name = "Poromanobig Bangal";
royal.run();
