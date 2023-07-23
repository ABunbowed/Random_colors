
$("button").click(function () { 
    var randomNumber = Math.floor(Math.random() * 256)
    var randomNumber2 = Math.floor(Math.random() * 256)
    var randomNumber3 = Math.floor(Math.random() * 256)
    colorCombo = randomNumber.toString()+ ", " + randomNumber2.toString()+ ", " + randomNumber3.toString()
    $("body").css("background-color","rgb(" + randomNumber + "," + randomNumber2 + "," + randomNumber3 + ")")
    $("h2").css("color", "rgb(" + randomNumber + "," + randomNumber2 + "," + randomNumber3 + ")")   
    $("span").text(colorCombo)
});