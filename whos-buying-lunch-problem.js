function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    
    // names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var numbers = names.length;
    var randomName = Math.random(numbers);


    randomName = randomName * names.length;
    
    randomName = Math.round(randomName);
     

    names = names[randomName];
    
    return names + " is going to buy lunch today!";   

/******Don't change the code below*******/    
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"])