// // //MAP - Map is a object that contains collection of key/value pairs

// const map = new Map();
// //a empty will be created
// map.set("name", "Manoj"); //Set -set wil use to set the value in the map
// map.set("name", "Raj");
// map.set("age", "23");
// map.set("age", "24");
// console.log(map.get("name")); //to get particular thing
// console.log(map.get("age"));

// // let array = [1, 2, 3, 4, 5];
// // for (const [key, value] of map) {
// //   console.log(`${key}`);
// //   console.log(` ${key} : Manoj`);
// //   console.log(` ${key} :23`);
// // }

// // // for (i = 0; i < array.length; i++) {
// // //   console.log(array[i]);
// // // }

// // //---------OR--------------

// // for (let element of array) {
// //   console.log(element);
// // }

// /----------------------------------------------------------------------------------------------------------------------------------------------/
// //Set - it is a collection of unique value only;

// // const settest = new Set();

// // //add - add the unique value to the set

// // settest.add(23);
// // settest.add(45);
// // settest.add(23);
// // settest.add(50);
// // console.log(settest);

// // //has -it will check the particular element is present on the set or not

// // console.log(settest.has(23)); //true
// // console.log(settest.has(55)); //false
// // console.log(settest.has(23));//true

// /----------------------------------------------------------------------------------------------------------------------------------------------/

// //object - it is a collection of key-value pairs

// // let object = {
// //   a: 1,
// //   b: 2,
// //   d: 4,
// // };

// // console.log(object);
// // //Object.keys - This will let you access keys only
// // console.log(Object.keys(object));
// // console.log(Object.values(object));

// // let object1 = {
// //   a: 1,
// //   b: 2,
// //   d: 4,
// // };
// // let object2 = {
// //   e: 1,
// //   f: 2,
// //   g: 4,
// // };
// //Keys - are also known as object parameters
// // //object assign- this will copy the values of objects in the target object or new objects

// // let object3 = Object.assign({}, object1, object2);
// // console.log(object3);

// // console.log(object2.e);//to select particular key

// /----------------------------------------------------------------------------------------------------------------------------------------------/

// //this - it will tell you in which current windpw you are.

// // let newObject = {
// //   firstname: "John",
// //   lastname: "Doe",
// //   age: "23",
// //   print: function () {
// //     console.log(this.firstname + " " + this.lastname + " " + this.age);
// //   },
// // };

// // console.log(newObject.print());

// //function constructor - it will help you to make the same kind of object

// // let manoj={
// //   firstname: "John",
// //   lastname: "Doe",
// //   age: "23",
// // }

// // let darshan={
// //   firstname: "darshan",
// //   lastname: "Doe",
// //   age: "53",
// // }
// //template for making same type of objects
// // function Student(first, last, age) {
// //   this.firstname = first;
// //   this.lastname = last;
// //   this.age = age;
// // }

// // let manoj = new Student("Jhon", "Doe", "23");
// // let darshan = new Student("darshan", "Doe", "53");
// // console.log(darshan);
// // console.log(manoj);

// //Camelcase= CountOfStudent
// //Snakecase=count-of-student

// /----------------------------------------------------------------------------------------------------------------------------------------------/

// //Array of objects; An array it is a special variable which store more than one element
// //                  if it holds the collection of objects then it is array of objects

// // let arrayOfObject = [
// //   (object1 = {
// //     h: 3,
// //     i: 2, //0
// //     j: 1,
// //   }),
// //   (object2 = {
// //     f: 3,
// //     i: 2, //1
// //     j: 1,
// //   }),
// //   (object3 = {
// //     z: 3,
// //     x: 2, //2
// //     y: 1,
// //   }),
// // ];

// // console.log(arrayOfObject);
// // console.log(arrayOfObject.length);
// // console.log(arrayOfObject[1]);
// // console.log(arrayOfObject[1].f);

// // let studentRecords = [
// //   { name: "John", id: 123, marks: 98 },
// //   { name: "Baba", id: 101, marks: 23 },
// //   { name: "yaga", id: 200, marks: 45 },
// //   { name: "Wick", id: 115, marks: 75 },
// // ];

// // let ans = [];
// //
// // for (let i = 0; i < studentRecords.length; i++) {
// //   ans.push(studentRecords[i].name.toUpperCase());
// // }
// // console.log(ans);

// // for (let i = 0; i < studentRecords.length; i++) {
// //   if (studentRecords[i].marks > 50) {
// //     ans.push(studentRecords[i]);
// //   }
// // }
// // console.log(ans);

// // for (let i = 0; i < studentRecords.length; i++) {
// //   if (studentRecords[i].marks > 50 && studentRecords[i].id > 120) {
// //     ans.push(studentRecords[i]);
// //   }
// // }

// // console.log(ans);

// // let totalMarks = studentRecords.reduce((acc, record) => acc + record.marks, 0);
// // console.log(totalMarks);

// // for (let i = 0; i < studentRecords.length; i++) {
// //   if (studentRecords[i].marks > 50) {
// //     ans.push(studentRecords[i].name);
// //   }
// // }
// // console.log(ans);

// // for (let i = 0; i < studentRecords.length; i++) {
// //   if (studentRecords[i].id > 120) {
// //     ans.push(studentRecords[i]);
// //   }
// // }
// // console.log(ans);

// // for (let i = 0; i < studentRecords.length; i++) {
// //   if (studentRecords[i].marks + 15 > 50) {
// //     ans.push(studentRecords[i]);
// //   }
// // }
// // console.log(ans);
// /--------------------------------------------------------------------------------------/
// // let students = [];

// // let student1 = {
// //   name: "Mnaoj",
// //   class: "10th",
// //   rollNo: "1",
// // };

// // let student2 = {
// //   name: "Raj",
// //   class: "10th",
// //   rollNo: "2",
// // };

// // let student3 = {
// //   name: "Darshan",
// //   class: "11th",
// //   rollNo: "1",
// // };

// // let student4 = {
// //   name: "Emily Davis",
// //   class: "11th",
// //   rollNo: "2",
// // };

// // let student5 = {
// //   name: "Prabhas",
// //   class: "12th",
// //   rollNo: "1",
// // };

// // let student6 = {
// //   name: "Jai Balaya",
// //   class: "12th",
// //   rollNo: "2",
// // };

// // students.push(student1, student2, student3, student4, student5, student6);
// // console.log(students);

// // /----------------------------------------------------------------------------------------------------------------------------------------------/

// // let input = "abcadeecfb";
// // let output = "";

// // for (let i = 0; i < input.length; i++) {
// //   if (output.indexOf(input[i]) === -1) {
// //     output += input[i];
// //   }
// // }
// // console.log(output);

// // let input = "abcadeecfb";
// // let charCount = new Map();

// // for (let i = 0; i < input.length; i++) {
// //   if (charCount.has(input[i])) {
// //     charCount.set(input[i], charCount.get(input[i]) + 1);
// //   } else {
// //     charCount.set(input[i], 1);
// //   }
// // }

// // for (let [key, value] of charCount) {
// //   console.log(key + "=" + value);
// // }
// //>>>>>>>>>>>
// function fetchData(callback) {
//     setTimeout(() => {
//       callback(null, 'data');
//     }, 1000);
//   }
  
//   function processData(data, callback) {
//     setTimeout(() => {
//       callback(null, 'processedData');
//     }, 1000);
//   }
  
//   function displayData(data, callback) {
//     setTimeout(() => {
//       callback(null, 'displayData');
//     }, 1000);
//   }
  
//   fetchData((err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       processData(data, (err, processedData) => {
//         if (err) {
//           console.error(err);
//         } else {
//           displayData(processedData, (err, displayedData) => {
//             if (err) {
//               console.error(err);
//             } else {
//               console.log(displayedData);
//             }
//           });
//         }
//       });
//     }
//   });

//   //>>>>>>>>>>>>>>>

// // function step1(callback) {
// //     console.log("displaydata1")
// //     callback();
// //   }
// // function step2(callback) {
// //     console.log("displaydata2")
// //     callback();
// //   }
// // function step3(callback) {
// //     console.log("displaydata3")
// //     callback();
// //   }
// // function step4() {
// //     console.log("displaydata4")
   
// // }
// // step1(function() {
// //     step2(function() {
// //         step3(function() {
// //              step4()
// //           })
// //       })
// //   })

// var fname ="dinesh"
// var lname ="dinesh"

// let promise = new Promise((resolve, reject) => {
//     if (true) {
//       resolve('Promise resolved');
//     } else {
//       reject('Promise rejected');
//     }
//   });
  
//   promise
//     .then(value => console.log(value))
//     .catch(error => console.log(error));
  
//     function add(x, y) {
//         return x + y;
//     }
//     let sum = add;
// let result = sum(10, 20
//     // Self invoking function, IIFE ********88
//     // // execution context,


//     // returns a promise
// let pschaining = new Promise(function (resolve, reject) {

//     resolve("successfully resolved");
//     reject('still pending ');
//  });
 
 
//  pschaining.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
 
 
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
// );
// let demo=()=>{
//     return new Promise(function(res,rej){
//       error=true
//       if(!error){
//         res()
//       }
//       else{
//         rej()
//       }
//     })
//   }
  
//   demo().then(function(){
//     console.log("succeeded");
//   })
//   .catch(function(){
//     console.log("failed")
// //   })
// (function () {                    //IIFE
//     let str = "dinesh";
//     console.log(str);
// }())
function delay(time){
    return new Promise(resolve=>
    setTimeout(resolve,time));
  }
  
  (async()=>{
    for(let i=1;i<=5;i++){
      await delay(1000);
      console.log(i);
    }
  })();