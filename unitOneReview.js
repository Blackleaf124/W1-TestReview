// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE

let myName = "Hunter"
let age = "22"
let isCodingFun = true

let color = 'Cream'

let myFavColor = `My favorite color is ${color}`
let myFavColor2 = "My favorite color is" + color
// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding languages of your choice. 
*/

//CODE HERE

let codingLanguages = ["python", "java", "C#", "javaScript"]

/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

//CODE HERE
console.log("-----------------");
console.log(codingLanguages[2])
console.log("-----------------");
/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

//CODE HERE

let codingLanguages2 = codingLanguages.slice(0, 4)

/* 
Add another coding language to the codingLanguage2 array.
*/

//CODE HERE

codingLanguages2.push("C++")
console.log(codingLanguages2)

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE

instruments.pop()


/* 
Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE

instruments.shift()

/* 
Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE

instruments.unshift("guitar")

/* 
Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE

instruments.splice(2, 1, 'glokenspiel')

console.log(instruments);
// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE

if(num % 2 === 0){
    console.log('num');
}else{
    console.log(`${num} is not an even number.`);
}

// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than or equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE

if(score <= 10){
    console.log("Failed");
}else if(10 < score && score < 41){
    console.log("The grade is C");
}else if(40 < score && score < 71){
    console.log("The grade is a B");
}else if(score > 70){
    console.log("The grade is A");
}

// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let total = 0

for(let i = 0; i < price.length; i++){
    total += price[i]
}

console.log(total);

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let averagePrice = total / price.length

console.log(averagePrice);

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE

for(let i = 0; i < colors.length; i++){
    if(colors[i] === 'red'){
        console.log('Apple');
    }else if(colors[i] === 'green'){
        console.log('Melon');
    }else if(colors[i] === 'yellow'){
        console.log('Banana');
    }else{
        console.log[i];
    }
}



// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
        -- github
        -- git init
        -- git clone
        -- git status
        -- git add
        -- git commit
        -- git push
    - How to push git to github
*/

