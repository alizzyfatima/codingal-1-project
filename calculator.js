//Get the screen areas
let history = document.getElementById("history-value");
let output = document.getElementById("output-value");

//show something in the history
function showHistory(text){
    history.innerText = text;
}
//show something in the output
function showOutput(text){
   output.innerText = text;
}
//remove commas from number
function removeCommas(text){
    return Number(text.replace(/,/g,""))
}
//when you click an operator(+ - x = C CE)
let operatorButtons = document.getElementByIdClassName("operator");
for( let i = 0 ; i<operatorButtons.lenght; i++){
    operatorButtons[1].onclick = function(){
        let out = output.innerText;
        let his = history.innerText;
        
        if(this.id ==="clear"){
            showOutput("");
            showHistory("");
        }else if ( this.id === "backspace"){
            out = out.slice(0,-1);
            showOutput(out);
        }else if ( this.id === "="){
            let fullMath = his+removeCommas(out);
            let answer = eval(fullMath);
            showOutput(answer);
            showHistory("");
       } else{
        if( out !==""){
            his = his +removeCommas(out)+ this.id;
            showHistory(his);
            showOutput("")
        }
       }
};
}
//when you click a number ( 0-9)
let numberButton =document.getElementByIdClassName("number");
for( let i = 0; i < numberButton.lenght; i++){
    numberButton[i].onclick = function() {
        let out = output.innerText;
        out = out + this.id;
        showOutput(out);
    };
}
