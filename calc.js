let num1 = null;
let operation = null;
let num2 = null;
function addTo(a) {
    if (operation == null) {
        if (num1 == null) {
            num1 = 0;
        }
        num1 *= 10;
        num1 += a;
        display();
    }
    else {
        if (num2 == null) {
            num2 = 0;
        }
        num2 *= 10;
        num2 += a;
        display();
    }
}
function operationChosen(a) {
    operation = a;
    display();
}

function display() {
    document.getElementById("output").innerHTML = num1 + operation + (num2 != null ? num2 : "");
}

function execute() {
    if (num1 != null && num2 != null) {
        if (operation == "+") {
            document.getElementById("output").innerHTML = num1 + num2;
        }
        if (operation == "-") {
            document.getElementById("output").innerHTML = num1 - num2;
        }
        if (operation == "x") {
            document.getElementById("output").innerHTML = num1 * num2;
        }
        if (operation == "/") {
            document.getElementById("output").innerHTML = num1 / num2;
        }
    }
    else if (num1 != null) {
        document.getElementById("output").innerHTML = num1;
    }
    num1 = null;
    num2 = null;
    operation = null;
}

function clean() {
    num1 = null;
    num2 = null;
    operation = null;
    document.getElementById("output").innerHTML = "Try me!";
}