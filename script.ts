let btn0 = (document.getElementById("bt0").onclick = () => {
  digit(0);
});
let btn1 = (document.getElementById("bt1").onclick = () => {
  digit(1);
});
let btn2 = (document.getElementById("bt2").onclick = () => {
  digit(2);
});
digit;
let btn3 = (document.getElementById("bt3").onclick = () => {
  digit(3);
});
let btn4 = (document.getElementById("bt4").onclick = () => {
  digit(4);
});
let btn5 = (document.getElementById("bt5").onclick = () => {
  digit(5);
});
let btn6 = (document.getElementById("bt6").onclick = () => {
  digit(6);
});
let btn7 = (document.getElementById("bt7").onclick = () => {
  digit(7);
});
let btn8 = (document.getElementById("bt8").onclick = () => {
  digit(8);
});
let btn9 = (document.getElementById("bt9").onclick = () => {
  digit(9);
});
let btnDivided = (document.getElementById("btDivided").onclick = () => {
  operation("÷");
});
let btnPlus = (document.getElementById("btPlus").onclick = () => {
  operation("+");
});
let btnMinus = (document.getElementById("btMinus").onclick = () => {
  operation("-");
});

let btnTimes = (document.getElementById("btTimes").onclick = () => {
  operation("x");
});


const display = document.querySelector(".display");
let opr: boolean = true;
let value: string = "";
let beforeOp: string = "";
document.getElementById("btn-cls").onclick = ()=>{
  const valueArr = value.split("")
  value = valueArr.splice(0, valueArr.length-1).join("")
  display.innerHTML = value
  opr = true;
}
document.getElementById("btn-del").onclick = ()=>{
  value = "0"
  display.innerHTML = value
  opr = true;
}
function digit(digit: number) {
  display.innerHTML += digit.toString();
  value += digit.toString();
}


function operation(op: string) {
  if (opr && +value != 0) { 
    beforeOp = op
    display.innerHTML += op;
    value += op;
    opr = false;
    
  }
  const [value1, value2] = value.split(/\D/g);
  console.log(value1+ "||"+ value2)
  if (+value1 !== 0 && +value2 !== 0) {
    if (beforeOp === "+") {
      value = (+value1 + +value2).toString()
    } else if (beforeOp === "-") {
      value = (+value1 - +value2).toString()
    } else if (beforeOp === "÷") {
      value = (+value1 / +value2).toString()
    } else if (beforeOp === "x") {
      value = (+value1 * +value2).toString()
    }
    display.innerHTML = value;
    beforeOp = ""
    opr = true;
  }
}
