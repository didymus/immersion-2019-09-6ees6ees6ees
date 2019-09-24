// [X] Create a ForagerBee class, in ES6 style, with:
// [X] the Bee superclass
// [X] an age property that is set to 10
// [X] a job property that is set to find pollen
// [X] a color property inherited from bee that is set to yellow
// [X] a food property that is inherited from grub
// [X] an eat method that is inherited from grub
// [X] a canFly property that is set true
// [X] a treasureChest property that is set to an empty array[]
// [X] a forage method that allows the bee to add a treasure to the treasureChest
class ForagerBee extends Bee{
  constructor(){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure){
    this.treasureChest.push(treasure);
  }
};
window.ForagerBee = ForagerBee;
