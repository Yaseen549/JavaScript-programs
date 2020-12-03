function bmiCalculator (weight, height) {
    var interpretation = weight / (height * height);
    interpretation = Math.round(interpretation);

    if ( interpretation < 18.5 ){
      return "Your BMI is " + interpretation + ", so you are underweight.";
    }
    else if (interpretation >= 18.5 && interpretation <= 24.9 ){
      interpretation = "Your BMI is " + interpretation + ", so you have a normal weight.";
    }
    else if (interpretation >= 25 && interpretation <= 29.9 ){
      return "Your BMI is " + interpretation + ", so you are overweight.";

    }
    else if (interpretation >= 30 && interpretation <= 34.9 ){
      return "Your BMI is " + interpretation + ", so you are obse.";

    }
    else if (interpretation >=35 ){
      return "Your BMI is " + interpretation + ", so you are Extremely Obse.";
    }
    return interpretation;
}

bmiCalculator(60,2);