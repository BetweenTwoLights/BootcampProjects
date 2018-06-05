
var num;

console.log("Print all numbers between -10 and 19");
num = -10;
while(num < 20){
	console.log(num);
	num++;
}

console.log("Print all even numbers between 10 and 40");
num = 10;
while(num <= 40){
	console.log(num);
	num += 2;
}

console.log("Print all odd numbers between 300 and 333");
num = 300;
while(num !== 334){
	if(num % 2 === 1){
		console.log(num);
	}
	num = num + 1;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
num = 5;
while(num < 50){
	if(num % 15 === 0){
		console.log(num);
	}
	num += 5;
}