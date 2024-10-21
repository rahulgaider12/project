const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialchars = ["%", "*", "/", "-", "+", "="]

let output = "";


const calculate = (btnvalue) => {
    if(btnvalue === "=" ){
        //if output has '%', replace with '/100' before evaluting.
        output = eval(output.replace("%", "/100"));
    }else if(btnvalue === "AC"){
        output = ""
    }else if(btnvalue === "DEL"){
        //if del button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
    } else {
        // if output is empty and button is specialchaars then return
        if (output === "" && specialchars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value) );
});