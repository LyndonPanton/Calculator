let year = document.getElementById("year");
year.textContent = (new Date()).getFullYear();

let display = document.getElementById("display");
let info = document.getElementById("info");
let close = document.getElementById("close");

let calcString = "";

let buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", press);
}

function press() {
	switch(this.textContent) {
		case "mc":
			break;
		case "m+":
			break;
		case "m-":
			break;
		case "mr":
			break;
		case "C":
			break;
		case "<=":
			break;
		case "%":
			if (display.textContent !== "") {
				display.textContent = eval(display.textContent) / 100;
				calcString = display.textContent;
			}
			break;
		case "=":
			if (calcString[calcString.length - 1] == "+" || calcStrin[calcString.length - 1] == "-" || calcString[calcString.length - 1] == "x" || calcString[calcString.length - 1] == "/") {

			} else {
				let timesRegex = /x/gi;
				calcString = calcString.replace(timesRegex , "*");

				display.textContent = eval(calcString);
				calcString = display.textContent;
			}
			break;
		default:
			if (this.textContent == Number(this.textContent)) {
				calcString = `${calcString}${this.textContent}`;
			} else if (this.textContent == "+" || this.textContent == "-" || this.textContent == "x" || this.textContent == "/") {
				if (calcString[calcString.length - 1] == "+" || calcString[calcString - 1] == "-" || calcString[calcString - 1] == "x" || calcString[calcString - 1] == "/" || calcString[calcString - 1] == ".") {

				} else {
					calcString = `${calcString}${this.textContent}`;
				}
			} else if (this.textContent == ".") {

			} else {
				calcString = `${calcString}${this.textContent}`;
			}

			display.textContent = calcString;
	}
}