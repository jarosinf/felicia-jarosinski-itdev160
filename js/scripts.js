var user;
var salutation;
var message = ', compare the selections below!';
var greeting = salutation + user + message;

var el = document.getElementById('greeting');
el.textContent = greeting;
document.write(greeting);

function displayDate()
{
  document.getElementById("time").innerHTML = Date ();

var data = [
  {
    Fruit: mango,
    growing: Zones 10b-11,
    recipe: mango salsa,
    selector:'p1'
  },
  {
    Veg: asparagus,
    growing: Zones 3-8,
    recipe: Lemon Asparagus Pasta,
    selector: 'p2'
  }
];
function writePackageInfo(package)
{
  var selector = package.selector,
  fruitEl = document.getElementById(selector + '-fruit'),
  vegEl = document.getElementById(selector + '-veg'),
  growEl = document.getElementById(selector + '-growingRegion'),
  recipeEl = document.getElementById(selector + '-description');

}
function Package(data)
{
  this.fruit = data.fruit;
  this.veg = data.veg;
  this.growing = data.growing;
  this.recipe = data.recipe;
}
function init()
{
  for (let i = 0; i<data.length; i++)
  {
    const package data[i];
    writePackageInfo(package);
  }
}
init();
