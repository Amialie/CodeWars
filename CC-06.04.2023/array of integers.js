//Give an array of integers, return a new array with each value doubled.

// For example:

// [1, 4, 6] --> [2, 4, 6]

//Parametas: Is it always gpomg to be integers? Are we going to be given any special characters? An empty arr ever?

//Return: Return a new arr with each value doubled.

//Example: If we are given [2,3,4], should return [4,6,8]
//         If we are given [4,4,6], should return [8,10,12]
//          If we are given [2,22], should return [4,44]

//Pseudo code: 
//Make a function that takes in an array
function doubled(arr){
    return arr.map(element => element * 2)
}
//Map through the array and multiply each elemeby by 2. Also return. 

doubled([1,2,3])

console.log(doubled([2,3,4]),
[4,6,8] )
