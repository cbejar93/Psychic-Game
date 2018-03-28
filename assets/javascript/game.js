 var alphas=["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 var wins=0;
 var losses=0;

 let guesses=10;

 var alpha = alphas[Math.floor(Math.random()*alphas.length)];
 console.log(alpha);

document.querySelector(".userGuess").addEventListener("keypress", function(e){

    var userGuesses=e.key;
    
    if (guesses > 0){
        if(userGuesses === alpha){
            wins++;
            console.log(wins);
        }else{
            guesses--;
            //console.log(guesses);
            document.querySelector(".userGuess").value="";
        }
    }else{
        losses++;
        guesses=10;
        //console.log(losses);
        document.querySelector(".userGuess").value="";
    }


});
 