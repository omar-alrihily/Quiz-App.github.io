 
 const quizdata = [ {
    questions: " JavaScript is the programming language of   the _____ ",
    a:"Desktop",
    b:"Mobile",
    c:"Web",
    d:"Server",
    correct:"c"
 },
 {
    questions: "In which HTML element, we put the JavaScript code ?",
    a:"<javascript>...</javascript>",
    b:"<script>...</script>",
    c:"<css>...</css>",
    d:"<js>...</js>",
    correct:"b"
 },
 {
    questions: "Which property is used to define the HTML content to an HTML element with a specific id?",
    a:"innerText",
    b:"innerContent",
    c:"elementText",
    d:"innerHTML",
    correct:"d"
 }]



 // getelements from Html


 const quiz=document.getElementById('quiz');

 const answerEls= document.querySelectorAll('.answer');


const questionsel=document.getElementById("questions");

const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text= document.getElementById("d_text");
const btnel=document.getElementById("submit")


let currentQuiz = 0 ;
let score = 0 ;
loadQuiz();


 function loadQuiz(){

    deselectanswer();


     // for get quizdatabyindex 
  const currentQuizData=quizdata[currentQuiz];
  
  


  // post elements to HTML

  questionsel.innerText = currentQuizData.questions;

  a_text.innerText=currentQuizData.a;
  b_text.innerText=currentQuizData.b;
  c_text.innerText=currentQuizData.c;
  d_text.innerText=currentQuizData.d;

  

 }


 // getSelected() for save the select answer 
 function getSelected(){
   

    let answer = undefined ; 
    
  
   answerEls.forEach((answerEl)=>{

    // elemnt.chcked it is Property for checkbox or radus thats return Boolean value
       if(answerEl.checked){
            answer=answerEl.id;
        }
    });

    
   return answer ;
 
  }


  // for make unselected answer false
  function deselectanswer(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false ;
       
     });



  }
 

 btnel.addEventListener('click',()=>{

    

    
    
    const answer = getSelected();
    


    if(answer){

        // for check if you get right answer 
    if(answer === quizdata[currentQuiz].correct ){
        score++ 
    }
        
            
    // for get next quesion
        currentQuiz++
        if(currentQuiz < quizdata.length){
            loadQuiz();

        }
        else{
               quiz.innerHTML = `  
               <h2> You answered coorectly at ${score}/${quizdata.length}
               quseions . </h2>

               <button class="btn" onclick="location.reload()">
               Reload</button>
               
               
               
               `
            }
         
        }
    });



      

  


  




 