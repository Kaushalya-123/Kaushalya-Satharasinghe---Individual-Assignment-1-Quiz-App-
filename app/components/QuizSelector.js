"use client";

import { useState } from "react";
import { getAllCategories, getQuestionsByCategory, quizData } from "../data/quizData";
import styles from "./QuizSelector.module.css";

export default function QuizSelector({ onQuizSelect }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const handleCategorySelect = (event) => {
    setSelectedCategory(event.target.value);
  };
  
  const handleStartQuiz = () => {
    if (selectedCategory) {
      const questions = getQuestionsByCategory(selectedCategory);
      onQuizSelect(questions);
    }
  };
  
  const handleRandomQuiz = () => {
    // Get 10 random questions from all categories
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    const randomQuestions = shuffled.slice(0, 10);
    onQuizSelect(randomQuestions);
  };
  
  return (
    <div className={styles.selectorContainer}>
      <h2>Select a Quiz Category</h2>
      
      <select
        className={styles.categorySelector}
        value={selectedCategory}
        onChange={handleCategorySelect}
      >
        <option value="">Select a category</option>
        {getAllCategories().map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      
      <div className={styles.buttonGroup}>
        <button 
          className={styles.startButton}
          onClick={handleStartQuiz}
          disabled={!selectedCategory}
        >
          Start Category Quiz
        </button>
        
        <button 
          className={styles.randomButton}
          onClick={handleRandomQuiz}
        >
          Random Quiz
        </button>
      </div>
    </div>
  );
}