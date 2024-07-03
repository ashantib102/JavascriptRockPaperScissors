const getUserChoice= userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput=== 'rock' || userInput=== 'paper' || userInput=== 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('Please enter valid choice: rock, paper or scissors');
  }
}

//console.log(getUserChoice('rock'));

const getComputerChoice= () =>{
  const choice= Math.floor(Math.random()*3);
  if (choice===0){
    return 'rock';
  }
  if (choice===1){
    return 'paper';
  }
  if (choice===2){
    return 'scissors';
  }
}

//console.log(getComputerChoice());

const determineWinner= (userChoice, computerChoice) =>{
  if (userChoice === computerChoice){
    return 'Game was a tie!';
  }
  if (userChoice==='rock'){
    if(computerChoice === 'paper'){
      return 'Computer won';
    }
    else{
      return 'Congrats you won';
    }
  }

  if (userChoice==='paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won';
    }
    else{
      return 'Congrats you won';
    }
  }

  if (userChoice==='scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won';
    }
    else{
      return 'Congrats you won';
    }
  }

  if(userChoice === 'bomb'){
    return 'Congrats you won';
  }

}

//console.log(determineWinner('rock', 'scissors'));

const playGame = () => {
  const userChoice=getUserChoice('bomb');
  const computerChoice=getComputerChoice(); 
  console.log('User choice is '+userChoice);
  console.log('Computer choice is '+computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
