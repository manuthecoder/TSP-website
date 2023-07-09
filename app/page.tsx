import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>The Steamology Project</p>
      </div>

      <div
        className={styles.center}
        style={{
          marginBottom: "auto",
          marginTop: "auto",
          textAlign:"center"
        }}
      >
        <h1>Coming soon 🔥</h1>
      </div>
    </main>
  );
}
