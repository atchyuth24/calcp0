function submit1() {
    var a, b, c;
    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);
    c = a + b;
    document.getElementById("result").value = c;
}

function submit2() {
    var a, b, c;
    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);
    c = a - b;
    document.getElementById("result").value = c;
}

function submit3() {
    var a, b, c;
    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);
    c = a * b;
    document.getElementById("result").value = c;
}

function submit4() {
    var a, b, c;
    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);
    c = a / b;
    document.getElementById("result").value = c;
}

function submit5() {
    var a, b, c;
    a = Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);
    c = a % b;
    document.getElementById("result").value = c;
}