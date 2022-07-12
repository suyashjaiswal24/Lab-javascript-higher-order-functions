//Function #1: Array Slice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

let modifiedFood = foods.slice(1,4)
console.log(modifiedFood);


//Function #2: Array Splice
foods.splice(2,0,'noodles','icecream');
console.log(foods)


//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];

function isEven(numberArray)
{
    let evenNumbers = numberArray.filter(e => e%2===0)
    return evenNumbers;
}

console.log(isEven(numberArray));

function isPrime(numberArray)
{
    let primes = numberArray.filter(e => {
        for (var i=2;i<=e;i++) 
        {
          return e%i!=0;
        }
    }); 
      return primes;
}

console.log(numberArray);


//Function #4: Reject
function nonPrime(numberArray)
{
    let nonprimes=numberArray.filter(function(number) {
        for (var i=2;i<=number;i++) 
        {
          return number%i==0;
        }
    }); 
      return nonprimes;
}
console.log(nonPrime(numberArray));



//Function #5: Lambda
function isEven1()
{
let evenNumbers=numberArray.filter(number=>number%2==0);
return evenNumbers;
}
console.log(isEven1(numberArray));


//Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray){
    let squares = myArray.map(e => e*e);
    return squares;
}
console.log(findSquareOfNumbers(myArray));


//Function #7: Reduce
const myArray1 = [2, 3, 5, 10];
function multiply(myArray1){
    let mult = myArray1.reduce((initial, num) => {
        return initial*num
    },1)
    return mult
}
console.log(multiply(myArray1));