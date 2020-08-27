

//Detecting Button Press(i.e. using the mouse to press any of w, a, s, d, j , and l on the screen)
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //Having length here gives the number of drum classes.

for (var i = 0; i<numberOfDrumButtons; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){

		var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);

	});
}


//Detecting Button Press(i.e. using the keyboard to press any of w, a, s, d, j , and l)
document.addEventListener("keypress", function(event){
	makeSound(event.key);
	buttonAnimation(event.key);
});



//Converting the switch statement to a function that is used for both detection cases
function makeSound(key) {

		switch (key){
			case "w":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();	
			  break;

			case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();	
			  break;

			case "s":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();	
			  break;

			case "d":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();	
			  break;

			case "j":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();	
			  break;

			case "k":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();	
			  break;

			case "l":
				var kick = new Audio("sounds/kick-bass.mp3");
				kick.play();	
			  break;
			default: console.log(buttonInnerHTML);
		}
}


//Note the use of key words like "this", "key", "event" and "keypress".

function buttonAnimation(currentKey){
	var activeButton = document.querySelector("." + currentKey); //reason for concatenation is to create another class other than "drum"
		activeButton.classList.add("pressed");

	setTimeout(function(){
		activeButton.classList.remove("pressed");
	}, 100);
}