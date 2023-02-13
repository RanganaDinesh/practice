// let osbj1 = {
//     name :"dinesh",
//     age :23
// }
// function display( a ,b) {
//     console.log("hello ", this);
//     console.log(this.name + "is "+" "+ this.age+ " "+"years old" + a +" " + b);
    
// }
// // display.call(osbj1)// >>>>>>>>>>>>> CALL() METHOD <<<<<<<<<<<<<<<,
// display.apply(osbj1 , ["hello" , "dinesh"])// >>>>>>>>>>> APPLY METHOD
// var newvar = display.bind(osbj1)
// sample("hello", "dinesh")  // >>>>>>>>>>>>. BIND METHOD <<<<<<<<<<<<<<<<<<<<
// let object = {
//     name: "karthik",
//     batch : "EA19",
//     enroll : "NOV19"
// }
// function display( a ,b) {
//     console.log("hello ", this);
//     console.log(this.name + "is "+" "+ this.batch+ " "+this.batch+" "+this.enroll + a +" " + b);
    
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> practice
// online                                           >>>>>>>>CALL( ) <<<<<<<<,,
// var employe = {
//     fullname: function() {
//       console.log("hi" + " " + this.firstname + " " + this.lastname + "how are you")
//     }
//   }
//   var epm1 = {
//     firstname: "Dinesh",
//     lastname: "Karthik"
//   }
//   var epm2 = {
//     firstname: "ganesh",
//     lastname: "gane"
//   }
//   employe.fullname.call(epm1)//hi Dinesh Karthikhow are you
//   employe.fullname.call(epm2)//hi ganesh ganehow are you
//>>>>>>>>>>>>>>>>                             >>>>>>>>>>>>>> BIND()<<<<<<<<<<

// apply method similar to call()
// var employe = {
//     fullname: function() {
//       console.log("hi" + " " + this.firstname + " " + this.lastname + "how are you")
//     }
//   }
//   var epm1 = {
//     firstname: "Dinesh",
//     lastname: "Karthik"
//   }
//   var epm2 = {
//     firstname: "ganesh",
//     lastname: "gane"
//   }
//   employe.fullname.apply(epm1)//hi Dinesh Karthikhow are you
//   employe.fullname.apply(epm2)//hi ganesh ganehow are you
//>>>>>>>>>>>>>>>>>>>>BIND METHOD()<<<<<<<<<<<<<<<<<<

// OBJECT IT WILL BORROW METHOD OF ANOTHERE OBJECT <<<<<<<<<<<<
// var employe = {
//     firstname: "ganesh",
//     lastname: "gane",
  
//     fullname: function() {
//       console.log("hi" + " " + this.firstname + " " + this.lastname +" "+ "how are you")
//     }
//   }
//   var epm1 = {
//     firstname: "Dinesh",
//     lastname: "Karthik"
//   }
  
//   let idname = employe.fullname.bind(epm1)
//   console.log(idname())
//>>>>>>>>>>>>>>>>>>>CALL BACK FUNCTION <<<<<<<<<<<

// DEFINATION :- PASSING A FUNCTION AS A ORGUMENT
// function greet(name,callback){
//     console.log("Hi"+" "+name)
//     callback();
//   }
//   function  callme(){
//     console.log("How are you!")
//   }
//   greet("Dinesh",callme)// OUT PUT :-Hi Dinesh
//                                      How are you!

// function step1(callback) {
//     console.log("Step 1");
    
//       callback();
   
//   }
  
//   function step2(callback) {
//     console.log("Step 2");
    
//       callback();
  
//   }
  
//   function step3(callback) {
//     console.log("Step 3");
   
//       callback();
    
//   }
  
//   step1(function() {
//     step2(function() {
//       step3(function() {
//         console.log("All done!");
//       });
//     });
//   });
  