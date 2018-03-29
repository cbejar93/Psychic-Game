//  This is the array the computer can pick from
 var alphas=["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//  I tried to do something crazy with a 4 loop here, its no used 
 var winc=[1,2,3,4,5]
// global definition of wins and losses, and guesses
 var wins=0;
 var losses=0;
 

 let guesses=10;
// computer picks a random letter the secound the web page is loaded
 var alpha = alphas[Math.floor(Math.random()*alphas.length)];
 console.log(alpha);


// These are the functions to update the global variables and the dom
 function updatewin(){
     document.querySelector("#wins").innerHTML="Wins: "+wins
 };

 function updateloss(){
     document.querySelector("#losses").innerHTML="Losses:"+losses
 };

 function updateguess(){
     document.querySelector("#guesses").innerHTML="Guesses: "+ guesses
 };

function resetwins(){
    document.querySelector("#wins").innerHTML="Wins: "+wins
}

//  This function starts the if conditions and game starts
document.querySelector(".userGuess").addEventListener("keypress", function(e){
//   Was not sure if you had to put these here, but I did just in case.
    updatewin();
    updateloss();
    updateguess();
    
// This grabs the key the user enters
    var userGuesses=e.key.toLowerCase();

    // if (wins > 5){
        // document.querySelector("#endgame").style.display="block";
    // }
// If Guesses are greater than zero this if statment has two possibilities, either win condition is meet. Or the guesses variable is decreased by one.
    if (guesses > 0){ 

        if(userGuesses === alpha){
            wins++;
            console.log(wins);
            updatewin();
            guesses=10;
            document.querySelector(".userGuess").value="";
            alpha= alphas[Math.floor(Math.random()*alphas.length)];
            console.log(alpha);
            
            }
         
        else{
            guesses--;
            //console.log(guesses);
            updateguess();
            document.querySelector(".userGuess").value="";
            
        };
//    Once guesses does not equal zero the loss condition becomes relevant 
    }else{
        losses++;
        updateloss();
        guesses=10
        document.querySelector(".userGuess").value="";
        
    };
    

    


});
 