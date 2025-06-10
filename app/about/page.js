import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.pageTitle}>About QuizMaster</h1>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            QuizMaster aims to make learning fun and interactive through engaging quizzes
            on various topics. We believe that knowledge should be accessible to everyone
            and that learning can be enjoyable.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>How It Works</h2>
          <p>
            Our platform offers quizzes across multiple categories including Geography,
            Science, History, Technology, and Entertainment. You can choose a specific
            category or take a random quiz with questions from all categories.
          </p>
          <p>
            Each quiz provides immediate feedback and a detailed review of your answers
            at the end, helping you learn from your mistakes.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Technology</h2>
          <p>
            QuizMaster is built using modern web technologies including:
          </p>
          <ul className={styles.techList}>
            <li>Next.js - React framework for server-rendered applications</li>
            <li>CSS Modules - For component-scoped styling</li>
            <li>React Hooks - For state management</li>
          </ul>
        </section>
      </div>
    </div>
  );
}