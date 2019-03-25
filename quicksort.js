var Benchmark = require("benchmark");
// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================
var suite = new Benchmark.Suite();

suite
  // Add the function 'linearSearch' to the suite.
  .add("Selection sort", function SelectionSort() {

// Case 1 - Small Set of Numbers
var arraySize = 20;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ALGORITHM
// ================================================
// for each (unsorted) partition set first element as pivot 
function quickSort(items){
    if(items.length <= 1){
        return items
    } else {
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = items.pop();
        var length = items.length;

        for(var i=0; i < length; i++){
            if(items[i] <= pivot){
                left.push(items[i])
            } else {
                right.push(items[i])
            }
        }
        return newArray.concat(quickSort(left), pivot, quickSort(right))
    }
}



// FUNCTION CALL
// ================================================
// console.log("PRE-SORT");
// console.log(array.join(" "));
// console.log("---------------------------");
// console.log("POST-SORT");
// console.log(quickSort(array).join(" "));

})
.on("start", function start() {
  console.log("Beginning benchmark...");
})

// On the 'complete' event, run the 'report' function.
.on("complete", function report() {
  // Get successful benchmark.
  var benchmark = Benchmark.filter(this, "successful")[0];

  console.log(
    "On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete."
  );
})

// Run the test!
.run();