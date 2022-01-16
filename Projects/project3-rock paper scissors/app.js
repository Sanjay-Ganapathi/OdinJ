let userScore = 0;
let computerScore = 0;


const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const res_para = document.getElementById("action-message");

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "computer".fontsize(3).sub();
function getComputerChoice(){
    const choices = ['r','p','s'];
    return choices[Math.floor(Math.random() * 3)];
}

function toWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}



function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML= `${toWord(user)}${smallUserWord} beats ${toWord(computer)}${smallCompWord} .`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() =>  document.getElementById(user).classList.remove('green-glow'),300);
    
}

function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML= `${toWord(computer)}${smallCompWord} beats ${toWord(user)}${smallUserWord} .`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'),300);
    
}

function draw(user,computer){    
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML= `${toWord(user)}${smallUserWord} equals ${toWord(computer)}${smallCompWord} . `;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(() =>  document.getElementById(user).classList.remove('grey-glow'),300);
    
}

function game(userChoice){
    if(userScore === 4 || computerScore === 4){
        if(userScore>computerScore){
            res_para.innerHTML="You won Champ!! 😍💪✨🔥".fontsize(20);
            userScore_span.innerHTML = 5;

        }else{
            res_para.innerHTML="You lost.Better luck next time champ.🌟⚡".fontsize(20);
            computerScore_span.innerHTML = 5;
        }
        return;
    }
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }

}

function main(){
    
    rock_div.addEventListener('click',function(){
        game("r");
    });
    paper_div.addEventListener('click',function(){
        game("p")
    });
    scissors_div.addEventListener('click',function(){
        game("s")
    });
}
main();

