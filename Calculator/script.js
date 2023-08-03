let screenValue = "0";

function updateScreen() {
    const screen = document.getElementById("output");
    screen.innerText = screenValue;
}

function appendToScreen(value) {
    if (screenValue === "0") {
        screenValue = value;
    } else {
        screenValue += value;
    }
    updateScreen();
}

function clearScreen() {
    screenValue = "0";
    updateScreen();
}

function evaluateExpression() {
    try {
        screenValue = eval(screenValue).toString();
    } catch (error) {
        screenValue = "Error";
    }
    updateScreen();
}

function deleteLastCharacter() {
    if (screenValue.length === 1) {
        screenValue = "0";
    } else {
        screenValue = screenValue.slice(0, -1);
    }
    updateScreen();
}
updateScreen();
function handleKeyPress(event) {
    const key = event.key;

    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        appendToScreen(key);
    } else if (key === "Enter") {
        evaluateExpression();
    } else if (key === "Delete" || key === "Backspace") {
        deleteLastCharacter();
    } else if (key === "Escape") {
        clearScreen();
    }
}

document.addEventListener("keydown", handleKeyPress);