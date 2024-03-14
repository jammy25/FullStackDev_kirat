// callback function

function calculateArithmetic(a, b, arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a, b)
    return ans
};
function sum(a, b){
    return (a + b);
};

const value = calculateArithmetic(1, 2, sum);
console.log(value);


// setTimeout, setInterval - callback fn

function greet(){
    console.log("hello world")
}

function greet1(){
    console.log("hello alien!");
}

setTimeout(greet, 1 * 1000)
setInterval(greet1, 3 * 1000)