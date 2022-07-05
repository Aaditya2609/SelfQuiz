var readlineSync=require("readline-sync");
var playerName=readlineSync.question("Enter Player Name: ")
console.log("Welcome "+ playerName+" let's test how much you know about Aaditya")

var score=0;
var highScores=[
  { name:"Aaditya",
    score:8
},
  {
    name:"Aradhya",
    score:6
  }
]

function play(question,answer)
  {
  userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase())
  {
    score++;
    console.log("You Are Correct :-)");
  }
    else
  {
      console.log("You Are Wrong :-(");
    }

    console.log("Current Score: "+score);
    console.log("---------------------");
    
  }
var question1=
  {
    question: "What is Aaditya's Favourite Food?\n A.Pizza.\n B.Dosa.\n C.Rolls.\n D.Burgers.\n",
    answer: "A"
  }
var question2=
  {
    question: "Where does he currently study?.\n",
    answer: "MITS"
  }
var question3=
  {
    question: "Which branch is he in?.\n",
    answer: "IT"
  }
var question4=
  {
    question: "Which anime is his favourite?.\n A.Naruto.\n B.Horimiya.\n C.Your Lie In April.\n D.Death Note.\n",
    answer: "C"
  }
var question5=
  {
    question: "Which game does he like to play the most?.\n",
    answer: "Valorant"
  }
var question6=
  {
    question: "Where was he born?.\n",
    answer: "Rewa"
  }
var question7=
  {
    question: "Does he like Coding?.\n",
    answer: "Yes"
  }
var question8=
  {
    question: "What is his favourite programming language?.\n",
    answer: "Java"
  }

var questions=[question1,question2,question3,question4,question5,question6,question7,question8];

for(var i=0;i<questions.length;i++)
  {
    play(questions[i].question,questions[i].answer);
  }
var count=0;
console.log("**********LEADERBOARD**********")
for(var i=0;i<highScores.length;i++)
  {
    console.log("Name: "+highScores[i].name+"  Score: "+highScores[i].score)
    if(score>highScores[i].score)
    {
      count++;
    }
  }
if(count>0)
{
  console.log("********************************")
  console.log("Congrats you beat a highscore!!!!, Send SS to get your name on the LeaderBoard")
}