{

    let btnClick = document.querySelector('#btnClick')
    
    btnClick.addEventListener('click',()=>{
        
        alert("Hello world for external js")
    })
}

{
    let lumpImg = document.getElementById('lump_img')
    let onLump = document.getElementById('onLump')
    let offLump = document.getElementById('offLump')
    onLump.addEventListener('click',()=>{
        lumpImg.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
    })
    offLump.addEventListener('click',()=>{
        lumpImg.src = 'https://www.w3schools.com/js/pic_bulboff.gif'

        
    })

}
{

    // ? There are two type of value : 
    //  ? 1.Variable
    // ? 2.Fixed value 

    // ? Javascript has multiple keyword it works like action to be performed

    // ! JS Variable
    // ? 1.let 
    // ? 2.Const
    
    // ? 1.let 
        // Todo => let can be redeclare it
        // Todo => We may not initilizate it 
        // ? 2.Const
        // Todo => const can not be redeclare it 
        // Todo => We must be initilizate it 


    // ! identifier
    // ?identifier which means  name you give to a variable

    // let a = 10
    // here a is identifier


    let arr = [10,20,30,40,50,60,70,80,90]

    console.log(arr[arr.length-1]) 


    // ! There are four way to declare in js
    /*
       * 1.let
       * 2.const
       * 3.var
       * 4.automatically
    
    */
  
    // console.log("5"+"2"+3)
    // console.log("5"+"2"-3)
    // console.log(5+3-"2")

}

/*
Hosting => means declare like var or function befotr initilization
let a;
console.log(a) without init value
a = 10 
*/
hello()
function hello(){
    var a;
    console.log(a)
    a = 10
}
{

    const person = {
        name: "Rahul",
        greet: function () {
            console.log("Hello " + this.name);
        }
    };
    
    // const greetFn = person.greet;
    // greetFn(); 
    const greetFnBound = person.greet.bind(person);
    greetFnBound();
}

const a = 10


{
    let pattern = document.querySelector('#pattern')
    let patternDisplay = document.querySelector('.patternDisplay')
    
   
    
   let patterBtn = document.querySelector('.patterBtn');
   
   patterBtn.addEventListener('click', () => {
       let patterns = parseInt(pattern.value)
        let output = ""
 for(let i=1;i<=patterns;i++){
     let sum = ""
     for(let j=1;j<=i;j++){
        sum += i + ""
    }
    output += sum + "<br>"
    
    
}
patternDisplay.innerHTML = output;

});
}

{
    // console.log("Hello-5")
    let a = 1
    a++  // ? post increment
    console.log(a)
    
    let b = 1
    ++b  // ? pre increment
    console.log(b) 
}
{
    let text="";
let i = 1;

while (i < 10) {
  text += i;
  i++;
}
console.log(text)
}

{
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i])
}

}
{
    let text = "Hello world"
    console.log(text.charAt(2))  // It is used for extract character from string

    let text2 = "Hello world"
    console.log(text.at(2)) // Both are same
    
}
{
    let text = "Hello"
    let text1 = "World"
    console.log(text.concat(" ",text1))
}
{
    let text = "Hello";
const myArr = text.split("");

text = "";
for (let i = 0; i < myArr.length; i++) {
 console.log(myArr[i])
}
}
{
    let string = "hello world is the best for everyone"
    let arr = string.split(" ")
    for(i=0;i<arr.length; i++){
        console.log(arr[i])
    }
}
{
    let a = 10/0
    console.log(a)
}
{
    function fun(name,age){
        console.log(name,age)
    }
    fun("Shubham",22)
}
{
    const d = new Date(2004)
    console.log(d)
}