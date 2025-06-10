"use client";

import styles from "./QuizResults.module.css";

export default function QuizResults({ questions, userAnswers, onRestartQuiz, onNewQuiz }) {
  // Calculate score
  const correctAnswers = questions && questions.length > 0 
    ? questions.filter(
        (question, index) => question.correctAnswer === userAnswers[index]
      ).length
    : 0;
  
  const score = questions && questions.length > 0 
    ? Math.round((correctAnswers / questions.length) * 100)
    : 0;
  
  // Generate feedback based on score
  const getFeedback = () => {
    if (score >= 90) return "Excellent!";
    if (score >= 70) return "Great job!";
    if (score >= 50) return "Good effort!";
    return "Keep practicing!";
  };
  
  return (
    <div className={styles.resultsContainer}>
      <div className={styles.scoreCard}>
        <div className={styles.scoreCircle}>
          <span className={styles.scoreValue}>{score}%</span>
        </div>
        <h2 className={styles.scoreFeedback}>{getFeedback()}</h2>
        <p className={styles.scoreDetails}>
          You got {correctAnswers} out of {questions ? questions.length : 0} questions correct.
        </p>
        
        <div className={styles.buttonGroup}>
          <button className={styles.restartButton} onClick={onRestartQuiz}>
            Restart Quiz
          </button>
          <button className={styles.newQuizButton} onClick={onNewQuiz}>
            Try Another Quiz
          </button>
        </div>
      </div>
      
      {questions && questions.length > 0 && (
        <div className={styles.answerReview}>
          <h3>Review Your Answers</h3>
          
          {questions.map((question, index) => (
            <div 
              key={index} 
              className={`${styles.reviewItem} ${
                question.correctAnswer === userAnswers[index] 
                  ? styles.correct 
                  : styles.incorrect
              }`}
            >
              <p className={styles.reviewQuestion}>
                <span className={styles.questionNumber}>Question {index + 1}:</span> {question.question}
              </p>
              <p className={styles.reviewAnswer}>
                Your answer: {userAnswers[index] || "No answer provided"}
              </p>
              {question.correctAnswer !== userAnswers[index] && (
                <p className={styles.correctAnswer}>
                  Correct answer: {question.correctAnswer}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}