let questions=["Who is goat","Who has the most centuries among current players","Who has the most icc Award","Who has the most runs in ipl"];
let i=0;
let score=0;
let options=[["Virat","Rohit","David","Smith"],["Virat","AB De Villiers","Kane Williamson","Joe Root"],["Virat","Rohit","Dhoni","Sachin"],["Virat","Dhawan","Warner","Rohit"]]
let answers=["Virat","Virat","Virat","Virat"];
function question()
{
  if(i>questions.length-1)
  {
    document.querySelector('.container').innerHTML=`
    <div class="quiz">
    <h1>Simple Quiz</h1>
    <hr>
    <div class="result">
    <h3>You scored ${score} out of ${questions.length}!</h3>
    <div class="special-btn">
          <button class="next1" onclick="
          i=0;
          score=0;
          question();
          ">Play Again</button>
        </div> 
    </div>`
  }
  else{
    document.querySelector('.container').innerHTML= 
    `<div class="quiz">
    <h1>Simple Quiz</h1>
    <hr>
    <div class="question">
      <h2 id="question-name">${questions[i]}</h2>
      <div class="options">
        <button class="btn" id="btn1" onclick="
        correctAnswer('btn1');
        ">${options[i][0]}</button>
        <button class="btn" id="btn2" onclick="
        correctAnswer('btn2');
        ">${options[i][1]}</button>
        <button class="btn" id="btn3" onclick="
        correctAnswer('btn3');
        ">${options[i][2]}</button>
        <button class="btn" id="btn4" onclick="
        correctAnswer('btn4');
        ">${options[i][3]}</button>
        <div class="special-btn">
        <button class="next" onclick="
        i++;
        question();
        ">Next</button>
        </div>  
      </div>
    </div>
  </div>

  `
}
}
function correctAnswer(s)
{
  a=document.querySelector(`#${s}`).innerText;
  if(answers[i]===a)
  {
  document.querySelector(`#${s}`).className='correct';
  score++;
  }
  else
  {
    if(answers[i]==document.querySelector('#btn1').innerText)
    {
      document.querySelector('#btn1').className='correct';
    }
    if(answers[i]==document.querySelector('#btn2').innerText)
    {
      document.querySelector('#btn2').className='correct';
    }
    if(answers[i]==document.querySelector('#btn3').innerText)
    {
      document.querySelector('#btn3').className='correct';
    }
    if(answers[i]==document.querySelector('#btn4').innerText)
    {
      document.querySelector('#btn4').className='correct';
    }
  document.querySelector(`#${s}`).className='incorrect';
  }
  document.querySelector('.next').className='next1';
}

question();