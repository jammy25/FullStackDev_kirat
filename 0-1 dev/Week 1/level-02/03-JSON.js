// JSON(JavaScript Object Notation) - is used to convert data from string to obj(parse) and vice versa(stringify)

function jsonMethods(jsonString){
    console.log("Original JSON String:", jsonString);
    // console.log(sampleJSONString["name"]) -> O/P - undefined, since string do not have property like obj so not accessible

    // Parsing JSON String to Javascript Object
    let parseObject = JSON.parse(jsonString);
    console.log("After parsing the obj we get is:", parseObject);
    console.log(parseObject["age"]); // str to obj so the age can be access from obj property

    // Stringify Javascript Object to JSON String
    let stringObject = JSON.stringify(parseObject);
    console.log("After stringify we again converted obj to string which is:", stringObject);
}

const sampleJSONString = '{"name": "Kishan", "age": "24", "hobbies": {"sports": "cricket"}}';
jsonMethods(sampleJSONString);
