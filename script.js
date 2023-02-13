// // Parent object
// var Parent = function() {};

// Parent.prototype.greet = function() {
//   return "Hello from Parent";
// };

// Parent.prototype.sayGoodbye = function() {
//   return "Goodbye from Parent";
// };

// // Child object
// var child = function() {};

// // Inherit methods from Parent
// child.prototype = Object.create(Parent.prototype);

// // Use parent methods in Child
// var child = new child();
// console.log(child.greet());
// console.log(child.sayGoodbye());
// //>>>>>.
// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true
//   };
  
  
// rabbit._proto_ = animal;

  
// console.log(rabbit.eats);

// Array.prototype.sum = function() {
//     let result = 0;
//     for (let i = 0; i < this.length; i++) {
//       result += this[i];
//     }
//     return result;
//   };
  
//   let array1 = [1, 2, 3];
//   let array2 = [4, 5, 6];
//   let array3 = [7, 8, 9];
  
//   console.log(array1.sum()); // Output: 6
//   console.log(array2.sum()); // Output: 15
//   console.log(array3.sum()); // Output: 24
// }
// function details(year,marks,location) {
//     this.year=year;
//     this.marks=marks;
//     this.location=location
// }
// details.prototype.curyear="2023";//2023
// const data=new details(2022,67,"AP");//details { year: 2022, marks: 67, location: 'AP' }
// console.log(data)
// let array = "AbaDd"

// let CountA=0;
// let CountD=0;

// for(var i=0;i<array.length;i++){
//     if(array[i]==="A"){
//        CountA++
//     }
//     else{
        
//      if(array[i]==="D"){
//      CountD++
//     }
    
    
//     }
   
  
// }
// console.log(CountA ,CountD)
   