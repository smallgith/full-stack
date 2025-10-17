// Button Click Alert
document.querySelector('#btnClick')?.addEventListener('click', () => {
    alert("Hello world for external js");
});

// Light Bulb Toggle
const lumpImg = document.getElementById('lump_img');
document.getElementById('onLump')?.addEventListener('click', () => {
    lumpImg.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
});
document.getElementById('offLump')?.addEventListener('click', () => {
    lumpImg.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
});

// Array Example
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(arr[arr.length - 1]);

// Hoisting Example
hello();
function hello() {
    var a;
    console.log("answer is a = ", a);
    a = 10;
}

// Bind Example
const person = {
    name: "Rahul",
    greet() {
        console.log("Hello " + this.name);
    }
};
const greetFnBound = person.greet.bind(person);
greetFnBound();

// Pattern Generator (Secure version - no innerHTML)
const pattern = document.querySelector('#pattern');
const patternDisplay = document.querySelector('.patternDisplay');
document.querySelector('.patterBtn')?.addEventListener('click', () => {
    const patterns = parseInt(pattern.value);
    patternDisplay.innerHTML = ""; // Clear old content
    for (let i = 1; i <= patterns; i++) {
        const line = document.createElement("div");
        line.textContent = String(i).repeat(i);
        patternDisplay.appendChild(line);
    }
});

// Increment Test
var ab = 1;
console.log(ab++); // post-increment
let b = 1;
console.log(++b); // pre-increment

// While Loop
let output = "";
let i = 1;
while (i < 10) {
    output += i;
    i++;
}
console.log(output);

// Cars Array
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
cars.forEach(car => console.log(car));

// String charAt & at
let msg = "Hello world";
console.log(msg.charAt(2));
console.log(msg.at(2));

// Concat Example
let first = "Hello";
let second = "World";
console.log(first + " " + second);

// Split Example
let sample = "Hello";
const myArr = sample.split("");
myArr.forEach(char => console.log(char));

// Word Split Loop
let sentence = "hello world is the best for everyone";
sentence.split(" ").forEach(word => console.log(word));

// Infinity Example
let aa = 10 / 0;
console.log(aa);

// Function Example
function fun(name, age) {
    console.log(name, age);
}
fun("Shubham", 22);

// Date Example
console.log(new Date(2004));
