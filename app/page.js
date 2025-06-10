import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to QuizMaster</h1>
        <p className={styles.description}>
          Test your knowledge with our interactive quizzes on various topics!
          Challenge yourself and learn something new.
        </p>
        
        <div className={styles.ctas}>
          <Link href="/quiz" className={styles.primary}>
            Start Quiz
          </Link>
          <Link href="/about" className={styles.secondary}>
            About
          </Link>
        </div>
      </main>
    </div>
  );
}
