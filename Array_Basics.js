let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]; //declare and initialize an array
console.log(fruits); //printing the array

let first_element = fruits[0]; //getting the value of first element into a variable
console.log("First Element : " + first_element); //printing the first element

let last_element = fruits[fruits.length -1]; //getting the value of last element into a variable 
console.log("Last Element : " + last_element); //printing the last element

fruits.push("Pineapple"); //adding new element at the end of an array
console.log(fruits); //printing the new array

fruits.splice(1, 1); //removing the second element
console.log(fruits); //printing the updated array

let Array_Length = fruits.length; //assigning the length of the array to a variable
console.log("Length of the Array : " + Array_Length); //printing the length of the array

//printing the values of the array which each each value at a row
fruits.forEach((fruits) => {
  console.log(fruits);
})