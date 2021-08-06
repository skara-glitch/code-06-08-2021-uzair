function loadJsonFile(){
    const jsonContent = require("./test.json");
    var BMI;
    for (var i=0;i<jsonContent.length;i++) {
        var height = jsonContent[i].HeightCm/100;
        var weight = jsonContent[i].WeightKg
        BMI = weight/(height*height);
        if(BMI<=18.4){
            console.log("underweight");
            console.log("Malnutrition risk");
            console.log('\n')
        } else if(checkInBetween(BMI,18.5,24.9)){
            console.log(" Normal weight");
            console.log("Low risk");
            console.log('\n')
        }else if(checkInBetween(BMI,18.5,24.9)){
            console.log("Overweight");
            console.log("Enhanced risk");
            console.log('\n')
        }else if(checkInBetween(BMI,18.5,24.9)){
            console.log("Moderately obese");
            console.log("Medium risk");
            console.log('\n')
        }else if(checkInBetween(BMI,18.5,24.9)){
            console.log("Severely obese");
            console.log("High risk");
            console.log('\n')
        }else{
            console.log("Very Severely obese");
            console.log("Very high risk");
            console.log('\n')
        }
     }
}

function checkInBetween(num,min,max){
    return ((num-min)*(num-max) <= 0);
}
loadJsonFile();