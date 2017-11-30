$(document).ready(function()
{

  var Controller = function(die, view)
  {
    this.view = view//hace todo lo grafico como mostrar el dado, cambiar el valor, etc
    this.die = die //planto los eventos para que los escuche y puedan funcionar por ejp los botones
  }

  Controller.prototype =
  {
    addListeners: function()
    {
      //estos son los eventos que se plantan, y estan esperando a que el usuario les de clic o el evento que queramos dar
    $('#roller button.add').on('click', this.view.paintDice)//esto hace que se ejecute la linea de codigo que pinta el dado la cual esta en paintDice, no se coloca el paintDice() porque llamaria un undefine
    $('#roller button.roll').on('click', this.rollAllDices.bind(this))
//esto hace que se agregue un nuevo valor al dado y modifique la vista, llamando a paintDieValue
    }
  }

  Coontroller.prototype.rollAllDices = function()
  {
    var controller = this//esto quema el this para que no sea el nodo
    var dices = this.view.getAllDicesFromDom()
    dices.forEach(function(dice){
      this.die.roll()
      this.view.paintDieValue(dice, this.die.value)}.bind(this))
    }

  }


  var View = function(){}

  View.prototype = {
    paintDice: function()
    {
      $('.dice').append('<div class="die">0</div>')
    },
    paintDieValue: function(dieHtml, newValue)
    {
      $(dieHtml).text(newValue)//esto evuelve el div de html y le cambia el valor
    },

  }

  var Die = function(sides)
  {
      this.sides = sides
      this.value = 1
  }

  Die.prototype.roll = function()
  {
    this.value = Math.floor((Math.random()* this.sides)+1)
  }



  var die = new Die(16)
  var view = new View()
  var controller = new Controller(view, die)
  controller.addListeners()

})





// Event Listener
// $('#roller button.add').on('click', function() { // Controlador
//   $('.dice').append('<div class="die">0</div>') // Vista
// })
//
// // Event listener
// $('#roller button.roll').on('click', function() { // Controlador
//   $('.die').each(function(index, dieHtml) { // Controlador
//     var value = Math.floor((Math.random()*6)+1) // Model
//     $(dieHtml).text(value) // Vista
//   })
// })
