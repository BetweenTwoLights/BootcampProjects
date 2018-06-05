// JavaScript Document

var body = document.getElementsByTagName("body");
var btn = document.querySelector("button");

btn.addEventListener("click", function(){
					 if (this.backgroundColor === "black"){
	this.style.backgroundColor("purple");
} else {
	this.style.backgroundColor("black");
}
					 })