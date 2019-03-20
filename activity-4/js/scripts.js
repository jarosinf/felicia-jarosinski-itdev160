//create instances of the variables
var user;
var salutation;
var message = ': This is the Top Performer in the Industry!';
//concatenate variables for greeting
var greeting = user + salutation + message;

//Get element of id 'greeting'
var el = document.getElementById('greeting');
//personalized greeting with loaded info
el.textContent= greeting;

//create instances for pricing differential
var price = 20;
studentDiscount = .10;
studentPrice = price - (price * studentDiscount);

//Get element of id 'price' and update contents
var elPrice = document.getElementById('price');
elPrice.textContent = price;
//Get element of id 'studentPrice' and update contents
var elStudentPrice = document.getElementById('studentPrice');
elStudentPrice.textContent = studentPrice;
