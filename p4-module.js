// code module that exports the question and answer functionality 

const { data } = require ('./p4-data.js')


function getQuestions() {
    let questionNums = data.map(function(element){
        return element.question 
    });
    return questionNums;
};

function getAnswers() {
    let questionAns = data.map(function(element){
        return element.answer
    }); 
    return questionAns; 
};

function getQuestionsAnswers() {
    let questionsAndAnswers = JSON.parse(JSON.stringify(data));
    return questionsAndAnswers;
};

function getQuestion( number = ""){
    let fullQuestion = {
        error: '',
        answer: '',
        number: '',
    };
    if (parseInt(number) == false) {
        fullQuestion.error = 'Question number must be an integer';
    }
    else if (number < 1){
        fullQuestion.error = 'Question number must be greater or equal to 1'
    }
    else if (number >= data.length+1){
        fullQuestion.error = `Question number must be less than the number of questions (${data.length})`
    }
    else {
        fullQuestion.question = `${data[number-1].question}`
        fullQuestion.number = number; 
    }
}; 

function getAnswer (number = "") {
    let answerToReturn = {
        error: '', 
        answer: '',
        number: '',
    };
    if (parseInt(number) == false) {
        answerToReturn.error = 'Answer number must be an integer';
    }
    else if (number <1) {
        answerToReturn.error = 'Answer number must be greater than or equal to 1'; 
    }
    else if (number >= data.length+1) {
        answerToReturn.error = `Answer number must be less than the number of questions (${data.length})`
    }
    else { 
        answerToReturn.answer = `${data[number-1].answer}`
        answerToReturn.number = number;
    }
    return answerToReturn; 
    }; 

function getQuestionAnswer(number = ""){
    let questionAnswer = {
        error: '', 
        answer: '',
        number: '',
    };
    if (parseInt(number) == false) {
        questionAnswer.error = 'Answer number must be an integer';
    }
    else if (number <1) {
        questionAnswer.error = 'Answer number must be greater than or equal to 1'; 
    }
    else if (number >= data.length+1) {
        questionAnswer.error = `Answer number must be less than the number of questions (${data.length})`
    }
    else { 
        questionAnswer.answer = `${data[number-1].answer}`
        questionAnswer.question = `${data[number-1].question}`
        questionAnswer.number = number;

    };
    return questionAnswer; 
    }; 

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
}
    /*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion"
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer"
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer"
    );
  }


