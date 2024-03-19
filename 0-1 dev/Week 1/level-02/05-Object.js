function objectMethods(obj) {
    console.log("Original object:", obj);

    let key = Object.keys(obj);
    console.log("The keys in the obj are:", key);

    let value = Object.values(obj);
    console.log("The values in the obj are:", value);

    let entries = Object.entries(obj);
    console.log("The entries of the obj are:", entries);

    let hasOwnProp = obj.hasOwnProperty("key2");
    console.log("Obj has key2 in it:", hasOwnProp);

    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("Adding new pair in the obj:", newObj);
}

const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
};

objectMethods(sampleObject)