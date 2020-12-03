function beer(){

    number = 99;
    while (number >= 1){
        console.log(number + " bottles of beer on the wall, " + number + " bottles of beer.");
        console.log(" Take one down and pass it around, \b");
        number--;
        if(number === 0){
            console.log("No more, bottles on the wall. ");
        }
        else{
            console.log( number + " bottles on the wall. ");       
        }                
    }
}

beer();








