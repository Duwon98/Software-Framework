// Task 1
console.log("Hello World, Node.js!");

//Task 2
var arr1 = [1,2,3,4,5];
console.log(arr1);

arr1.push(6);
console.log(arr1);

arr1.unshift(0);
console.log(arr1);

arr1.splice(3,0,10);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.splice(1,1);
console.log(arr1);

arr1[4] = 100;
console.log(arr1);

arr1.sort(function (a,b) {
        return a - b;
});
console.log(arr1);

// Task 3
var people = [
    {
        "firstName": "Duwon",
        "lastName" : "Ha" 
    },
    {
        "firstName": "Shinzo",
        "lastName" : "Tanimoto" 
    },
    {
        "firstName": "Koupa",
        "lastName" : "Taylor" 
    }
];
console.log(people);

let people2 = JSON.stringify(people);
console.log(people2);

let people3 = JSON.parse(people2);
console.log(people3);

//Task 4
const arrayAdd = require('array-add-num');
console.log("Sum of Array is " +  arrayAdd([5,4,3,8]));

const packageJson = require('./package.json');
console.log(packageJson.dependencies);





//Task5
var multiplyNums = function(x, y, z){
    return "new number is " + x*y*z;
};
console.log(multiplyNums(1,2,3)); 
console.log("The variable called multipleNumbs have a function wihch is called anonymous function."); 

var multiplyNums2 = (x , y, z) => { return "new number is " + x*y*z};
console.log(multiplyNums2(4,5,6));
console.log("you can also get rid of function when you are defining function and you can also put => for putting expression.  ");