/*
	@alejandro_mur
	https://www.mamutlove.com
	v2.0.0
	2019/01/10
	HEXADECIMAL COLOUR
	RGB (pattern) => R: xx G: xx B: xx
*/

const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const root = document.querySelector('body');
const title = document.querySelector('.module__text');		

function getRandomNumber(n = 2) {
	return 1 + (Math.floor(Math.random() * n));
}

function isOdd(n) {
	if (n % 2 === 0) {
		return 'letters';
	} else {
		return 'numbers';
	}	
}

function getRandomItem(str) {
	let itemPosition = 0;
	let item;
	if ( str === 'letters' ) {
		itemPosition = getRandomNumber(letters.length - 1);
		item = letters[itemPosition];
	} else {
		itemPosition = getRandomNumber(numbers.length - 1);
		item = numbers[itemPosition];
	}
	return item;
}

class RandomColour {

	generateRandomColour() {
		this.colour = '#';

		for(let i = 0; i < 6; i++) {
			let randomNumber = getRandomNumber(2);
			let letterOrNumber = isOdd(randomNumber);
			let randomItem = getRandomItem(letterOrNumber);
			this.colour += randomItem;
		}

		return this.colour;
	}

	applyRandomColour(randomColour) {
		root.style.setProperty('--colour-generated', randomColour);
		title.innerHTML = randomColour;
	}
};

const rc = new RandomColour();

const button = document.querySelector('.js-getcolour');
button.addEventListener('click', () => {
	rc.applyRandomColour(rc.generateRandomColour());
});
