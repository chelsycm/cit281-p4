// Question and Answer web server
const fs = require("fs");
const fastify = require("fastify")();
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer,getQuestionAnswer } = require(`./p4-module.js`); 

fastify.get("/cit/question", (request, reply) => {
    const questionsToReturn = getQuestions();
    const resultToReturn = JSON.stringify(questionsToReturn);
    reply 
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(resultToReturn);
});

fastify.get("/cit/answer", (request,reply) => {
    const answerToReturn = getAnswers();
    const resultToReturn = JSON.stringify(answerToReturn);
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(resultToReturn);
});
fastify.get("/cit/questionanswer", (request,reply) => {
    const questionAnswerToReturn = getQuestionsAnswers();
    const resultToReturn = JSON.stringify(questionAnswerToReturn);
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(resultToReturn);
});

fastify.get("/cit/question/:number", (request, reply) => {
    console.log(request);
    const questionNumberFromClient = request.params.number;
    const questionFromClient = getQuestion(parseInt(questionNumberFromClient));
    const questionNumberReturn = JSON.stringify(questionFromClient);
    reply 
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(questionNumberReturn);
}); 

fastify.get("/cit/answer/:number", (request, reply) => {
    console.log(request);
    const answerNumberFromClient = request.params.number;
    const answerFromClient = getQuestion(parseInt(answerNumberFromClient));
    const answerNumberReturn = JSON.stringify(answerFromClient);
    reply 
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(answerNumberReturn);
}); 

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    console.log(request);
    const answerNumberFromClient = request.params.number;
    const answerFromClient = getQuestion(parseInt(answerNumberFromClient));
    const answerNumberReturn = JSON.stringify(answerFromClient);
    reply 
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(answerNumberReturn)
});  

fastify.get("/*", (request, reply) => {
    const objectToReturn = {
        "error": "Route not found",
        "statusCode": 404
    }
    const result = JSON.stringify(objectToReturn)
    reply
      .code(404)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(result);
  });

  const listenIP = "Localhost";
  const listenPort = 8080;
  fastify.listen(listenPort, listenIP, (err, address) => {
      if (err) 
      {console.log(err); 
          process.exit(1);
      }
      console.log(`Server listening on ${address}`);
  });


