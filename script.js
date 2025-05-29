let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreW=document.querySelector("#user");
const compScorew=document.querySelector("#comp");

choices.forEach((choice)=>{

   
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id")
        playgame(userchoice);
    })
})
const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="game was draw.Play Again";
    msg.style.backgroundColor="";
    
}
const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    //computer choice
    const compChoice=genCompchoice();
    console.log("computer choice =",compChoice);
    if(userchoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin= compChoice==="Paper"?false:true;
        }
        else if(userchoice==="Paper"){
            userwin=compChoice==="Scissor"?false:true;
        }
        else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,compChoice,userchoice);
    }

};
const showWinner=(userwin,compChoice,userchoice)=>{
    if(userwin){
        userScore++;
        userScoreW.innerText=userScore;

        console.log("you win");
        msg.innerText=`you win.${userchoice} beats ${compChoice} `;
        msg.style.backgroundColor="#008000";
    }
    else{
        compScore++;
        compScorew.innerText=compScore;
        console.log("you lost");
        msg.innerText=`you lost ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="#FF0000";
    }
};
const genCompchoice=()=>{
    const options=["rock","Scissor","Paper"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


