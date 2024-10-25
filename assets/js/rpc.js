const options = ["Taş","Kağıt","Makas"];
let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", getResult);
paperBtn.addEventListener("click", getRandom);
scissorsBtn.addEventListener("click", getRandom);

function getResult(result){
    const computerOption = getRandom();

    if(result === computerOption){
        return "Berabere"
    }
}

function getRandom(){
    const computerChoice = options.at(Math.floor(Math.random() * 3));
    btnComputer.innerText =computerChoice;
}