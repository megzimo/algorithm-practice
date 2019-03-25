// You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.

function test_divisors(num1, num2){

    var output = [];

    for(var i=num1; i<=num2; i++){

        output.push(i)

        if( i % 3 === 0) {
            output.push('THR33!!');
        } 
    }
    console.log("output "+ output)
    return output
}

test_divisors(2, 41)
document.getElementById("divi").innerHTML += test_divisors(2, 41)


// -----------------------------------------------------------------------------------------------------------FIZZBUZZ----------------------------------------------------------------------------------------------------------- //


var x;
for (var i=1; i<=50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    x= `~*~* fizzbuzz ~*~*`
    document.getElementById("js").innerHTML += x;
  } else if (i % 3 === 0) {
      document.getElementById("js").innerHTML += `~~ Fizz ~~`;
  } else if (i % 5 === 0) {
    document.getElementById("js").innerHTML += ` ** Buzz ** `;
  } else {
      document.getElementById("js").innerHTML += i + `*~*~`;
  }
}  
