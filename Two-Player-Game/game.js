
var y = Math.floor(Math.random() * 5 + 1);
var guess = 1;

document.getElementById("submitguess").onclick = function(){
    var a =document.getElementById("guessField_A").value;
    var b =document.getElementById("guessField_B").value;

    if(a>5 || b>5){
        alert("OKAY JON SNOW !!!! NUMBER BETWEEN 1-5");
    }
    else if (a==b && a!=y && b!=y){
        alert("OKAY YOU TWINS ,YOU ARE SOO WRONG !");
    }
    else if(a==y && b==y){
        alert("OKAY YOU TWINS ,YOU GUESSED IT RIGHT !");
    }
    else if(a==y){
        alert("CONGRATS PLAYER 1 ,YOU WON LIKE A CHAMP !");
    }
    else if(b==y){
        alert ("CONGRATS PLAYER 2 ,YOU WON LIKE A CHAMP !")
    }
    else{
        alert("OOPS SORRY!! TRY AGAIN");
    }
};






