/*
.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/

import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor() {
    // super();

    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';

  }

  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    return this.treasureChest.push('treasure');
  }
  
};

var f = new RetiredForagerBee();
// console.log(a.treasureChest);
// console.log(f.gamble());
// console.log(f.eat());

export default RetiredForagerBee;