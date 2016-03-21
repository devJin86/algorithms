var eighthFloorCounselor = {
  name: 'Pamela',
  say: function(phrase) {
    console.log(this.name + ' says: ' + phrase);
  }
};

var sixthFloorCounselor = {
  name: 'Tara'
};

// What will the following log?
// What binding pattern causes this?
eighthFloorCounselor.say('Unicornado!');

// How would we modify this invocation of .say so that Tara 
// says 'Velociraptacular!' instead of Pamela?
eighthFloorCounselor.say('Velociraptacular!');
