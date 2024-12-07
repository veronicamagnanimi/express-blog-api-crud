//SNACK 1
function filterByLength (array, minLength) {
return array.filter(curItem => curItem.length >= minLength) } 

const words = ["apple", "cat", "banana", "dog"];
console.log(filterByLength(words, 4));

//SNACK 2
function sumAverage() {
    let sum = 0;
    for(let i = 0; i <= 10; i++) {
        sum += i;
    }
    let average = sum / 10;
    console.log("Somma:", sum)
    console.log("Media:", average)
}

sumAverage();
