/*
.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/

import Bee from './Bee'

class ForagerBee extends Bee {
  // TODO..
  constructor() {
    // super();
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
  }
  forage() {
    return this.treasureChest.push('treasure');
  }
};
var b = new ForagerBee();
console.log(b.forage(), b.treasureChest);
export default ForagerBee;