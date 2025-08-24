import { useMemo } from "react";

export const Options = ({ correctAnswer, incorrectAnswer, onAnswer, selectedAnswer }) => {

  const shuffledOptions = useMemo(() => {
    const arr = [...incorrectAnswer, correctAnswer];
    return arr.sort(() => Math.random() - 0.5);
  }, [correctAnswer, incorrectAnswer]);

  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="space-y-3">
      {shuffledOptions.map((answer) => (
        <label
          key={answer}
          className={`flex items-center p-3 border rounded-xl shadow cursor-pointer transition ${selectedAnswer === answer
              ? "bg-indigo-500 text-white border-indigo-600"
              : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          <input
            type="radio"
            name="option"
            value={answer}
            checked={selectedAnswer === answer}
            onChange={() => onAnswer(answer)}
            className="hidden"
          />
          {decodeHtml(answer)}
        </label>
      ))}
    </div>
  );
};
