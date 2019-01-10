/*
	@alejandro_mur
	https://www.mamutlove.com
	v2.0.0
	2019/01/10
	HEXADECIMAL COLOUR
	RGB (pattern) => R: xx G: xx B: xx
*/

const ITEMS = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const root = document.querySelector('body');
const title = document.querySelector('.module__text');

function getRandomNumber(n = 2) {
	return 1 + (Math.floor(Math.random() * n));
}

function getRandomItem() {
	let itemPosition = 0;	
	itemPosition = getRandomNumber(ITEMS.length - 1);

	return ITEMS[itemPosition];
}

class RandomColour {

	generateRandomColour() {
		let colour = '#';

		for (let i = 0; i < 6; i++) {
			let randomItem = getRandomItem();
			colour += randomItem;
		}

		return colour;
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
