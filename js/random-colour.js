/*
	@alejandro_mur
	http://www.mamutlove.es
	v1.0.0
	2014/10/13
	HEXADECIMAL COLOUR
	RGB (pattern) => R: xx G: xx B: xx
*/

var getRandomColor = {
	letters : ["A","B","C","D","E","F"],
	numbers : ["0","1","2","3","4","5","6","7","8","9"],
	randomColor : "#",
	init : function () {
		this.randomColor = "#";
		getRandomColor.selectColour(randomColor);
	},
	selectColour : function () {
		for(var i = 0; i < 6; i++) {			
			var num = getRandomColor.getRandomNumber(2);
			var characterChoosen = getRandomColor.evenOrOdd(num);
			var position = getRandomColor.getRandomNumber(characterChoosen);
			getRandomColor.getCharacterFromArray(characterChoosen,position);
		}
	},
	getRandomNumber : function (n){
		if(n == "letters"){
			n = getRandomColor.letters.length;
		}else if(n == "numbers"){
			n = getRandomColor.numbers.length;
		}
		var num = 1+(Math.floor(Math.random()*n));
		return num;
	},
	evenOrOdd : function (num) {
		if(num % 2 == 0){
			return "letters";
		}else{
			return "numbers";
		}
	},
	getCharacterFromArray : function (markArr,pos) {
		var arr = undefined;
		if(markArr == "letters"){
			arr = getRandomColor.letters;
		}else if(markArr == "numbers"){
			arr = getRandomColor.numbers;
		}
		getRandomColor.randomColor += arr[pos-1];
		getRandomColor.applyColour(getRandomColor.randomColor);
	},
	applyColour : function (colour) {
		var body = document.querySelector("body");
		var colourName = document.querySelector(".module__title");
		colourName.innerHTML = colour;
		body.style.backgroundColor = colour;
	}
}

var buttonGetRandomColor = document.querySelector(".js-getcolour");
var launchColour = getRandomColor.init;

// LAUNCH OBJ
launchColour();

// CHANGE COLOUR ON CLICK
buttonGetRandomColor.addEventListener("click", function () {
	getRandomColor.init();
}, false);