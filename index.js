//simple printing display in JS//
/* 
console.log ("i like you very much");
console.log ("its reaally good");
window.alert ("I really like you");
*/

// this is a comment//

//Decalring variables//
/*
let age; //numbers data type
let firstName; //string data type
let student = true; //Boolean dta type
let nonStudent = false; // Boolean data type
age = 30;
age = age + 1
firstName = "Bascee";
console.log (age); 
console.log (firstName); 
console.log (student);
console.log (nonStudent);
console.log ("you are", age, "years old");
console.log ("Is mr.", firstName, "a student?", student);

document.getElementById("p1").innerHTML = "Hello Mr. " + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolment Status: " + nonStudent;
document.getElementById("p4").innerHTML = "Sorry Mr. " + firstName + " you have not yet enrolled as a student." ;
*/

//Arithmetic Operators//
/*
let classRoom1 = 10;
let classRoom2 = 10;
let classRoom3 = 10;
let classRoom4 = 10;
let classRoom5 = 10;

classRoom1 += 1;
classRoom2 -= 1;
classRoom3 *= 2;
classRoom4 /= 5;
classRoom5 %= 3;

console.log (classRoom1);
console.log (classRoom2);
console.log (classRoom3);
console.log (classRoom4);
console.log (classRoom5);
*/

//Accepting User Input//
//1. Using window prompt//
/*
let userName;
userName = window.prompt ("whats your name?");
console.log (userName);
*/

//2. HTML TextBox//
///check html file (index.html) for (id) variable names///
/*
let user;
document.getElementById("myButton").onclick = function(){
    user = document.getElementById("myInput").value;
console.log (user);
console.log (typeof user);
document.getElementById("intro").innerHTML = "Welcome Boss " + user;
};
*/

//converting Data types from String to Number to Boolean and vice versa//
/*
let ager;
let agerr;
let ages;
let age = window.prompt("How old are you?");
age = Number(age);
console.log (age, typeof age)

age += 1;
console.log("you are now", age, "years old.");
ages = String("9.07");
console.log(ages, typeof ages);
ager = Boolean("");
console.log(ager, typeof ager);
agerr = Boolean("checker");
console.log(agerr, typeof agerr);
*/

//const ==> is a variable that cannot be changed//
/*
const PI = 3.14159; //this can not be changed in the line//
                   //of code under any circumstances.//
let radius;
let circumference;

radius = window.prompt("what is the Radius?");
radius = Number(radius);
circumference = radius * PI * 2;
console.log("The circumference is: ", circumference);
*/
//Math -  the funtion of math is to carry out arithmetic calculations.
/*
let a = 49.53;
let b = 49.23;
let c = 49.93;
let d = 7;
let e = 49;
let maximum;
let minimum;

a = Math.round(a);
b = Math.ceil(b);
c = Math.floor(c);
d = Math.pow(d, 2);
e = Math.sqrt(e);
maximum = Math.max(a, b, c, d, e,);
minimum = Math.min(a, b, c, d, e,);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log("the highest number is ", maximum);
console.log("the lowest number is ", minimum);
*/
/*
let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Side C is: ", c);
*/

document.getElementById("submitButton").onclick = function(){
a = document.getElementById("aText").value;
a = Number(a);

b = document.getElementById("bText").value;
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));



document.getElementById("cdiv").innerHTML = "Side C: " + c;
};

let count
count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count = count - 1
    document.getElementById("counter").innerHTML = count
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    document.getElementById("counter").innerHTML = count
}

document.getElementById("increaseBtn").onclick = function(){
    count = count + 1
    document.getElementById("counter").innerHTML = count
}
/*
// pick random number between 0-1//
let n;
n = Math.random();
console.log(n);

// pick random whole number between 0-19//

let m;
m = Math.floor(Math.random() * 20); //the floor rounds it down to the nearest whole number// 
console.log(m);
*/

// pick random whole number between 1-5//

let z;
let x;
let y;

//the floor rounds it down to the nearest whole number and the "+1" adds an additional number incase the result is 0// 

document.getElementById("rollButton").onclick = function(){
    y = Math.floor(Math.random() * 6) + 1
    x = Math.floor(Math.random() * 6) + 1
    z = Math.floor(Math.random() * 6) + 1
    
    
    document.getElementById("xlabel").innerHTML = x
    document.getElementById("ylabel").innerHTML = y
    document.getElementById("zlabel").innerHTML = z
    
}

// string properties and methods//
let myName;
let phoneNumber;
let firstName;
let lastName;
myName = "  Bascee Psalmuel  ";
phoneNumber = "090-538-1099";
myName = myName.trim()

console.log(myName.charAt(0)); // this displays the character at index 0 in the variable "Bascee Psalmuel"
console.log(myName.length); // this displays the entire length of the variable//
console.log(myName.indexOf("P")); // this displays the position of the leter "p" in the index
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("/", "");
console.log(phoneNumber);
lastName = myName.slice(0, 6); // this is a more specific way to display the lastName for this specific myName
firstName = myName.slice(7, 15); // this is a more specific way to display the firstName for this specific myName
console.log(firstName);
console.log(lastName);


// slice() extracts a section of a string and retrurns a new string without modifying old string.



let fullName
let userName
let frstName
let middleName
let lstName
fullName = "Israel Ime Wilson";
fullName = fullName.trim() // this removes any spaces around the  name
console.log(fullName.indexOf(" "));
console.log(fullName.lastIndexOf(" "));
console.log(fullName);


userName = fullName.charAt(11).toLowerCase(); // this converts the character at number 11 to an lowerCase
console.log(userName);


frstName = fullName.slice(0, fullName.indexOf(" "));
middleName = fullName.slice(fullName.indexOf(" ") +1, fullName.lastIndexOf(" "));
lstName = fullName.slice(fullName.lastIndexOf(" ") +1);

console.log(frstName);
console.log(middleName);
console.log(lstName);

//if statement - a basic form of making decision if the conditions are true0//

let age 
age =  15;
if(age >= 20){
    console.log("Congrats! you are an adult");
}
else if(age < 0){
    console.log("Oops! your age is invalid")
}
else{
    console.log("Sorry! You are underaged");
}

//checking condtions for boolean values//
let online; 
let notOnline;
online = true; 
notOnline = false;

if(online){
    console.log("You are actively online");
}
else if(notOnline){
    console.log("You are Offline");
}
else{
    console.log("please Login");
}

document.getElementById("MyCheckButton").onclick = function(){
    if(document.getElementById("MyCheckBox").checked == true){
document.getElementById("result").innerHTML = "Congrats! you have accepted the Terms and Condition";
console.log("Congrats! you have accepted the Terms and Condition")
    }
    else{
document.getElementById("result").innerHTML = "Oops! You have NOT accepted the Terms and Conndition";
    }
}

const masterRadio = document.getElementById("master");
const verveRadio = document.getElementById("verve");
const visaRadio = document.getElementById("visa");
const cardOutput = document.getElementById("cardoutput");
const enterButton = document.getElementById("enterButton");



enterButton.onclick = function(){



if(masterRadio.checked){
    cardOutput.innerHTML = "You are paying with a Master card";
}
else if(verveRadio.checked){
cardOutput.innerHTML = "You are paying with a Verve card";
}
else if(visaRadio.checked){
    cardOutput.innerHTML = "You are paying with a Visa card";
}
else{
    cardOutput.innerHTML = "Select a Card"
}
}

const grade = ["A", "B", "C", "D", "E", "F",] // this is an array of differtent elements
const showGrade = grade[Math.floor(Math.random() * grade.length)]


// switch is a conditional statment that repleases an "else if" statement to make the code look shorter and a lto simpler
switch(showGrade){
case "A":
console.log(showGrade,": Congrats! you have a distinction")
break
case "B":
console.log(showGrade,": you did good")
break
case "C":
console.log(showGrade,": you had average")
break
case "D":
console.log(showGrade,": you had a pass")
break
case "E": 
console.log(showGrade,": you have to Resit the Exam")
break
case "F": 
console.log(showGrade,": you have Failed!")
break
default:
    console.log(showGrade, ": The input is INVALID")
}


// OR(||) and AND (&&) logical operators: this gives opprtuinity to check condtions concurrently before execution
let temp;
temp = "9"
temp = Number(temp);

if (temp <= 8 && temp != 1){
    console.log("this is your teperature: " + temp +". its going to be sunny today.");
}
else if(temp != 10 && temp == 9 && temp <= 15){
    console.log("the tempertaure is: ", temp, ". it is not a good weather today.");
}

else if (!(temp >= 10 || temp == 1)) {
    console.log("this is your teperature:", temp,". its going to be sunny today.");
    
}
else{
    console.log("the tempertaure is: ", temp, ". it is not a good weather today.");
}
/*
// While Loop;
let extra = document.getElementById("extra")
let extraBtn = document.getElementById("extraBtn")
let extraWarn = document.getElementById("extraWarn")
extraBtn.onclick = function(){
    do{
        console.log("Enter your Name please");

    }
    while (extra.value == "" || extra.value == null) 

    extraWarn.innerHTML = "Welcome "+ extra.value ;
}
*/
let countMe;
for (countMe = 1; countMe <= 5; countMe++){
    console.log(countMe);
}

//Nested Loop. its a loop inside another loop.
/*
let i;
let j;
for(i = 1; i <= 3; i++){ // this acts as the outer counter 
    for(j = 0; j <= 10; j+=2){ // this is the number being counted;
        console.log(j);
    }
}

let symbol = window.prompt("Enter a Symbol")
let row = window.prompt("Enter No. of Rows");
let column = window.prompt("Enter No. of Column");

let myRectangle = document.getElementById("myRectangle")

for(let i = 1; i <= row; i++){
    for(let j = 1; j <= column; j++){
myRectangle.innerHTML += symbol + " ";
}
myRectangle.innerHTML += "<br>"
}
*/
//function- this defines the code once and uses it many times.

writeHymn()

function writeHymn(){
    let singer1 = "Dele";
    let singer2 = "Tobi";
    singHymn(singer1, singer2);
}

function singHymn(a, b){
    console.log("Hymn1 for", a)
    console.log("Hymn2 for", b)
    console.log("Hymn3 for", b)
    console.log("Hymn4 for", a)
}


let height = 5
let width = 15
let area = getArea(height, width)


function getArea(height, width){
    return height * width;
}
console.log("the area is: ", area);

//Ternary Operator- shortcut for the if-else statement. bettter this way to make the code shorter//

let ageNo = document.getElementById("ageNo");
let ageBtn = document.getElementById("ageBtn");
let res = document.getElementById("res-1");


ageBtn.onclick = function(){
    ageNo.value >= 18 ? res.innerHTML = "Yay! You are an Adult!" : res.innerHTML = "Oops! You are NOT an adult!"
}

console.log(`your have ${height} items in your Cart`) // this is a better way of writing the variable names called template literals.
console.log(`you will have to pay $${width} `) // this is a better way of writing the variable names.

let myNum = 123456672.0098
let myNum2 = 123456672.0098
let myNum3 = 1239845672.0098
let myNum1 = 5000
let myNum4 = 100
myNum = myNum.toLocaleString("en-US"); //this coverts the number to the country format(how it si written in the specified country)
myNum2 = myNum2.toLocaleString("hi-IN"); //this coverts the number to the country format(how it si written in the specified country)
myNum3 = myNum3.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); //this coverts the number to the country format(how it si written in the specified country(India))and also add the currency to it
myNum1 = myNum1.toLocaleString("en-US", {style: "currency", currency: "USD"}); //this coverts the number to the country format(how it is written in the specified country(USA)) and also add the currency to it
myNum4 = myNum4.toLocaleString(undefined, {style: "unit", unit: "celsius"})
console.log(myNum)
console.log(myNum2)
console.log(myNum1)
console.log(myNum3)
console.log(myNum4)


const answer = Math.floor(Math.random() * 10)
console.log(answer)
let guesses = 0;
let guess = document.getElementById("guessField")
let alerty = document.getElementById("alert")

document.getElementById("subBtn").onclick = function(){
    if(guess.value != ""){
         guesses++
    
    if(answer == guess.value ){
        alerty.innerHTML = `You are Correct! the right answer is ${guess.value}, you had ${guesses} attempts`

    }
    else if(answer < guess.value){
        alerty.innerHTML = `Oops! ${guess.value} is Large`
    }
    else if(answer > guess.value){
        alerty.innerHTML = `Oops! ${guess.value} is Low`
    }
    else{
        alerty.innerHTML = `${guess.value} is not a Number!!`
    }
}
    else{ alerty.innerHTML = `ENTER A NUMBER!!`
    }
}


let sub1 = document.getElementById("sub-1")
let val1 = document.getElementById("val-1")
let cel1 = document.getElementById("cel-1")
let fah1 = document.getElementById("fah-1")
let ans1 = document.getElementById("ans-1")

sub1.onclick = function(){

    val1.value = Number(val1.value)

    if(val1.value != "" && fah1.checked){

        ans1.innerHTML = ((val1.value * 9/5) + 32).toLocaleString(undefined, {style: "unit", unit: "fahrenheit"}) 
}
else if(val1.value != "" && cel1.checked){
    ans1.innerHTML = ((val1.value - 32) * 5/9).toLocaleString(undefined, {style: "unit", unit: "celsius"})

}
else{
    ans1.innerHTML = `Select a unit`
}
}

let cars = ["Audi", "Toyota", "Benz", "Lexus", "BMW", "Mazda"];

cars.push("Dodge"); // this adds new element to the end of the array 
//console.log(cars);
cars.pop(); // this removes the last element
cars.unshift("Ferrari") //like the push method, but this Inserts new elements at the start of an array, and returns the new length of the array.
cars.shift()//like the .pop() method, but this removes the element at the start of an array, and returns the newly reduced length of the array.
console.log(cars.length)
for(let x = cars.length-1; x >= 0; x--){
    console.log(cars[x]);
}
console.log(`--`);
let phones = ["Nokia", "Motorola", "Iphone", "Samsung", "tecno", "Infinix", "Asus"]
let xi;
phones = phones.sort();
console.log(phones);
 // this sorts the elements in the array in alphabetical order
phones = phones.sort().reverse(); // this sorts the elements in reverse alphabetical order
for(xi of phones){ //this displays the Elements in the array starting from the beginning to the end
    console.log(xi);
}

//2D Array- this is an Array that consists a list of other arrays

let fruits = ["Watermelon", "Oranges", "Guava", "Apples"];
let Beverages = ["Cocoa", "Tea", "Beer", "Coffee" ];
let Toiletries = ["toiletpaper", "soap", "cream", "Toothpaste"];

    let shopList = [fruits, Beverages, Toiletries];

    for(let item of shopList){
        for(let fruitList of item){
        console.log(fruitList);
    }
}
    console.log(`--`);
    console.log(shopList[1][3]);
    shopList[1][3] = "Soda";
    console.log(shopList[1][3]);
    
    //Pread Operator (...ArrayName) - this helps seperates the elements in an array to individual element.
    console.log(`--`);
let family = ["Psalm", "Baby", "Eazy"]
let exFamily = ["Emem", "Mama", "Alex"]

family.push(...exFamily)
console.log(...family)


console.log(`--`);
//rest parameters - represensts an indefinite number of parameters

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
let f = 6

console.log(addAll(a, d, e, f)) // the function call

function addAll(...numb){ //this packs all the vairables into an array called numb like this; [a, b, e, f]
    let total = 0
    let n;
    for(n of numb){ // this lists all the elements one after the other in the array packed above 

        console.log(n)
        
        total = total + n 
            }
    return total
    
};
//callBack- a function passed as an argument to another funtion

/*
let tot = sum(4, 3)
dispCon(tot) 
dispDOM(tot)
function sum(x, y){
    let  rezult = x + y
    return rezult;
}
*/

sum(8, 3, dispCon);
sum(8, 2, dispDOM);


function sum(x, y, myFunc){
    let rezult = x + y
    myFunc(rezult)

}

function dispCon(output){
console.log(output)
}

function dispDOM(output){
    document.getElementById("dispDOM").innerHTML = output

}

let Students = ["bose", "sampson", "tyler", "hayley"]
Students.forEach(capitalize)
Students.forEach(print)

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}


function print(element){
console.log(element) 
}

let nos = [2, 4, 6, 8, 10]
let sqR = nos.map(square)
let cuBE = nos.map(cube)

sqR.forEach(displa)
cuBE.forEach(displa)

function square(element){
    return Math.pow(element, 2)

}
function cube(element){
    return Math.pow(element, 3)

}
function displa(element){
    console.log(element)
}

// the array.filter segments the some elements of an array that are need in a function
let studentAges = [20, 19, 18, 15, 17, 21]
let adultStudents // this will be the variable where the new array will be stored

adultStudents = studentAges.filter(olderStudents) // this calls the capitalize funtion and stores it in the new varioable name adultStudents
adultStudents.forEach(showOlderStudents) // this does the same thing above for each of the element in the array and console.log them.

function olderStudents(element){
    return element >= 18
}
function showOlderStudents(element){
    console.log(element)
}
//array.reduce(funtionaName)-  this helps with reduce the elements in the original array to one element in a new array
let allPrices = [50,  25, 30, 65, 87, 21, 90]
let totalPrice = allPrices.reduce(checkOut)

function checkOut(totalPrice, element){
return totalPrice + element
}
console.log(`the Total price is: $${totalPrice}`)


//console.clear()  //to clear the console

let studentGrades = [100, 50, 60, 20, 35, 81,];/*
studentGrades = studentGrades.sort(decSortAll)
studentGrades = studentGrades.sort(acendSortAll)
studentGrades.forEach(prnt)

function decSortAll(x, y){ // this sorts the array in decending order
return y - x
}
function acendSortAll(x, y){ // this sorts the array in ascending order
return x - y
}

function prnt(element){
    console.group(element)
}
*/


//this is the array.forEach() method- this performs an action for each element of the array
studentGrades.forEach((element, index, array) => {
console.log(`Element ${element} of index:${index}`)
})
//this is the array.map() method -- this perfroms an action and store the element in a new array with an assigned variable
studentGradesDoubled = studentGrades.map((element, index, array) => {
    return element * 2
})
/*
function doubleGrade(element, index, array){
    return element * 2
}
    */
console.log(studentGradesDoubled)

//another example of array.map()

const Listedproducts = [
    {
    nameOfProduct: "HP Laptop",
    priceTag: 2000,
    nosOfProduct: 10
},
    {
    nameOfProduct: "Asus Laptop",
    priceTag: 2000,
    nosOfProduct: 9
},
    {
    nameOfProduct: "Apple Laptop",
    priceTag: 2000,
    nosOfProduct: 5
},
{
    nameOfProduct: "Dell Laptop",
    priceTag: 200,
    nosOfProduct: 1

}
]
const subTotalProducts = Listedproducts.map((element) =>({
    name: element.nameOfProduct,
 
    totalValue: element.priceTag * element.nosOfProduct // this is the new array where the total price of each laptop brand is stored products are stored

     
}))

console.log(subTotalProducts)

const evenStudentsGrades = studentGrades.filter((element, index, array) =>{
    return element % 3 == 0
})
console.log(evenStudentsGrades)

//array of objects example
const team = [
    { Player: "Bascee",
        Position: "Defender",
        JerseyNo: "5"

},
    { Player: "Mike",
        Position: "Defender",
        JerseyNo: "4"

},
    { Player: "Joel",
        Position: "Midfielder",
        JerseyNo: "10"

},
    { Player: "Almiron",
        Position: "Attacker",
        JerseyNo: "9"

},
{ Player: "Joshua",
    Position: "Defender",
    JerseyNo: "6"

}
];

const defendersOnly = team.filter((element, index, array) =>{
     return element.JerseyNo >= 6 // this returns the players with jersey no.6 and above
     

})
console.log(defendersOnly)

//another filter example to removes duplicate numbers from an array

let scores = [2, 1, 3, 9, 3, 5, 6, 4, 1, 5, 9, 8, 7, 4, 3, 9, 1, 0, 3, 2, 9]
const singleScores = scores.filter((element, index, array) => {
    return array.indexOf(element) == index //this shows the element of an index only, so when the element appears again, it skips it
})

console.log(...singleScores) // NB: the spread function ... can be understood above in
