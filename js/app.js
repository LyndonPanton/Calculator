let year = document.getElementById("year");
year.textContent = (new Date()).getFullYear();

let display = document.getElementById("display");
let info = document.getElementById("info");
let close = document.getElementById("close");

info.addEventListener("click", show);
close.addEventListener("click", hide);

let calcString = "";
let memoryValue = 0;
let pointAllowed = true; 

let buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", press);
}

function flash() {
	display.style.backgroundColor = "#FF0000";

	setTimeout(function() {
		display.style.backgroundColor = "#FFFFFF";
	}, 100);
}

function hide() {
	let modal  = document.getElementById("modal");
	modal.style.display = "none";
	document.body.style.backgroundColor = "#FFFFFF";

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", press);
	}
}

function press() {
	switch(this.textContent) {
		case "mc":
			memoryValue = 0;
			break;
		case "m+":
			if (!isNaN(calcString[calcString.length - 1]) || calcString[calcString.length - 1] == ".") {
				memoryValue = memoryValue + eval(display.textContent);
			} else {
				flash();
			}
			break;
		case "m-":
			if (!isNaN(calcString[calcString.length - 1]) || calcString[calcString.length - 1] == ".") {
				memoryValue = memoryValue - eval(display.textContent);
			} else {
				flash();
			}		
			break;
		case "mr":
			calcString = memoryValue;
			display.textContent = calcString;
			break;
		case "C":
			calcString = ``;
			display.textContent = calcString;
			pointAllowed = true;
			break;
		case "<=":
			if (calcString == "") {
				flash();
			}

			if (calcString[calcString.length - 1] == ".") {
				pointAllowed = true;
			}

			calcString = `${calcString.substring(0, calcString.length - 1)}`;
			display.textContent = calcString;
			break;
		case "%":
			if (display.textContent !== "") {
				display.textContent = eval(display.textContent) / 100;
				calcString = display.textContent;
			}
			break;
		case "=":
			if (calcString[calcString.length - 1] == "+" || calcString[calcString.length - 1] == "-" || calcString[calcString.length - 1] == "x" || calcString[calcString.length - 1] == "/") {
				flash();
			} else {
				let timesRegex = /x/gi;
				calcString = calcString.replace(timesRegex, "*");

				display.textContent = eval(calcString);
				calcString = display.textContent;
			}
			break;
		default:
			if (this.textContent == Number(this.textContent)) {
				calcString = `${calcString}${this.textContent}`;
			} else if (this.textContent == "+" || this.textContent == "-" || this.textContent == "x" || this.textContent == "/") {
				if (calcString[calcString.length - 1] == "+" || calcString[calcString.length - 1] == "-" || calcString[calcString.length - 1] == "x" || calcString[calcString.length - 1] == "/" || calcString[calcString.length - 1] == "." || display.textContent == "") {
					flash();
				} else {
					calcString = `${calcString}${this.textContent}`;
					pointAllowed = true;
				}
			} else if (this.textContent == ".") {
				if (pointAllowed) {
					calcString = `${calcString}.`;
					pointAllowed = false;
				} else {
					flash();
				}
			} else {
				calcString = `${calcString}${this.textContent}`;
			}

			display.textContent = calcString;
	}
}

function show() {
	let modal = document.getElementById("modal");
	modal.style.display = "block";
	document.body.style.backgroundColor = "#DDDDDD";

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].removeEventListener("click", press);
	}
}