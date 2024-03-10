
const display =document.getElementById("barra");

function appendToDisplay(input){

    display.value += input;

}

function calculate(){
    try{

        display.value = eval(display.value);

    }catch(error){

        display.value = "Error";
    }


}

function clrearDisplay(){


    display.value="";
}