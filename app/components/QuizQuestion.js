"use client";

import styles from "./QuizQuestion.module.css";

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNextQuestion,
  onPrevQuestion
}) {
  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionHeader}>
        <span>Question {questionNumber} of {totalQuestions}</span>
        <span className={styles.category}>{question.category}</span>
      </div>
      
      <h3 className={styles.questionText}>{question.question}</h3>
      
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${selectedAnswer === option ? styles.selected : ""}`}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      
      <div className={styles.navigation}>
        <button
          className={styles.navButton}
          onClick={onPrevQuestion}
          disabled={questionNumber === 1}
        >
          Previous
        </button>
        
        <button
          className={styles.navButton}
          onClick={onNextQuestion}
          disabled={!selectedAnswer}
        >
          {questionNumber === totalQuestions ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}