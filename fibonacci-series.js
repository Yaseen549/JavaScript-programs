function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:

    // my solution start

    var a = 0;
    var b = 1;

    var fibos = [];

    if(n === 1){
      fibos=[0];
      return fibos;
    }
    else if(n === 2){
      fibos = [0, 1];
      return fibos;
    }
    else{
       fibos = [0, 1];
       for(var i = 0; i <= n - 3; i++){

      var fibo = a + b;
      fibos.push(fibo);
      
      a = b;
      b = fibo; 
    }
    
    }
    return fibos;

    // my solution end
    
    // short solution

    // var output = [];
    // if (n === 1){
    //   output = [0];
    // }
    // else if( n === 2){
    //   output = [0, 1];
    // }
    // else {
    //   output = [0, 1];
      
    //   for(var i = 0; i < n; i++){
    //     output.push(output[output.length - 2] + output[output.length - 1])
    //   }
    // }

    // return output;
    
  
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

var output = fibonacciGenerator(5);
console.log(output);