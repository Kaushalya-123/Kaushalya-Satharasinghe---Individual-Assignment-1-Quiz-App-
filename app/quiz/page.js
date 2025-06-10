"use client";

import { useState } from "react";
import QuizSelector from "../components/QuizSelector";
import QuizQuestion from "../components/QuizQuestion";
import QuizResults from "../components/QuizResults";
import styles from "./quiz.module.css";

export default function QuizPage() {
  // State for quiz management
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  // Handle quiz selection
  const handleQuizSelect = (questions) => {
    if (questions && questions.length > 0) {
      setSelectedQuiz(questions);
      setCurrentQuestionIndex(0);
      setUserAnswers(Array(questions.length).fill(null));
      setQuizCompleted(false);
    }
  };
  
  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    if (!selectedQuiz) return;
    
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };
  
  // Handle navigation to next question
  const handleNextQuestion = () => {
    if (!selectedQuiz) return;
    
    if (currentQuestionIndex < selectedQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  // Handle navigation to previous question
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  // Handle quiz restart
  const handleRestartQuiz = () => {
    if (!selectedQuiz) return;
    
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(selectedQuiz.length).fill(null));
    setQuizCompleted(false);
  };
  
  // Handle new quiz selection
  const handleNewQuiz = () => {
    // First set quiz to null, then reset other states
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedQuiz(null);
  };
  
  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.pageTitle}>Quiz Challenge</h1>
      
      {!selectedQuiz && (
        <QuizSelector onQuizSelect={handleQuizSelect} />
      )}
      
      {selectedQuiz && !quizCompleted && selectedQuiz[currentQuestionIndex] && (
        <QuizQuestion
          question={selectedQuiz[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={selectedQuiz.length}
          selectedAnswer={userAnswers[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
          onPrevQuestion={handlePrevQuestion}
        />
      )}
      
      {quizCompleted && selectedQuiz && (
        <QuizResults
          questions={selectedQuiz}
          userAnswers={userAnswers}
          onRestartQuiz={handleRestartQuiz}
          onNewQuiz={handleNewQuiz}
        />
      )}
    </div>
  );
}