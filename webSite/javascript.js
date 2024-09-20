

function alertMs() {
    var name = "Shoaib";
    var roll = 1930;
    console.log(name);
    console.log(roll);
    if (roll < 2000 && roll > 1000) {
        console.log("BSCS Student");
    }
    var values = document.getElementById('user').value;
    document.getElementById('p1').value = values;
}
function calculator() {
    var a = parseFloat(document.getElementById('aInput').value);
    var op = document.getElementById('opInput').value;
    var b = parseFloat(document.getElementById('bInput').value);
    var result = 0.0;
    switch (op) {
        case '-':
            result = a - b;
            break;
        case '+':
            result = a + b;
            break;
        case 'x':
        case 'X': 
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                console.log("Error: Division by zero");
                return;
            }
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
        default:
            console.log("Unsupported operator: " + op);
            return;
    }

    document.getElementById('result').value = result; // Display the result
}

function table() {
    var tb = parseFloat(document.getElementById('tableInput').value)
    var en = parseFloat(document.getElementById('endInput').value);
    var start = parseFloat(document.getElementById('startInput').value);
    var result = "";
    for (var i = start; i <= en; i++) {
        result += tb + " X " + i + " = " + i * tb + "\n";
        document.getElementById('resultOutput').innerHTML = '<pre>'+result+'</pre>';
    }
}
var arrName = [""];
var arrRoll = [""];
var arrDpt = [""]
var i = 0;
function inputFun() {

    var name = document.getElementById('nameInput').value;
    var roll = document.getElementById('rollInput').value;
    var dpt = document.getElementById('dptInput').value;
    arrName[i] = name;
    arrRoll[i] = roll;
    arrDpt[i] = dpt;
    i++;
    Display();
}
function Display() {
    var result = "";
    for (var j = 0; j < i; j++) {
        result += arrName[j] + "     " + arrRoll[j] + "      " + arrDpt[j]+'\n';
        document.getElementById('rowData').innerHTML ='<pre>'+result+'</pre>';
    }

}