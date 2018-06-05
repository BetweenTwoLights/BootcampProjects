// JavaScript Document

function isEven(num){
	return(num % 2 === 0);
}

function factorial(num){
	if (num === 0){
		return 1;
	}
	
	for(var x = num - 1; x > 0; x--){
		num *= x;
	}
	
	return num;
}

function kebabToSnake(kebab){
	return kebab.replace(/-/g, "_")
}