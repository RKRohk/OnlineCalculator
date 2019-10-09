var buttons = document.getElementsByClassName("bttn");
var textField = document.getElementById("output");
textField.value = "";
var equals = document.getElementById("btnEquals");
var operationButtons = ['+','-','x','/'];
var operation;
var arg1,arg2;
var resultGiven = false;
$("button").click(function(){
    if(operationButtons.includes(this.textContent)){
        arg1 = parseFloat(textField.value);
        operation = this.textContent;
        console.log(arg1);
    }
    if(resultGiven){
        textField.value = '';
        resultGiven = false;
    }
    textField.value += this.textContent;
})
$("#btnAC").click(function() {
    textField.value = '';
})
equals.addEventListener("click",function(event){
    arg2 = textField.value.substring(textField.value.indexOf(operation)+1,textField.value.length-1);
    textField.value += operations(arg1,parseFloat(arg2),operation);
    resultGiven = true;
})
