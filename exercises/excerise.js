
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  

// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNumber = prompt("Please enter your first number");
var secondNumber = prompt("Please enter your second number");
var sum = alert(firstNumber + secondNumber);

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

var checkDriverAge = function () {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    
}
checkDriverAge();

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

function checkDriverAge2 () {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    
}
checkDriverAge2();

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

function checkDriverAge3 (age) {
    if (Number(age) < 18) {
        return("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        return("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        return("Congratulations on your first year of driving. Enjoy the ride!");
    }
    
}
checkDriverAge3();

// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.splice(0,1);
array.sort();
array.push('kiwi');
array.splice(0,1);
array.reverse();

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1][0];

// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var database = [
    {
        username:"Jesus",
        password:"123456"
    },
    {
        username:"Alicia",
        password:"123456"
    },
    {
        username:"Jesus",
        password:"1234565"
    }
]

var newsfeed = [
    {
        username: "name1",
        timeline: "feed1"
    },
    {
        username: "name2",
        timeline: "feed2"
    },
    {
        username: "name3",
        timeline: "feed3"
    }
]

function isUserValid(username, password) {
    for (var i=0; i< database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
        return false;   
    }
} 

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    }
    else {
        alert("Sorry, wrong credentials")
    }
}

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

signIn(userNamePrompt, passwordPrompt);


