//🏆 Code Question 1


/*
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name ); // Double Cheese Burger
*/


// Code Question 2
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad //secondo me verranno creati due oggetti in memoria e per quanto riguarda l'array "ingredients" verrà solo fatto riferimentop in quanto si tratti di una shyallow copy.
console.log('hamburgher' ,hamburger)
console.log('secondBurger' ,secondBurger)