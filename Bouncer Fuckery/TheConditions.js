// JavaScript Document

var age;

age = prompt("How old are you, kid?");

//if(age < 0){
//	console.error("We don't take negative people in here.");
//} else if(age == 21){
//	alert("Happy mother-fuckin' birthday, bitch!");
//}

if(Math.sqrt(age) % 1 === 0){
	alert("I guess that's a perfect square...");
}
else{
	alert("Whoops!");
} 