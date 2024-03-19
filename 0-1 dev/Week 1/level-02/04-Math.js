function mathMethods(value) {
    console.log("Original value:", value);

    let roundedValue = Math.round(value);
    console.log("After rounnd():", roundedValue);

    let floorVal = Math.floor(value);
    console.log("After floor():", floorVal);
    
    let ceilVal = Math.ceil(value);
    console.log("After ceil():", ceilVal);
    
    let randomVal = Math.random();
    console.log("Random value:", randomVal);

    let maxValue = Math.max(5, 10, 15);
    console.log("Maximum value is", maxValue);
    
    let minValue = Math.min(5, 10, 15);
    console.log("Minimum value is", minValue);

    let powerVal = Math.pow(value, 2);
    console.log("Power of", value, "is", powerVal);

    let sqrtVal = Math.sqrt(value);
    console.log("Square root of", value, "is", sqrtVal);
}

mathMethods(3.14);