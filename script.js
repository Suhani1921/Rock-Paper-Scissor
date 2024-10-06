let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randmIdx=Math.floor(Math.random()*3);//to generate random value from 0  to 2
    return options[randmIdx];//array of choices
}

const drawGame=()=>{
    msg.innerText="Game is a Draw.Play again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`Congratulation!You Win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You Lost! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame= (userChoice) => {
    //To generate computers choice->modular way(spliting functions)
    const compChoice=genCompChoice();

    if(userChoice===compChoice)
    {
        //Draw Game
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock")
        {
            //compchoice-scissors or paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper")
        {
            //compchoice-rock or scissor
            userWin=compChoice==="scissor"?false:true;
        }else{
            //compchoice-rock or paper
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
