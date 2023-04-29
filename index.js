// Named Function:
function myFunction() {
  console.log("Named Function");
}
myFunction();

//Anonymous functions: without name, used as fubction expression or a arguments
let greet = function (name){
  console.log(`Hello ${name}`)
};
greet('Utkarsh');
//Arrow Function
let person = () => console.log("Hello");
person();