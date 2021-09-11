class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide(); 

    background(back_Img);
    fill(0);
    textSize(30);
    text("🎮Result of the Quiz🎮",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 350;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",250,340);

      for(var plr in allContestants){
        debugger;
        var correctAns = "2";

        // if (correctAns !== allContestants[plr].answer){
        //   fill("Green")
        // }
        // else{
        //   fill("red");
        // }

        // if (correctAns === allContestants[plr].answer){
        //   fill("Green")
        // }
        // else{
        //   fill("red");
        // }

         if (correctAns === allContestants[plr].answer){
          fill("green")
         }
         else{
           fill("red");
         }

        // if (correctAns = allContestants[plr].answer){
        //   fill("Green")
        // }
        // else{
        //   fill("red");
        // }

        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 350,display_Answers)
      }
    }
  }
}
