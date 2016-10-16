/*
	@alejandro_mur
	http://www.mamutlove.es
	v1.1.0
	2016/10/16
	HEXADECIMAL COLOUR
	RGB (pattern) => R: xx G: xx B: xx
*/

var getRandomColor = {
	letters : ["A","B","C","D","E","F"],
	numbers : ["0","1","2","3","4","5","6","7","8","9"],
	body : document.querySelector("body"),
	colourName : document.querySelector(".module__title"),
	randomColor : "#",
	init : function () {
		this.randomColor = "#";
		this.selectColour(this.randomColor);
	},
	selectColour : function () {
		for(var i = 0; i < 6; i++) {			
			var num = this.getRandomNumber(2);
			var characterChoosen = this.evenOrOdd(num);
			var position = this.getRandomNumber(characterChoosen);
			this.getCharacterFromArray(characterChoosen,position);
		}
	},
	getRandomNumber : function (n){
		if(n == "letters"){
			n = this.letters.length;
		}else if(n == "numbers"){
			n = this.numbers.length;
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
		var arr = [];
		if(markArr == "letters"){
			arr = this.letters;
		}else if(markArr == "numbers"){
			arr = this.numbers;
		}
		this.randomColor += arr[pos-1];
		this.applyColour(this.randomColor);
	},
	applyColour : function (colour) {
		this.colourName.innerHTML = colour;
		this.body.style.backgroundColor = colour;
	}
}

var buttonGetRandomColor = document.querySelector(".js-getcolour");

// LAUNCH OBJ
getRandomColor.init();

// CHANGE COLOUR ON CLICK
buttonGetRandomColor.addEventListener("click", function () {
	getRandomColor.init();
}, false);