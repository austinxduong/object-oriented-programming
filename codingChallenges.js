// import fetch from "node-fetch";

var module = module || {};
console.log("yummy")
// A place where I can practice/brainstorm through my coding challenges.
// Purpose: to demonstrate my thought process, and how I logic my reasoning.

// Finds the highest digit, when number is passed in as an input.
export function findsHighestDigit(number) {
	const convert = number.toString()
	const slicing = convert.split('')
	const captureHighestInt = Math.max(...slicing)
	
    return captureHighestInt;
}
// Test Cases:
console.log(findsHighestDigit(121293)) // 9
console.log(findsHighestDigit(3002003)) // 3

var myArray = ['a', 'b', 'c', 'd'];

let add = myArray.unshift('addToFirst');
let remove = myArray.pop()
let gain = myArray.push('gainedLast')

console.log(myArray)
console.log(remove, myArray)
console.log(gain, myArray)

// -------------------------------------------------------------------------

export function sortArrayByLength(arr) {
	let sunday = []
	
	for(let i = 0; i < arr.length; i++) {
		sunday.push(arr[i])
	}
	return sunday.sort((a, b) => {
		return a.length-b.length
	})
}
// Test case(s)
console.log(sortArrayByLength(['hello', 'austi', 'im', '!'])) // [ '!', 'im', 'hello', 'austi' ]

// ---------------------------------------------------------------------------

export function calculateDifference(obj, limit) {
	
	const total = 0
	
	let extract = Object.values(obj)
	
	let add = extract.reduce((previousVal, currentValue) => previousVal + currentValue, total)
	
	return Math.abs(add) - limit

}

// ---------------------------------------------------------------------------

export function sumOfCubes(nums) {
	let collect = []
	
	for (let i = 0; i < nums.length; i++) {
		let cubed = Math.pow(nums[i], 3)
		collect.push(cubed)
	}
	const final = collect.reduce((prev, curr) => prev + curr, 0)
	return final
}

// ---------------------------------------------------------------------------
//Number() method converts string to number
export function yummyPi(n) {
	let shiftDecimalPlaces = Math.PI.toFixed(n); // 

	return Number(shiftDecimalPlaces);
}

// ---------------------------------------------------------------------------
//Two Sum 
//Brute Force Method:
// O(N^2) => O(N) = Time Complexity
// O(1) => "Constant" = Space Complexity
export function twoSum(array, targetSum) {
	for ( let i = 0; i < array.length; i++){
		const firstValue = array[i];
		for (let j = i + 1; j < array.length; j++){
			const secondValue = array[j];
			 if (firstValue + secondValue === targetSum){
				  return [firstValue, secondValue];
			 }
		}
	}
}

// Optimized/Refactored: 
// O(N) = Time Complexity 
// 0(1) = Space Complexity 
export function twoNumberSumOptimized(array, targetSum) {
	// sorts all elements in the array in ascending order (small to large)
	const sorted = array.sort((a, b) => {return a-b})	
	// define our left and right pointers
	// define default state if no pairs are found at all = to empty array
	let leftPointer = 0
	let rightPointer = sorted.length - 1
	let pairTwins = []
	let pairSum;
		// initilize our loop with a first condition
		// break out of loop with left and right pointer === targetSum
		// otherwise increment leftPointer if !=== targetSum 
		// otherwise decrement rightPionter if !==targetSum
		// return final state
		while (leftPointer !== rightPointer) {
			pairSum = sorted[leftPointer] + sorted[rightPointer]
				if (pairSum === targetSum) {
					pairTwins = [sorted[leftPointer], sorted[rightPointer]]
					break;
				} else if (pairSum < targetSum) {
					leftPointer++
				} else if (pairSum > targetSum) {
					rightPointer--
				}
		}
		return pairTwins
	}


export function countBits(n) {
	// we collect all elements from the loop inside of array, because the method Ill be using further down, work on array data types.
	// so instead of collecting all digits as numerial data type, we put it inside an array
	let total = []

	let bits = 0;
	// convert our number to Binary using toString() method, 2 represents the binary system that well converting into.
	// pass 2 as parameter
	let transform = n.toString(2);
	
	// loop through each element and put into collector
	for(let n = 0; n < transform.length; n++) {
		total += transform[n];  
	}
	// in order to traverse each bit, split() method converts each digit into a single string
	// filter each string with exact match of a '1' bit
	return total.split('').filter(x => x === '1').length
}

// ---------------------------------------------------------------------------

export function compareTriplets(a, b) {
	// we'll be keeping track of two states; points for Ally, and points for Brad
	let bTotal = 0
	let aTotal = 0
	let pointsArray = []
	// our points will be represented in an array data type
   
	// traversing the beginning of both our arrays, and compares each element; Ally and Brad
	for(let i = 0, j = 0; i < a.length; i++, j++) {
		aTotal += a[i] > b[j]
		bTotal += a[i] < b[j]
		pointsArray = [aTotal, bTotal]
	}
	// assign variables (Ally and Brad), to the pointsArray.
	//return the final data
	return pointsArray
   }

export function plusMinus(arr) {
	//count the amt of positive / zero / negative digits
	// set state to 0
	var dividend = arr.length
	var positive = 0 
	var zero = 0 
	var negative = 0 
	var finalRatio;
	var finalRatioDec = null
	
 for(let i = 0; i < arr.length; i++) {
	 if (arr[i] > 0) {
		 positive++
	 } else if (arr[i] === 0) {
		 zero++
	 } else if (arr[i] < 0) {
		 negative++
	 }
	 finalRatio = [positive, zero, negative]
	 finalRatio = finalRatio.map(x => x / dividend)
	 finalRatioDec = finalRatio.map(x => Number(x.toFixed(6)))
 	}
	 return finalRatioDec
	//console.log(finalRatioDec[0])
	//console.log(finalRatioDec[1])
	//console.log(finalRatioDec[2])
}

// output: [0.5, 0.166667, 0.333333]

// ---------------------------------------------------------------------------

export function integerBoolean(n) {
	let truthyFalsy = [];
	// splits string inside of array into invididual strings
	let singledDigits = n.split('')
	// loops through each index, and checks if the element is equal to 1 --> return boolean of 'true'
	for(let i = 0; i < singledDigits.length; i++) {
		if (singledDigits[i] === '1') {
			truthyFalsy.push(true)
		} else if (singledDigits[i] !== '1') {
			truthyFalsy.push(false)
			// returns us 'false' if element is not equal to '1'
		} else {
			// else set the default state to an empty array
			return []
		}
	}
		// invoke the variable of all truthy/falsy values
	return truthyFalsy
}

// ---------------------------------------------------------------------------

export function convertRomanNum(roman){
	let total = [];

	let finalTotal = 0;
	
	let splitting = roman.split('')
	
	const dictionary = {
		'I': 1,
		'IV': 4,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
		for (var key in dictionary) {
			for(let i = 0; i < splitting.length; i++) {
				if(key === splitting[i]) {
					finalTotal += dictionary[key];
				} else if (splitting[i] === 'I' && splitting[i] === 'V' ) {
				 	total += splitting.map(x => x.join(' '))
				}
			}
			total.push(key)
		}
	return finalTotal


}

// ---------------------------------------------------------------------------

export function perimeter(l, num){
	// two variables 
	// conditional operator 
	// or use if/else statements for readability 
		
		let square = 4 * num;
		let circle = 6.28 * num;
	
		if (l === 's') {
			return square 
		} else if (l === 'c') {
			return circle 
		}
	}


// 	Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

export function DNA_generation(x, y) {
	//psudeocode
	// x && y; where... 
	// x === number
	//  y === 'm' || 'f' where m = male / f = female
	// if === 0 then return a string 'me!'
	//female = positive
	//male = negative
	// we want to store multiple values for each key
	// create object of arrays to store unique values
	
	const obj = {
		"-3": {m: "great grandfather", f: "great grandmother",},
		"-2": {m: "grandfather", f: "grandmother",},
		"-1": {m: "father", f: "mother",},
		0: {m: "me!", f: "me!",},
		1: {m: "son", f: "daughter",},
		2: {m: "grandson", f: "granddaughter",},
		3: {m: "great grandson", f: "great granddaughter",},
	  };
	
	  return obj[x][y];
	}

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


export function arrayOfMultiples (num, length) {
	// each single calculated element from transformer variable, is collected in finalArr
	let finalArr = [];
	// holding nest/variable per each calculation (base num * index)
	let transformer = 0
	// start at index 1, plus an additional index. 
	// we start at 1, so base number is not mutiplied by index 0. We want 0 omitted from final array output
	for(let i = 1; i < length + 1; i++) {
		// multiply the base num by the index
		// ie. 3(num) * 1(i) //  3(num) * 2(i) // 3(num) * 3(i)
		transformer = num * i
		// push each calculated value, into final empty array
		finalArr.push(transformer)
	}
	return finalArr;
}

	// Create a function that takes an object and returns the keys and values as separate arrays.
	// Return the keys sorted alphabetically, and their corresponding values in the same order.
export function objectToArray(obj) {
	// create 2 variables 1 to hold keys, 1 to hold values (thank you Github AI copilot)
	let keys = Object.keys(obj)
	let values = Object.values(obj)
		return [keys, values]

}
//A repdigit is a positive number composed out of the same digit. 
//Create a function that takes an integer and returns whether it's a repdigit or not.
export function isRepdigit(num) {
	// let nest = ''
	// let calc = num.toString().split('')
	// let splitting = calc.slice(1)
	// for(let i = 0; i < splitting.length; i++) {
	// 	if( splitting === calc[0]) {
	// 		return true;

	// 	}
	// 	// condition
	// 	// do this --> nest += calc[i]
	// 	}
	// console.log([...calc], "calc variable")
	// console.log(calc[1])
	// console.log(splitting, "splitting variable")
	return num % 2 === 0
}
console.log(isRepdigit(123))

// Create a function that counts the integer's number of digits.
export function count() {
	let convertNegInt = Math.abs(n)
	return convertNegInt > 1 ? Math.ceil(Math.log10(convertNegInt)) : 1
}

// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
// The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).
// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	getArea(){
		return Math.PI * Math.pow(this.radius, 2)
	}
	getPerim(){
		return 2 * Math.PI * this.radius
	}
}

// removes all falsey values within an array 
function compact(arr) {
	return arr.filter(Boolean)
}

// Given a grid of numbers, return a grid of the Spotlight Sum of each number. 
// The spotlight sum can be defined as the total of all numbers immediately surrounding the number on the grid, including the number in the total.
// function spotlightMap(grid) {
	
// }

// Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
	let calc = arr.sort(function(a, b){
		return a-b
	})
	return calc[calc.length - 2]
}

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
function sevenBoom(arr) {
	const stringify = arr.join('')
	const regex = /7/g
	const final = stringify.match(regex)
	console.log(final)
	return final ? 'Boom!' : 'there is no 7 in the array'
}

//Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:
// constructor(x, y, width, height)

class Rectangle {
	constructor(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	toString() {
		const {x, y, width, height} = this;
		return `[x=${x}, y=${y}, width=${width}, height=${height}]`;
	}
}
