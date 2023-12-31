import Link from "next/link";
import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href={"/portfolio/illustration"} className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>
        <Link href={"/portfolio/websites"} className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href={"/portfolio/applications"} className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
}
