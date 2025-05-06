//🏆 Code Question 1


/*
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name ); // Double Cheese Burger
*/

/*
// Code Question 2
const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad //secondo me verranno creati tre oggetti in memoria e per quanto riguarda l'array "ingredients" del secondburger verrà solo fatto riferimento in quanto si tratti di una shyallow copy.

*/


/*

//🏆 Code Question 3
const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 9 oggetti (3 hamburgher, ognuno con un maker che al suo interno conterrà i rispettivi 3 restaurant)

*/



//🏆 Code Question 4

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? una shallow copy in modo da poter lavorare anche sulla funzione, in quanto le deep copy non copiano funzioni.
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? una deep copy in modo da poter mantenere tale il tipo di dato della data (new Date), in quanto le shallow copy l'avrebbero resa una stringa.