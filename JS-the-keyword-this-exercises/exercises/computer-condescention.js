// var computer = {
//   name: 'HAL 9000',
//   owner: 'Dave',
//   condescend: function() {
//     console.log('Processing...');
//     setTimeout(function() {
//       console.log('I\'m sorry, ' + this.owner + ', I can\'t let you do that.');
//     }, 1000);
//   }
// };

// What would the following log? 
    // It will log 'Processing...' and after 1 second later it will load the message 
    // But this.owner will be undefined. 
// What binding pattern causes this?
    // pseudoclassical binding pattern causes this.


// How would we modify the .condescend method to achieve the expected output?

var Computer = function(name, owner) {
  this.name = name;
  this.owner = owner;
};


var computer = new Computer('JB_MacBook', 'Jin');

Computer.prototype.condescend = function() {
    console.log('Processing...');
    setTimeout(function() {
      console.log('I\'m sorry, ' + this.owner + ', I can\'t let you do that.');
    }, 1000);
};



console.log(computer.constructor);
computer.condescend();