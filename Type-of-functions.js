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