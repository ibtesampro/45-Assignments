//Array for five places of the world
let seeingtheworld : string[] = ["Russia","NewYork","Honolulu","Turkey","England"];

//Printing array in original order
console.log(seeingtheworld,"This array has now been printed in it's original order.");

//Now changing the array in alphabetical order using built in function
console.log([...seeingtheworld].sort(),"I have changed the array to alphabetical order without modifying the actual list.");

//The first array is in original order
console.log(seeingtheworld,"The first array is still is in it's ariginal order.");

//Printing the array in reverse order
console.log([...seeingtheworld].reverse(),"The array is printed in reverse order.");

//The first array is in original order
console.log(seeingtheworld,"The first array is still is in it's ariginal order.");

//Reversing the original array order
console.log(seeingtheworld.reverse(),"Now I have reversed the original array order.");

//Again reversing the reversed array order 
console.log(seeingtheworld.reverse(),"Again I have changed the reversed array to its origiinal array order.");

//Changing the original array in alphabetical order by modifying original list
console.log(seeingtheworld.sort(),"Now I have changed the original array order in alphabetical order by modifying the original array list.");

//changing the alphabetical order list back to it's original order
console.log(seeingtheworld.reverse(),"Again I have reversed the alphabetical array order.");



