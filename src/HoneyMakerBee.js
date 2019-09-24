// [X] Create a HoneyMakerBee class, in ES6 style, with:
// [X] the Bee superclass
// [X] an age property that is set to 10
// [X] a job property that is set to make honey
// [X] a color property inherited from bee that is set to yellow
// [X] a food property that is inherited from grub
// [X] an eat method that is inherited from grub
// [X] a honeyPot property that is set to 0
// [X] a makeHoney method that adds 1 to that honeyBee’s honeyPot
// [X] a giveHoney method that subtracts 1 from that honeyBee’s honeyPot
class HoneyMakerBee extends Bee {
  constructor(){
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney(){
    this.honeyPot++;
  }
  giveHoney(){
    this.honeyPot--;
  }
}
window.HoneyMakerBee = HoneyMakerBee;
