// Quiz data with 25 questions across different categories
export const quizData = [
  // Geography questions
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
    category: "Geography"
  },
  {
    id: 2,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
    category: "Geography"
  },
  {
    id: 3,
    question: "In which continent is Egypt located?",
    options: ["Asia", "Africa", "Europe", "South America"],
    correctAnswer: "Africa",
    category: "Geography"
  },
  {
    id: 4,
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
    category: "Geography"
  },
  {
    id: 5,
    question: "Which country is known as the Land of Fire and Ice?",
    options: ["Norway", "Iceland", "Greenland", "New Zealand"],
    correctAnswer: "Iceland",
    category: "Geography"
  },
  
  // Science questions
  {
    id: 6,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
    category: "Science"
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: "Au",
    category: "Science"
  },
  {
    id: 8,
    question: "What is the hardest natural substance on Earth?",
    options: ["Platinum", "Diamond", "Titanium", "Quartz"],
    correctAnswer: "Diamond",
    category: "Science"
  },
  {
    id: 9,
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    category: "Science"
  },
  {
    id: 10,
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Brain", "Skin"],
    correctAnswer: "Skin",
    category: "Science"
  },
  
  // History questions
  {
    id: 11,
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    correctAnswer: "1945",
    category: "History"
  },
  {
    id: 12,
    question: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
    correctAnswer: "George Washington",
    category: "History"
  },
  {
    id: 13,
    question: "Which ancient civilization built the Machu Picchu?",
    options: ["Aztecs", "Incas", "Mayans", "Egyptians"],
    correctAnswer: "Incas",
    category: "History"
  },
  {
    id: 14,
    question: "In which year did the Titanic sink?",
    options: ["1910", "1912", "1915", "1918"],
    correctAnswer: "1912",
    category: "History"
  },
  {
    id: 15,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
    category: "History"
  },
  
  // Technology questions
  {
    id: 16,
    question: "Who is the co-founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    correctAnswer: "Bill Gates",
    category: "Technology"
  },
  {
    id: 17,
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Utility", "Central Processor Utility"],
    correctAnswer: "Central Processing Unit",
    category: "Technology"
  },
  {
    id: 18,
    question: "Which programming language is known as the 'mother of all languages'?",
    options: ["Java", "C", "Python", "FORTRAN"],
    correctAnswer: "C",
    category: "Technology"
  },
  {
    id: 19,
    question: "In what year was the first iPhone released?",
    options: ["2005", "2007", "2009", "2010"],
    correctAnswer: "2007",
    category: "Technology"
  },
  {
    id: 20,
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Hyper Text Modern Links"],
    correctAnswer: "Hyper Text Markup Language",
    category: "Technology"
  },
  
  // Entertainment questions
  {
    id: 21,
    question: "Who played Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
    correctAnswer: "Robert Downey Jr.",
    category: "Entertainment"
  },
  {
    id: 22,
    question: "Which band performed the song 'Bohemian Rhapsody'?",
    options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
    correctAnswer: "Queen",
    category: "Entertainment"
  },
  {
    id: 23,
    question: "What is the name of Harry Potter's owl?",
    options: ["Hedwig", "Errol", "Crookshanks", "Scabbers"],
    correctAnswer: "Hedwig",
    category: "Entertainment"
  },
  {
    id: 24,
    question: "Which movie won the Oscar for Best Picture in 2020?",
    options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
    correctAnswer: "Parasite",
    category: "Entertainment"
  },
  {
    id: 25,
    question: "Who is the author of 'The Lord of the Rings'?",
    options: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "C.S. Lewis"],
    correctAnswer: "J.R.R. Tolkien",
    category: "Entertainment"
  }
];

// Function to get questions by category
export function getQuestionsByCategory(category) {
  return quizData.filter(q => q.category === category);
}

// Function to get all categories
export function getAllCategories() {
  const categories = new Set(quizData.map(q => q.category));
  return Array.from(categories);
}