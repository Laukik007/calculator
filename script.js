function buttonPressed(value) {
	document.getElementById("result").value += value;
}

var calculator = document.getElementById("calculator");
calculator.onkeyup = function (event) {
	//enter key
	event.preventDefault();
	if (event.keyCode === 13) {
		let x = document.getElementById("result").value;
		console.log(x);
		solve();
	} else {
		if (
			event.key == "0" ||
			event.key == "1" ||
			event.key == "2" ||
			event.key == "3" ||
			event.key == "4" ||
			event.key == "5" ||
			event.key == "6" ||
			event.key == "7" ||
			event.key == "8" ||
			event.key == "9" ||
			event.key == "+" ||
			event.key == "-" ||
			event.key == "*" ||
			event.key == "/"
		)
			document.getElementById("result").value += event.key;
	}
};
function solve() {
	try {
		let x = document.getElementById("result").value;
		let y = math.evaluate(x);
		if (isNaN(y)) {
			// Check if the result is NaN (e.g., division by zero)
			document.getElementById("result").value = "ERROR";
		} else {
			document.getElementById("result").value = y;
		}
	} catch (error) {
		// Handle any other errors that may occur during evaluation
		document.getElementById("result").value = "ERROR";
	}
}

// Function that clear the display
function clr() {
	document.getElementById("result").value = "";
}
