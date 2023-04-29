// Named Function:
function myFunction() {
  console.log("Named Function");
}
myFunction();

//Anonymous functions: without name, used as fubction expression or a arguments
let person1 = function (name){
  console.log(`Hello ${name}`)
};
person1('Utkarsh');
//Arrow Function:introduced in ES6, shorter syntax & one-lined functions
let person = () => console.log("Hello");
person();

//Higher Order Func: functions that take one or more functions as arguments or return a fuction. for eg: map(), filter(), reduce()
let ary = [10,20,23];
let newary = ary.map((element)=>element+10);
console.log(newary);

//Constructor Function: Used to creating objects of similar properties and methods. They are invoked using the new keyword to create instances of objects.

function Person( name, place){
  this.name = name;
  this.place = place;
}
let user1 = new Person("Utkarsh", 'Noida');
console.log(`Hello everyone this is ${user1.name}, and i am from ${user1.place}`);