// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// push
function getPush(arr, element){
    console.log("Original Array", arr);

    arr.push(element)
    console.log("After Push", arr);
}
getPush([1, 2, 3], 4);

// pop

function examplePop(arr){
    console.log("Original Array", arr);

    arr.pop()
    console.log("After Pop", arr);
}
examplePop([1, 2, 3]);

// shift

function exampleShift(arr){
    console.log("Original Array", arr);

    arr.shift();
    console.log("After Shift", arr);
}
exampleShift([1, 2, 3]);

// unshift

function exampleUnshift(arr, element){
    console.log("Original Array", arr);

    arr.unshift(element)
    console.log("After Unshift", arr);
}
exampleUnshift([1, 2, 3], 0);

// splice

let arrDC = ["Batman", "Flash", "Superman", "Wonder Woman", "Aquaman"]
arrDC.splice(2, 0, "Black Superman");
console.log(arrDC);

// slice

function exampleSlice(arr, start, end){
    console.log("Original Array", arr);
    
    console.log("After Slice", arr.slice(start, end))
}
exampleSlice(["Kakashi", "Sauske", "Naruto", "Sakura"], 0, 3);

// Concat

function exampleConcat(arr1, arr2){
    console.log("Original Array", arr1, arr2);
    console.log("After Concat", arr1.concat(arr2));
}
exampleConcat(["Reed Richards", "Black Bolt", "Captain Marvel", "Charles Xavier"], ["Karl Mordo", "Captain America"]);

// forEach

function exampleForEach(arr){
    console.log("Original Array", arr);

    arr.forEach(function(item, index){
        console.log(index, ":", item);
    });
}
exampleForEach(["HTML", "CSS", "JS"])