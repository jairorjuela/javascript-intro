// OOP En Javascript


//------------------------------------------------------------------------------------------------------------------
// TU CODIGO: Crea un Objeto literal "garden", y funcion constuctora y prototipos para Flower aca.
//------------------------------------------------------------------------------------------------------------------
var Flower = function(name, color)
{
  this.name = name
  this.color = color

}

var garden =
{
  plant: function(flowers)
  {
    this.flowers = flowers
  },
  name: "Kula Botanical Garden",
  location: "Makawao",
  selectByColor: function(color)
  {
    return this.flowers.filter(function(flower)
    {
      return color === flower.color
    })
  },
  selectByName: function(name)
  {
    return this.flowers.filter(function(flower)
    {
      return name === flower.name
    })
  },
}

Flower.prototype.identify = function(){
  return `I am an ${this.name} and I am ${this.color}.`
}





//------------------------------------------------------------------------------------------------------------------
// PRUEBAS: **NO** Cambies nada debajo de esta linea. Tu trabajo es implementar el codigo arriba para hacer que estas pruebas pasen.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var flowers = [
  new Flower("Aster", "red"),
  new Flower("Bird of Paradise", "orange"),
  new Flower("Daffodil", "yellow"),
  new Flower("Gladiolus", "pink"),
  new Flower("Iris", "purple"),
  new Flower("Narcissus", "white"),
  new Flower("Chrysanthemum", "yellow"),
];

garden.plant(flowers);


assert(
  garden.name === "Kula Botanical Garden", "the garden has a name"
);
assert(
  garden.location === "Makawao", "the garden is located in Maui"
);
assert(
  garden.selectByColor("yellow").length === 2, "the garden should have 2 yellow flowers"
);
assert(
  garden.selectByName("Iris").length === 1, "the garden should have 1 Iris"
);
assert(
  flowers[0].identify() === "I am an Aster and I am red.", "asters are red"
);
assert(
  flowers[2].name === "Daffodil", "expected 'Daffodil'"
);
assert(
  flowers[0].identify === flowers[5].identify, "only one implementation of the identify() function should exist"
);

console.log("Terminaste todo funciona");
