let buttonContainer = document.querySelector(".buttons-container");
let display = document.querySelector(".display");
function getData(text){
    if (display.innerText === "0" || display.innerText === "Error" || display.innerText === "Infinity") {
        display.innerText = text;
      return;
    }
    display.innerText = `${display.innerText}${text}`;
}
function clearData(){
    display.innerText = ''

}
function calculte(){
      try {
        display.innerText = eval(display.innerText);
      } catch (error) {
        display.innerText = "Error";
      }
}