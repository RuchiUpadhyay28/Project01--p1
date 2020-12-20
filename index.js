const chalk=require('chalk');

console.log(chalk.yellow("***********************************************"));
console.log(chalk.white.bold("   How well do you know me!!"));
console.log(chalk.yellow("***********************************************"));

var readlineSync=require('readline-sync');
var userName=readlineSync.question("Enter you Name: ");

console.log(chalk.blueBright.bold("Hello ",userName,"!! Let's begin..."));

var userScore=0;
var flag=0;
var winners={};
var winnerList=[];

var questions=[{
  question: "Where do I live? ",
  answer: "Singapore"
},
{
  question: "Which is my favorite color? ",
  answer: "Black"
},
{
  question: "Which month is my birthday? ",
  answer:"December"
}];


function gameLogic(question,answer){
  var userAnswer=readlineSync.question(chalk.magentaBright
(question));
  if(userAnswer===answer){
    userScore+=1;
    console.log(chalk.greenBright("Correct Answer! Score= ",userScore));
  }
  else if(userAnswer!='e'){
    console.log(chalk.redBright("Wrong Answer!"));
  }
  else{
    flag=1;
  }
}

function gameWinners(){
  // winnerList.sort();
  var nameFoundFlag=0;
  if(winnerList.length==0){
    winners.name=userName;
    winners.score=userScore;
    winnerList.push(winners);
  }
  else{
    for (var i in winnerList){
    if(userName===winnerList[i].name){
      winnerList[i].score=userScore;
      nameFoundFlag=1;
      }
    else{
      winners.name=userName;
      winners.score=userScore;
      winnerList.push(winners);
      }
    }
  }
  
  for(var i in winnerList){
    console.log(winnerList[i]);
  }
  winnerList.sort();
}

function gameBegin(){
  console.log();
  console.log(chalk.cyanBright("<<<<Press 'e' anytime you want to exit from the game>>>>"));
  console.log();
  userScore=0;
  for(var i in questions){
    if(flag==1){ 
      break;
    }
    gameLogic(questions[i].question,questions[i].answer);
  }
  console.log(chalk.yellow("-----------------------------------------"));
  console.log(chalk.bold.italic("Game Over!! Your Final Score is: ",userScore));
  console.log(chalk.yellow("-----------------------------------------"));
  
  gameWinners();
  playAgain();
}

function playAgain(){
  var userResponse=readlineSync.question("Do you want to play again? Press 'Y' for Yes and 'N' for No ");
  while(userResponse!='Y' || userResponse!='N'){
    if(userResponse==='Y'){
    gameBegin();
    }
  else if(userResponse==='N'){
    console.log();
    console.log(chalk.yellow("***********************************************"));
    console.log(chalk.bold.italic("Thank You!! Hope you enjoyed.."));
    console.log(chalk.yellow("***********************************************"));
    break;
    }
  else{
    console.log("Invalid Response!");
    break;
    }
  }
}

gameBegin();
