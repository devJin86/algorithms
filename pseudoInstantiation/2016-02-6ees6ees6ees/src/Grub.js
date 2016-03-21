/*
.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/

class Grub {
  constructor () {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
  eat() {
    return 'Mmmmmmmmm' + this.food;
  }
};

var grub = new Grub();
console.log(grub.eat());

export default Grub;