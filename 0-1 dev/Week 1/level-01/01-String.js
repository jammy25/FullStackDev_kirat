// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Length
function getLength(str){
    console.log("Original string:", str);
    console.log("Length:", str.length);
}

getLength("Hello World");

// indexOf()

function getIndex(str, target){
    console.log("Original string:", str);
    console.log("Index of", target, "is", str.indexOf(target));
}
getIndex("Monkey D Luffy", "Luf");
getIndex("Monkey D Luffy", "Mugiwara");

// lastIndexOf

function FindIndex(str, target){
    console.log("Original string:", str);
    console.log("Index of", target, "is", str.lastIndexOf(target));
}

FindIndex("Gomu Gomu No", "Gomu");

// Slice

function getSlice(str, start, end){
    console.log("Original String:", str);
    console.log("Slice of", str, "is", str.slice(start, end));
}

getSlice("WhiteBeard", 5, 9);

// replace

function findReplace(str, target, replacement){
    console.log("Not his real name:", str);
    console.log("Real name:", str.replace(target, replacement));
}

findReplace("Monkey D Lucy", "Lucy", "Luffy");

// split

function getSplit(str, seperator){
    console.log("String Trio:", str);
    console.log("Array Trio:", str.split(seperator));
}

getSplit("Luffy Zoro Sanji", " ");

// trim

function trimString(str){
    console.log("Original string:", str);
    console.log("After trim:", str.trim());
}

trimString("     Charlie Puth  ");

// toUpperCase

function toUpper(str){
    console.log("Original string:", str);
    console.log("Final string:", str.toUpperCase());
}

toUpper("AttenTion");