// [X] Create a Bee class, in ES6 style, with:
// [X] the Grub superclass
// [X] an age property that is set to 5
// [X] a color property that is set to yellow
// [X] a food property that is inherited from grub
// [X] an eat method that is inherited from grub
// [X] a job property that is set to Keep on growing
class Bee extends Grub {
  constructor(){
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}
window.Bee = Bee;
