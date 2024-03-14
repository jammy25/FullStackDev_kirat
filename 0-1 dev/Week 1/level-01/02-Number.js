// Number: parseInt, parseFloat

// parseInt

function explainParseInt(value){
    console.log("Original Value:", value);
    console.log("Parsed Value:", parseInt(value));
}

explainParseInt("69");
explainParseInt("45px");
explainParseInt("3.14");

// parseFloat

function explainParseFloat(value1){
    console.log("Original Value:", value1);
    const result = parseFloat(value1);
    console.log("After Value:", result);
}

explainParseFloat("5");
explainParseFloat("4.41");
explainParseFloat("4px");