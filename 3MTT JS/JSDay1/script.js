
// 
// alert('This is an external page')


// Multiple Line comment
/*
Lorem ipsum, dolor sit amet consectetur adipisicing 
elit. Eaque odit hic repudiandae at similique atque. Numquam
harum laborum unde temporibus beatae non, nesciunt est ratione
 voluptas eos. Quas, perferendis est!
 */

// alert('It\s raining!')  //escape sequence of single quote

// alert("it's raining")  // alternative to it

// alert("Welcome to 3MTT \n Class of 2024") //escape sequence of new line

// alert("\" 1 We shall soon be out of current hardship in Nigeria!\"") //double quote

// alert('" 2 We shall soon be out of current hardship in Nigeria!"') // alternative to double quote

console.log('This is 3MTT \n class of 2024');

/* variable declaration :
types: 
 using  let
 using const

 const. denotes immutability
 while let is immutable
 */

//  let result = confirm('What is the result');
 
//  if(result === true){
//     alert('you\'re right')
//  }else{
//     alert('you\'re wrong')
//  }

//  if(result === true){
//     alert('You just clicked ok')
//  }else{
//     alert('You clicked cancel')
//  }


/*  Javascript datatypes

Number, String, Boolean, Null, Undefined, Object, Array, Function

*/

/*  
Javascript Operators
Arithmetic +-* % / ** ++ -- 
Assignment  = += -= *= /= %= == ===
Comparison
Logical

*/

// let a =2

// let b = 3

// let result = b % a;
// let result = b ** a;

// b += a;

// alert(`The sum of  ${a} and ${b} is ${result}`)

// alert(`The Product of  ${a} and ${b} is ${b *= a}`)

// tenary operator
// syntax

let a;
let b;
let c;
let result;

// a = prompt('Enter the first number');
// b = prompt('Enter the second number');
// c = prompt('Enter the third number');

a =Number(a);
b =Number(b);
c =Number(c);

result = (a+b+c)/3

// alert("The Average of " + a + " "+ b +" " + c + " = " + result)

// alert("The video game")

// if(a > b){
//     alert(`${a} is greater than ${b}`)
// } else if(a === b){
//     alert(`${a} is equal to ${a}`)
// }else{
//     alert(`${a} is less than ${a}`)
// }

// (a>b) ? alert(`${a} is greater than ${b}`) :(a==b) ? alert(`${a} is equal to ${a}`): alert(`${a} is less than  to ${a}`);

// Assignment
// Using teneray operator include if a==b and add it to the existing code

//Using Math Functions
result = Math.round;

result = Math.floor;

let s= "This is the day 2 of 3MTT fundamental of js"
let firstCharacter = s.charAt(0);

let firstString = s.length;
// alert(`The length of the string is ${firstString}`)
// alert(`The First character of the string is ${firstCharacter}`)

let username, password;

username = prompt('Enter username');
username = username.toLowerCase();
// password = password.toLowerCase();
if(username === 'abdul'){
    password = prompt('Enter password')
    if(password === 'hello'){
        alert("ACCESS GRANTED");
    }
} else if(username === ''){
    alert('Sorry the Username field is required')
}
else{
    alert('Sorry the username is incorrect')
}


// password = password.toString()

//Arrays

/* 
Arrays are data structure that allows storing multiple values in a single variable

Array Methods
push(): adds on or more element to the end of the array
pop(): remove from the end of the array
shift(): removes from the beginning
unshift(): Add one or more element to the beginning of the array
concat()combines two or more array and return a new array 
slice()
join()
indexOf()
lastIndexOf()

*/
