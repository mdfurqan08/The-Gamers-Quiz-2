class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");
    this.input2= createInput("").attribute("placeholder", "Enter Correct Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("🎮The Gamers Quiz🎮");
    this.title.position(420, 0);

    this.question.html("Question:- Guess the all main characters in GTA 5? " );
    this.question.position(250, 50);
    this.option1.html("1: claude,Niko Bellic" );
    this.option1.position(500, 100);;
    this.option2.html("2: Michael, Trevor, and Franklin" );
    this.option2.position(520, 130);
    this.option3.html("3: Tommy Vercetti,Catalina" );
    this.option3.position(540, 160);
    this.option4.html("4: Carl Johnson" );
    this.option4.position(570, 190);

    this.input1.position(396, 340);
    this.input2.position(690, 340);
    this.button.position(550, 408);
    this.button2.position(1000, 30);
    this.button.class("customButton");
    this.input2.class("customButton2");
    this.input1.class("customButton2");
    this.button2.class("customButton");
    this.title.class("title")
    this.question.class("text")
    this.option1.class("text2");
    this.option2.class("text2");
    this.option3.class("text2");
    this.option4.class("text2");

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      location.reload();
      var ref = database.ref("contestants")
      ref.remove()
    })
  }
}
