/*
.
├── Grub
│   └── Bee
│       ├── HoneyMakerBee
│       └── ForagerBee
│          └── RetiredForagerBee
*/

import Grub from './Grub'

class Bee extends Grub {
  // TODO..
  constructor() {
    super();
    
    this.age = 5;
    this.color = 'yellow';
    this.job = 'keep on growing'
  }

};

var bee = new Bee();
console.log(bee.eat());

export default Bee;