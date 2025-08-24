import { useState } from "react";
import { Options } from "./components/options";
import "./index.css";

function QuizApp() {
  const [mcqs, setMcqs] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  async function getQuizQuestions() {
    const data = await fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
    );
    const questions = await data.json();
    setMcqs(questions.results);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setAnswer("");
  }

  function nextQuestion() {
    if (mcqs[currentQuestionIndex].correct_answer === answer) {
      setScore((prev) => prev + 10);
    }
    if (currentQuestionIndex < mcqs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer("");
    } else {
      setQuizStarted(false);
      setShowResult(true);
    }
  }

  function handleAnswer(ans) {
    setAnswer(ans);
  }


  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 font-">
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Quiz App</h1>

      {!quizStarted && !showResult && (
        <button
          onClick={getQuizQuestions}
          className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-2xl hover:scale-105 cursor-pointer "
        >
          Start Quiz
        </button>
      )}

      {quizStarted && mcqs.length > 0 && (
        <div className="w-full max-w-2xl bg-white text-gray-800 rounded-2xl shadow-2xl p-6">
          <h3 className="text-lg mb-2 font-bold">
            Question {currentQuestionIndex + 1} of {mcqs.length}
          </h3>
          <h2 className="text-xl font-bold mb-4">
            {decodeHtml(mcqs[currentQuestionIndex].question)}
          </h2>

          <Options
            correctAnswer={mcqs[currentQuestionIndex].correct_answer}
            incorrectAnswer={mcqs[currentQuestionIndex].incorrect_answers}
            onAnswer={handleAnswer}
            selectedAnswer={answer}
          />

          <button
            onClick={nextQuestion}
            disabled={!answer}
            className="mt-6 px-6 py-3 w-full bg-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition disabled:opacity-50 cursor-pointer"
          >
            {currentQuestionIndex === mcqs.length - 1
              ? "Submit"
              : "Next Question"}
          </button>
        </div>
      )}

      {showResult && (
        <div className="w-full max-w-md bg-white text-gray-800 rounded-2xl shadow-2xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Your Score: {score}</h2>
          {score > 40 ? (
            <div>
              <h2>✅ You Passed!</h2>
              <img
                src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/8689467/gatsby.gif?quality=90&strip=all&crop=18.78125,0,62.4375,100"
                alt="Happy"
                className="mx-auto w-32 h-32"
              />
            </div>
          ) : (
            <div>
              <h2>❌ You Failed</h2>
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGdwbGN3d2ttYTE5bmJndGRxbXY0aHRxbHFjOHJ3b2J4YXg1aGs0ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4JySW26ZOvxKPsDS/200.webp"
                alt="Sad"
                className="mx-auto w-32 h-32"
              />
            </div>
          )}
          <button
            onClick={getQuizQuestions}
            className="mt-6 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 cursor-pointer transition"
          >
            Play Again
          </button>
        </div>
      )
      }
    </div >
  );
}

export default QuizApp;
