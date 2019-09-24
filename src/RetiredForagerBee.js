// [X] Create a RetiredForagerBee class, in ES6 style, with:
// [X] the ForagerBee superclass
// [X] an age property that is set to 40
// [X] a job property that is set to gamble
// [X] a canFly property that is set to false
// [X] a color property that is set to grey
// [X] a forage method that returns I am too old, let me play cards instead
// [X] a food property that is inherited from grub
// [X] an eat method that is inherited from grub
// [X] a treasureChest property inherited from ForagerBee that is set to an empty array[]
// [X] an always winning gamble method that allows the bee to add a treasure to the treasureChest
class RetiredForagerBee extends ForagerBee{
  constructor(){
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage(){
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure){
this.treasureChest.push(treasure);
  }
}
window.RetiredForagerBee = RetiredForagerBee;
