function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    var display = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(display);
    } catch (error) {
        document.getElementById("display").value = 'Erro';
    }
}