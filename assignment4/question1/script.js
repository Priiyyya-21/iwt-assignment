let result = document.getElementById("result");

function numberClicked(number) {
    if (result.value === "0") {
        result.value = number;
    } else {
        result.value += number;
    }
}

function operatorClicked(operator) {
    result.value += operator;
}

function clearClicked() {
    result.value = "0";
}

function equalClicked() {
    result.value = eval(result.value);
}
