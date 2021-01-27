//////////////////////////////
// Task 2 - Classes

const salad = [
    {
        "ingredient": "strawberries",
        "price": 1.50
    },
    {
        "ingredient": "banana",
        "price": 0.50
    },
    {
        "ingredient": "mango",
        "price": 2.50
    },
    {
        "ingredient": "apple",
        "price": 1.50
    },
    {
        "ingredient": "strawberries",
        "price": 1.25
    },
    {
        "ingredient": "blueberries",
        "price": 3.00
    }
];


class FruitSalad {

    constructor(ingredients) {
        this.ingredients = ingredients;
    }

    getCost() {
        // calculates the total cost of the ingredients used
        let total = 0;
        salad.forEach((i, index) => { 
            if (this.ingredients.includes(i.ingredient)) {
            //     console.log(index)
                total += salad[index].price 
        }});
        // console.log(total);
        return total;
    }

    getPrice() {
        // returns the number from GetCost plus the number from GetCost multiplied by 1.5. Round to two decimal places
        const price = this.getCost();
        const multipliedPrice = price * 1.5;
        const multipliedPriceRounded = multipliedPrice.toFixed(2);
        return `${price}, ${multipliedPrice}, ${multipliedPriceRounded}`;
    }

    getName() {
        // gets the ingredients and puts them in alphabetical order into a nice output
        const fruits = salad.map((element) => {
            return element.ingredient;
        });
        return fruits.sort();
    }
}

const fruitSalad = new FruitSalad(['strawberries', 'banana', 'mango', 'apple', 'blueberries']);

console.log(`Task 2: The total cost of the salad is: ${fruitSalad.getCost()}`);

console.log(`Task 2: The number from GetCost plus the number from GetCost multiplied by 1.5. Round to two decimal places: ${fruitSalad.getPrice()}`);
console.log(`Task 2: The ingredients in alphabetical order: ${fruitSalad.getName()}`);

//////////////////////////////
// Task 3 - Array

// Read and count all rows in ./data.json. Visualize the result
fetch('data.json')
  .then(response => response.json()) 
  .then(data => {
    const allRows = data.length;
    console.log(`Task 3: The given json file contains ${allRows} rows`);
  })
  .catch(error => console.log(error));

//////////////////////////////
// Task 4 - Loops

// Create a function calculateWordLength(word: string) that calculates the word length by using a loop. Do not use built in length accessors.

function calculateWordLength(word) {
    let length = 0
    for (letter of word) {
      length += 1
    }
    console.log(length);
    return length;
};

// check different words below
const word = 'example';

console.log(`Task 4: The word '${word}' contains ${calculateWordLength(word)} letters`);

// Create a function findLargestNum(numbers: number[]) that returns the largest number in the given array.

function findLargestNum(numbers) {
    console.log(Math.max(...numbers));
    return Math.max(...numbers);
};

// check different numbers below
const arrayOfNumbers = [12, 54, 29, 5];

console.log(`Task 4: The largest number in the array is ${findLargestNum(arrayOfNumbers)}`);

// Create a function countOccurrences(occurrenceToFind: string, textToSearch: string).
// Example: countOccurrences("airy", "Harry is a hairy fairy") // ➞ 2
  
function countOccurences(occurenceToFind, textToSearch) {
    const regEx = new RegExp(occurenceToFind, 'g');
    console.log(textToSearch.match(regEx).length);
    return textToSearch.match(regEx).length;
};
const occurenceToFind = "airy";
const textToSearch = "Harry is a hairy fairy";
console.log(`Task 4: The occurrence ${occurenceToFind} appears ${countOccurences(occurenceToFind, textToSearch)} times in the given text`);