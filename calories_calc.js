function getDailyCalories() {
    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);
    const age = Number(document.getElementById('age').value);
    var activityCoefficient = document.getElementById('activityCoefficient');
    var activityValue = activityCoefficient.value; 
    var sex = document.getElementsByName('sex');
    var result = (10 * weight) + (6.25 * height) - (5 * age);

       for(var i=0; i<sex.length; i++){
        if (sex[i].checked){
            var gender = sex[i].value;
            break;
        }
       }
    
    if (gender == "man"){
        result = result + 5;
    }
    if (gender == "woman"){
        result = result - 161;
    }

    result *= activityValue;

    const resultDiet = Math.round(Math.round(result)-(Math.round(result)/100*10));
    const fibers = Math.round(result / 10 * 3 / 4);
    const fats = Math.round(result / 10 * 2 / 9);
    const carbs = Math.round(result / 10 * 5 / 4);
    const fibersDiet = Math.round(resultDiet / 10 * 4 / 4);
    const fatsDiet = Math.round(resultDiet / 10 * 3.5 / 9);
    const carbsDiet = Math.round(resultDiet / 10 * 2.5 / 4);


    document.getElementById('result').innerHTML = Math.round(result);
    document.getElementById('resultDiv').style.display = "block";

    document.getElementById('resultDiet').innerHTML = resultDiet;
    document.getElementById('resultDietDiv').style.display = "block";

    document.getElementById('fibers').innerHTML = fibers;
    document.getElementById('fibersDiv').style.display = "block";
    document.getElementById('fats').innerHTML = fats;
    document.getElementById('fatsDiv').style.display = "block";
    document.getElementById('carbs').innerHTML = carbs;
    document.getElementById('carbsDiv').style.display = "block";

    document.getElementById('fibersDiet').innerHTML = fibersDiet;
    document.getElementById('fibersDivDiet').style.display = "block";
    document.getElementById('fatsDiet').innerHTML = fatsDiet;
    document.getElementById('fatsDivDiet').style.display = "block";
    document.getElementById('carbsDiet').innerHTML = carbsDiet;
    document.getElementById('carbsDivDiet').style.display = "block";
}