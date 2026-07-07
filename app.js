let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

// user generate choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});

// Computer generate choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#1A1A2E";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice.charAt(0).toUpperCase() + compChoice.slice(1)} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice =", userChoice)
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "rock" ? true : false;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}