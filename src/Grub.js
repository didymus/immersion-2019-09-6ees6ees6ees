// [X] Create a Grub class, in ES6 style, with:
// [X] an age property that is set to 0
// [X] a color property that is set to pink
// [X] a food property that is set to jelly
// [X] an eat method that returns 'Mmmmmmmmm jelly'
// 🐝
class Grub {
  constructor(){
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
  eat() {
    return 'Mmmmmmmmm jelly';
  }
}
window.Grub = Grub;
