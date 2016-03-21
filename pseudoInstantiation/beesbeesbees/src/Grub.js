/*
.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/

var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {
  this.eat = function() {
    console.log('eatting ' + this.food + '! Yummy');
    // this.food = null;
  }
}


