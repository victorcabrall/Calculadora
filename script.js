var btn0 = (document.getElementById("bt0").onclick = function () {
    digit(0);
});
var btn1 = (document.getElementById("bt1").onclick = function () {
    digit(1);
});
var btn2 = (document.getElementById("bt2").onclick = function () {
    digit(2);
});
digit;
var btn3 = (document.getElementById("bt3").onclick = function () {
    digit(3);
});
var btn4 = (document.getElementById("bt4").onclick = function () {
    digit(4);
});
var btn5 = (document.getElementById("bt5").onclick = function () {
    digit(5);
});
var btn6 = (document.getElementById("bt6").onclick = function () {
    digit(6);
});
var btn7 = (document.getElementById("bt7").onclick = function () {
    digit(7);
});
var btn8 = (document.getElementById("bt8").onclick = function () {
    digit(8);
});
var btn9 = (document.getElementById("bt9").onclick = function () {
    digit(9);
});
var btnDivided = (document.getElementById("btDivided").onclick = function () {
    operation("÷");
});
var btnPlus = (document.getElementById("btPlus").onclick = function () {
    operation("+");
});
var btnMinus = (document.getElementById("btMinus").onclick = function () {
    operation("-");
});
var btnTimes = (document.getElementById("btTimes").onclick = function () {
    operation("x");
});
var display = document.querySelector(".display");
var opr = true;
var value = "";
var beforeOp = "";
document.getElementById("btn-cls").onclick = function () {
    var valueArr = value.split("");
    value = valueArr.splice(0, valueArr.length - 1).join("");
    display.innerHTML = value;
    opr = true;
};
document.getElementById("btn-del").onclick = function () {
    value = "0";
    display.innerHTML = value;
    opr = true;
};
function digit(digit) {
    display.innerHTML += digit.toString();
    value += digit.toString();
}
function operation(op) {
    if (opr && +value != 0) {
        beforeOp = op;
        display.innerHTML += op;
        value += op;
        opr = false;
    }
    var _a = value.split(/\D/g), value1 = _a[0], value2 = _a[1];
    console.log(value1 + "||" + value2);
    if (+value1 !== 0 && +value2 !== 0) {
        if (beforeOp === "+") {
            value = (+value1 + +value2).toString();
        }
        else if (beforeOp === "-") {
            value = (+value1 - +value2).toString();
        }
        else if (beforeOp === "÷") {
            value = (+value1 / +value2).toString();
        }
        else if (beforeOp === "x") {
            value = (+value1 * +value2).toString();
        }
        display.innerHTML = value;
        beforeOp = "";
        opr = true;
    }
}
