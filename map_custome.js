let test = [1,2,3,4];
function myMap(arr,operation){
    var newArray = [];
    for(let i=0; i<arr.length; i++){
        newArray.push(operation(arr[i]));
    }
    return newArray;
}

var newTest = myMap(test, (item) => {
    return item * 2
});
console.log(newTest);