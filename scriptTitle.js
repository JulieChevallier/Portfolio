class ScrambleTheText {
	constructor(getTitleMessage) {
		this.getTitleMessage = getTitleMessage;
		// this.chars = "*XM!E<HL+UI!HIKW__Q+A?";
		this.chars = "EHIKLMPSTUWXYZ?!!%*$@-_=+#~&<>_"
		this.updateLetterCharacters = this.updateLetterCharacters.bind(this);
	}
	setText(newText) {
		let oldText = this.getTitleMessage.innerText;
		let length = Math.max(oldText.length, newText.length);
		let promise = new Promise((resolve) => (this.resolve = resolve));

		this.queue = [];
		for (let i = 0; i < length; i++) {
			let from = oldText[i] || "";
			let to = newText[i] || "";
			let start = Math.floor(Math.random() * 40);
			let end = start + Math.floor(Math.random() * 40);
			this.queue.push({
				from,
				to,
				start,
				end
			});
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.updateLetterCharacters();
		return promise;
	}
	updateLetterCharacters() {
		let output = "";
		let complete = 0;
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = this.randomCharacter();
					this.queue[i].char = char;
				}
				output += `<span>${char}</span>`;
			} else {
				output += from;
			}
		}
		this.getTitleMessage.innerHTML = output;
		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.updateLetterCharacters);
			this.frame++;
		}
	}
	randomCharacter() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}


let onHover = false;


let TitleMessage = [
	"Computer Science",
	"Mathematics",
	"Cyber Security",
	"Game Development",
	"From Scratch",
	"Design"
];

let About = [
	"ABOUT ME",
	"ABOUT ME"
];

let Project = [
	"PROJECTS",
	"PROJECTS"
];

let Skill = [
	"SKILLS",
	"SKILLS"
];

let Contact = [
	"CONTACT",
	"CONTACT"
];
const time = 1500;
let getTitleMessage = document.querySelector(".banner .thatAfroGreetings");
let MessageEffect = new ScrambleTheText(getTitleMessage);

let getAbout = document.querySelector("#about .titleSection-n .title");
let AboutEffect = new ScrambleTheText(getAbout);

let getProject = document.querySelector("#projects .titleSection-b .title");
let ProjectEffect = new ScrambleTheText(getProject);

let getSkill = document.querySelector("#skills .titleSection-n .title");
let SkillEffect = new ScrambleTheText(getSkill);

let getContact = document.querySelector("#contact .titleSection-b .title");
let ContactEffect = new ScrambleTheText(getContact);

let counter = 0;
let nextMessage = () => {
	MessageEffect.setText(TitleMessage[counter]).then(() => {
		setTimeout(nextMessage	
		, time);
	});
	counter = (counter + 1) % TitleMessage.length;
};
nextMessage();

let counterTitle = 0;
let nextTitle = () => {
	if(onHover === false){
		AboutEffect.setText(About[counterTitle]).then(() => {
			setTimeout(nextTitle
			, time);
		});
		ProjectEffect.setText(Project[counterTitle]).then(() => {
			setTimeout(nextTitle
			, time);
		});
		SkillEffect.setText(Skill[counterTitle]).then(() => {
			setTimeout(nextTitle
			, time);
		});
		ContactEffect.setText(Contact[counterTitle]).then(() => {
			setTimeout(nextTitle
			, time);
		});
		counterTitle = (counterTitle + 1) % Contact.length;
	}
	else{
		setTimeout(nextTitle
		, time);
	}
};
nextTitle();

function hoverSkills() {
	const titleEl = document.querySelector('#skills .titleSection-n .title');
	onHover = true;
	
	let titleText = titleEl.textContent;
	function updateTitleText() {
	titleText = titleEl.textContent;
	}

	// Créer la règle CSS avec un sélecteur générique
	const newRule = `
	.titleSection-n .title:hover::before {
		position: absolute;
		z-index : -10;
		top: -5px;
		left: 5px;
		content: attr(data-title-text);
		opacity: 1;
		transition: opacity 0.5s ease-in-out;
		-webkit-text-fill-color: #030117;
	}
	`;

	// Créer une feuille de style pour contenir la règle CSS
	const styleEl = document.createElement('style');
	document.head.appendChild(styleEl);

	// Ajouter la règle CSS à la feuille de style
	styleEl.sheet.insertRule(newRule, 0);

	// Mettre à jour le texte du pseudo-élément toutes les demi-secondes
	setInterval(() => {
	updateTitleText();
	styleEl.sheet.cssRules[0].style.content = `'${titleText}'`;
	}, 10);
}


function hoverAbout() {
	const titleEl = document.querySelector('#about .titleSection-n .title');
	onHover = true;
	
	let titleText = titleEl.textContent;
	function updateTitleText() {
	titleText = titleEl.textContent;
	}

	// Créer la règle CSS avec un sélecteur générique
	const newRule = `
	.titleSection-n .title:hover::before {
		position: absolute;
		z-index : -10;
		top: -5px;
		left: 5px;
		content: attr(data-title-text);
		opacity: 1;
		transition: opacity 0.5s ease-in-out;
		-webkit-text-fill-color: #030117;
	}
	`;

	// Créer une feuille de style pour contenir la règle CSS
	const styleEl = document.createElement('style');
	document.head.appendChild(styleEl);

	// Ajouter la règle CSS à la feuille de style
	styleEl.sheet.insertRule(newRule, 0);

	// Mettre à jour le texte du pseudo-élément toutes les demi-secondes
	setInterval(() => {
	updateTitleText();
	styleEl.sheet.cssRules[0].style.content = `'${titleText}'`;
	}, 10);
}


function hoverContact() {
	const titleEl = document.querySelector('#contact .titleSection-b .title');
	titleEl.color = '#ffffff';
	onHover = true;
	
	let titleText = titleEl.textContent;
	function updateTitleText() {
	titleText = titleEl.textContent;
	}

	// Créer la règle CSS avec un sélecteur générique
	const newRule = `
	.titleSection-b .title:hover::before {
		position: absolute;
		z-index : -10;
		top: -5px;
		left: 5px;
		content: attr(data-title-text);
		opacity: 1;
		transition: opacity 0.5s ease-in-out;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 1px #ffffff;
	}
	`;

	// Créer une feuille de style pour contenir la règle CSS
	const styleEl = document.createElement('style');
	document.head.appendChild(styleEl);

	// Ajouter la règle CSS à la feuille de style
	styleEl.sheet.insertRule(newRule, 0);

	// Mettre à jour le texte du pseudo-élément toutes les demi-secondes
	setInterval(() => {
	updateTitleText();
	styleEl.sheet.cssRules[0].style.content = `'${titleText}'`;
	}, 10);
}


function hoverProjects() {
	const titleEl = document.querySelector('#projects .titleSection-b .title');
	titleEl.color = '#ffffff';
	onHover = true;
	
	let titleText = titleEl.textContent;
	function updateTitleText() {
	titleText = titleEl.textContent;
	}

	// Créer la règle CSS avec un sélecteur générique
	const newRule = `
	.titleSection-b .title:hover::before {
		position: absolute;
		z-index : -10;
		top: -5px;
		left: 5px;
		content: attr(data-title-text);
		opacity: 1;
		transition: opacity 0.5s ease-in-out;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 1px #ffffff;
	}
	`;

	// Créer une feuille de style pour contenir la règle CSS
	const styleEl = document.createElement('style');
	document.head.appendChild(styleEl);

	// Ajouter la règle CSS à la feuille de style
	styleEl.sheet.insertRule(newRule, 0);

	// Mettre à jour le texte du pseudo-élément toutes les demi-secondes
	setInterval(() => {
	updateTitleText();
	styleEl.sheet.cssRules[0].style.content = `'${titleText}'`;
	}, 10);
}


function hoverEnd(){
	onHover = false;
}


