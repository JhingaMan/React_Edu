// in js classes are built on the conepts of prototypes. But classes have some syntax and similar of its own.
// In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.
// JavaScript looks for things until it did not reach null
// Array is a kind of object
//object is the parent of array and object further has no parent
//String->Object->null
//In  JS everything is object and whatever property are available for string is also avialable for string till some extent. It is due to Inheritance

function multiplyByfive(num){
    return num*5
}

multiplyByfive(5);
console.log(multiplyByfive(5));

multiplyByfive.power = 2

console.log(multiplyByfive.power);
console.log(multiplyByfive.prototype); //This shows function is also an object. Function behaves like function but we can extend its functionality to objects 

function createUser(username,score){
    username = username //could be a confusion which username is what 
    this.username = username
    this.score = score
}

createUser.prototype.increment = () =>{ //we defined our own function in the array prototype 
    this.score++;
}

let chai = createUser("chai" , 25)
const tea = createUser("tea" , 250)
//now function dont know which score we have to inscrease wheather chai or tea
//prototype increament does not have any context that which score function has to increase so we could define this, that would give function a context
//myArray.prototype.map() we dont do it like this we just do myArray.map(); Javascript does the work to find map function inside ptotype
// chai.increment() // here the error pops up because chai doesn't know new properties are being defined. To let chai get new properties you have to define new keyword.
chai = new createUser("chai" , 25); //now chai knows about the function we defined 








/*
1) If you want that a method should be accessible or present in all objects in javascript (for ex: arrays, strings, functions,etc) then you can set your own method in the top level Object (because everything is an object in javascript) by using | Object.prototype.{method name} = function(){} | , after doing this you will have the access of your {method.name} from all objects for ex: every array that you declare, every string that you declare and so on. 

2) But lets say if you want a certain method that should be accessible only on a certain object ( for example : (this is used in the video) you want a trueLength(){this method returns the true length of an array by trimming all the whitespaces} method to accessed on all String declarations , then you can be like | String.prototype.trueLength = function(){ code that does trimming and return length } | and this will be accessible on all strings . 

3) this keyword in javascript refers to the current context of who is calling . matlab this boleto jisne bulaya . example: if you say  | "hemant   ".trueLength() | then how will the trueLength() method knows that on whom it have to perform . so we use this in the trueLength() function definition so it will automatically take the context of by whom the method is callled , boleto jisne bulaya uska kaam hoga.....
*/

