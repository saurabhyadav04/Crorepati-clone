import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: "1",
      question: "Which is one of the programming language?",
      answers: [
      {
        text: "Lizard",
        correct: false,
      },
      {
        text: "Dog",
        correct: false,
      },
      {
        text: "Snake",
        correct: false,
      },
      {
        text: "Python",
        correct: true,
      },
    ],
  },
  {
    id: "2",
    question: "Which is used to style a webpage?",
    answers: [
      {
        text: "HTML",
        correct: false,
      },
      {
        text: "CSS",
        correct: true,
      },
      {
        text: "JavaScript",
        correct: false,
      },
      {
        text: "Sql",
        correct: false,
      },
    ],
  },
  {
    id: "3",
    question:
      "Which of the following is the correct extension of the html file?",
    answers: [
      {
        text: ".html",
        correct: true,
      },
      {
        text: ".py",
        correct: false,
      },
      {
        text: ".js",
        correct: false,
      },
      {
        text: ".jsx",
        correct: false,
      },
    ],
  },
  {
    id: "4",
    question: `What will be the output? print("2+2")`,
    answers: [
      {
        text: "4",
        correct: false,
      },
      {
        text: "22",
        correct: false,
      },
      {
        text: `2+2`,
        correct: true,
      },
      {
        text: "error",
        correct: false,
      },
    ],
  },
  {
    id: "5",
    question: "What does the abbreviation HTML stand for?",
    answers: [
      {
        text: "HyperText Markdown Language",
        correct: false,
      },
      {
        text: "HighText Markup Language",
        correct: false,
      },
      {
        text: "None of the above",
        correct: false,
      },
      {
        text: "HyperText Markup Language",
        correct: true,
      },
    ],
  },
  {
    id: "6",
    question: "The correct sequence of HTML tags for starting a webpage is -",
    answers: [
      {
        text: "Head, Title, HTML, body",
        correct: false,
      },
      {
        text: "HTML, Body, Title, Head",
        correct: false,
      },
      {
        text: "HTML, Head,Body ,Title",
        correct: false,
      },
      {
        text: "HTML, Head, Title, Body",
        correct: true,
      },
    ],
  },
  {
    id: "7",
    question:
      "Which of the following element is responsible for making the text bold in HTML?",
    answers: [
      {
        text: "<b>",
        correct: true,
      },
      {
        text: "<pre>",
        correct: false,
      },
      {
        text: "<br>",
        correct: false,
      },
      {
        text: "<a>",
        correct: false,
      },
    ],
  },
  {
    id: "8",
    question: " CSS stands for ?",
    answers: [
      {
        text: "Color and style sheets",
        correct: false,
      },
      {
        text: "Cascading style sheets",
        correct: true,
      },
      {
        text: "Cascade style sheets",
        correct: false,
      },
      {
        text: "None of the above",
        correct: false,
      },
    ],
  },
  {
    id: "9",
    question: "The CSS property used to make the text bold is -",
    answers: [
      {
        text: "weight: bold",
        correct: false,
      },
      {
        text: "font: bold",
        correct: false,
      },
      {
        text: "style: bold",
        correct: false,
      },
      {
        text: "font-weight : bold",
        correct: true,
      },
    ],
  },
  {
    id: "10",
    question: "Are the negative values allowed in padding property?",
    answers: [
      {
        text: "Yes",
        correct: false,
      },
      {
        text: "Can't say",
        correct: false,
      },
      {
        text: "No",
        correct: true,
      },
      {
        text: "May be",
        correct: true,
      },
    ],
  },
  {
    id: "11",
    question: "How to select the elements with the class name - example?",
    answers: [
      {
        text: "example",
        correct: false,
      },
      {
        text: ".example",
        correct: true,
      },
      {
        text: "#example",
        correct: false,
      },
      {
        text: "Class example",
        correct: false,
      },
    ],
  },
  {
    id: "12",
    question: "Which of the following is not javascript data types?",
    answers: [
      {
        text: "Null type",
        correct: false,
      },
      {
        text: "Undefined type",
        correct: false,
      },
      {
        text: "Number type",
        correct: false,
      },
      {
        text: "All of the mentioned",
        correct: true,
      },
    ],
  },
  {
    id: "13",
    question: "Which of the following is not an error in JavaScript?",
    answers: [
      {
        text: "Missing of Bracket",
        correct: false,
      },
      {
        text: "Division by zero",
        correct: true,
      },
      {
        text: "Syntax error",
        correct: false,
      },
      {
        text: "Missing of semicolons",
        correct: false,
      },
    ],
  },
  {
    id: "14",
    question:
      " Arrays in JavaScript are defined by which of the following statements?",
    answers: [
      {
        text: "It is an ordered list of values",
        correct: true,
      },
      {
        text: "It is an ordered list of objects",
        correct: false,
      },
      {
        text: "It is an ordered list of string",
        correct: false,
      },
      {
        text: "It is an ordered list of functions",
        correct: false,
      },
    ],
  },
  {
    id: "15",
    question: "Which of the tech may not be used to create this website ?",
    answers: [
      {
        text: "HTML",
        correct: false,
      },
      {
        text: "CSS",
        correct: false,
      },
      {
        text: "JavaScript",
        correct: false,
      },
      {
        text: "Unreal Engine",
        correct: true,
      },
    ],
  },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText"> Congratulations 🥳 {username} You Earned {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;