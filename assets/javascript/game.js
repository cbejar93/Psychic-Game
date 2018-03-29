 var alphas=["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var winc=[1,2,3,4,5]

 var wins=0;
 var losses=0;
 

 let guesses=10;

 var alpha = alphas[Math.floor(Math.random()*alphas.length)];
 console.log(alpha);



 function updatewin(){
     document.querySelector("#wins").innerHTML="Wins: "+wins
 };

 function updateloss(){
     document.querySelector("#losses").innerHTML="Losses:"+losses
 };

 function updateguess(){
     document.querySelector("#guesses").innerHTML="Guesses: "+ guesses
 };

 

 
document.querySelector(".userGuess").addEventListener("keypress", function(e){
    updatewin();
    updateloss();
    updateguess();
    

    var userGuesses=e.key.toLowerCase();
    
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
   
    }else{
        losses++;
        updateloss();
        guesses=10
        document.querySelector(".userGuess").value="";
        
    };
    

    


});
 