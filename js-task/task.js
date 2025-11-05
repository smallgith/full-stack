let buttonContainer = document.querySelector(".buttons-container");
let display = document.querySelector(".display");

// second task

let billAmount = document.querySelector('#bill_amount')
let billPer = document.querySelector('#bill_per')
let totalSpan = document.querySelector('.totalSpan')
let calculateBtn = document.querySelector('.calculate_btn')

// Third task

let date = document.querySelector('#date')
let ageBtn = document.querySelector('.ageBtn')
let ageSpan = document.querySelector('.ageSpan')
let ageMonth = document.querySelector('.ageMonth')
let ageDate = document.querySelector('.ageDate')

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

// Second task

function billamountData(){
  let billData=Number(billAmount.value)
  let billPerData=Number(billPer.value)
  let amountCal = (billData * billPerData) / 100
  let totalAmount = billData + amountCal
  totalSpan.textContent = totalAmount
}

calculateBtn.addEventListener('click',billamountData)

// Third task

function ageData(){
  let age = date.value
  console.log(age)
  let year = age.split("-")[0];
  let currentTime = new Date()
  let currentYear = currentTime.getFullYear()
  let currentMonth = currentTime.getMonth() 
  let currentDate = currentTime.getDate() 
  let month = age.split("-")[2]
  let cdate = age.split("-")[1]
  console.log(currentYear)
  const ageCount = currentYear - year
  const ageMonthCount = currentMonth + 1 - month
  const ageDateCount = currentDate - cdate

  ageSpan.textContent = ageCount
  ageMonth.textContent = ageMonthCount
  ageDate.textContent = ageDateCount
}

ageBtn.addEventListener('click',ageData)

