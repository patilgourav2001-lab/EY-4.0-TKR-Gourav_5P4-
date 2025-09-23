// function


function add() {
    var a=20;
    var b=40;
    console.log(a+b);
    document.write(a+b);
    return a+b;    
}
add();

//arrow function method

const Add=() =>{
    a=40;
    b=90;
    document.write(a+b);
}
Add();

// hoisting : to declare the variable at the top


const ad=(a,b) => console.log(a+b);
ad(5,6);

let name="john";

function demo(){
    let name="Gourav"
    document.write(`Hello! My name is ${name}`)
}
document.write(`Hello! My name is ${name}`)
demo();

