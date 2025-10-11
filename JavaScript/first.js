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
