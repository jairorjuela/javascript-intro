var createTree = function() {
  return {
    age: 0,
    height: 0,
    orangeCount: 0,
    grow: function(){
      this.age += 1,
      this.height  += 10
      if(this.age === FRUIT_BEARING_AGE) {
        this.orangeCount = Math.floor(Math.random()*15 + 1)
        
      }
      this.die()
    },
    dropOrange: function(){

    },
    die: function(){
      if(this.age <= MAX_AGE){
        this.isAlive = true
      }
      else{
        this.isAlive = false
      }
    },
  }
}


var FRUIT_BEARING_AGE = 8;
var MAX_AGE = 35;






// this.orangeCount = Math.floor((Math.random() * 10) + 1)
  // var orangesIn = Math.floor(Math.random()*15 + 1),
