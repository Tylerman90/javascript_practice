// 1. Create a script with two variables, each assigned to a number.
// Add them together and output the result to the console. 
var dudes = 16;
var chicks = 3;
var students = dudes + chicks;
console.log(students);

// 2. Now do the same with two strings.
var FirstName = 'Tyler';
var LastName = 'Gunter';
var FullName = FirstName + " " + LastName;
console.log(FullName);

// 3. Create a multidimensional array related to a subject that interests you. 
// Output two of the items in sub-arrays to the console.
var games = [ ["Mario", "Metroid"], ["Sonic", "Vectorman"]];
console.log(games[0][1]);
console.log(games[1][0]);

// // Write a script that checks if a variable captured from a prompt is less than 100.
// If it is, alert the user that their variable is less than 100. 
// If it is not alert the user of what the value was and that it was greater than 100.
// Try running the script and then changing the variable's value to see how this affects the program's output.
function check(num){
	if(num<100){
		alert("variable is less than 100.");
	} else{
		alert(num + " is greater than 100.");
	}
};

// Write a similar script to check if a string stored in a variable is the same as another string.
var string1 = "My name is Tyler";
function check2(string1){
	if(string1=='My name is Tyler'){
		alert("strings are the same");
	} else{
		alert("strings are different");
	}
}
// Declare a function that takes a name as an argument and tells the user what name they've entered.
// Try running it after it has been declared.
function username(name) {
	return "you entered the name" + " " + name
} 
console.log(username(name));


// Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
function noarg() {
	return "no words in this arguement"
}
console.log(noarg());

// // Declare a function that depending upon which virtual 'door' was 
// entered tells the user they've received a different 'prize' in an alert.
// // After declaring the function, try running it with different options. 
// There must be at least 3 doors.
// function

function opendoor(num){
	if (num === 1) {
		alert("You win an Orange Juice");

	} else if (num === 2){
		alert("you win crap!");
		
	} else if (num === 3){
		alert("You win an Porche!!!!");
	}
	else
		alert("You're an Idiot!!!");
}







