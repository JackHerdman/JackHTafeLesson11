//primitive data types
let num = 12;
let string = "myString";
let boolean = true;

//variable stores the info if the info is a primitive type
num2 = num;
num2 = 3
console.log(`entered value ${num}`);
console.log(`altered value ${num2}`);

//complex data types
//variable stores a 'pointer' to the original variable therefore both update when you change one 
let myArr = [1,2,3];
let myArrCopy = myArr;
myArrCopy.push(4);
console.log(`entered array ${myArr}`);
console.log(`altered array also alters original ${myArrCopy}`);

//to stop this happening we need to DEREFERENCE
//Dereferencing an array
let myArr2 = [1,2,3];
//let myArrCopy = myArr.map(num => num)
let myArrCopy2 = [];
for (let i = 0; i < myArr2.length; i++) {
    myArrCopy2.push(myArr2[i]); 
}
myArrCopy2.push(4);
console.log(`entered array ${myArr2}`);
console.log(`altered array also DOES NOT change original ${myArrCopy2}`);


//Dereferencing an object
let myObj ={
    a: "A",
    b: "B"
};
let myObjCopy = {
    a: myObj.a,
    b: myObj.b
};
myObjCopy.c = "C";
console.log(`entered object ${myObj}`);
console.log(`altered object also DOES NOT change original ${myObjCopy}`);

//Spread Syntax
//because writing the above is tiresome
let myArr3 = [1,2,3];
let myArrCopy3 = [...myArr3];
myArrCopy3.push(4);
console.log(`entered array ${myArr3}`);
console.log(`altered array also DOES NOT change original ${myArrCopy3}`);


let myObj2 ={
    a: "A",
    b: "B"
};
let myObjCopy2 = { ...myObj2};

myObjCopy2.c = "C";
console.log(`entered object ${myObj2}`);
console.log(`altered object also DOES NOT change original ${myObjCopy2}`);


//DESTRUCTURING
//the properties inside the destructer are pulled out and made const separately but leaves the original
const {a, c} = myObjCopy;
console.log(a);
console.log(c);

// allows a constant called readFileSync and writeFileSync that does not need fs. in front of it
//useful when using a function a lot
// const {readFileSync, writeFileSync ...fs} = require ("fs");