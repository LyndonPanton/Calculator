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
			break;
		case "=":
			break;
		default:
	}
}