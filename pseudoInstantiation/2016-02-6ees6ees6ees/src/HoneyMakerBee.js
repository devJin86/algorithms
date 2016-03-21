/*
.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/

import Bee from './Bee'

class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {
    // super();

    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    return this.honeyPot++;
  }
  giveHoney() {
    return this.honeyPot--;
  }
};

var a = new HoneyMakerBee();
console.log(a.makeHoney());
console.log(a.honeyPot);

export default HoneyMakerBee;