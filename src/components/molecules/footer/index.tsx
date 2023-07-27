import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p>Learn NEXT JS 13 with Typescript</p>
      <div className={styles.social}>
        <Image src="/1.png" alt="social media" width={15} className={styles.icon} height={15} />
        <Image src="/2.png" alt="social media" width={15} className={styles.icon} height={15} />
        <Image src="/3.png" alt="social media" width={15} className={styles.icon} height={15} />
        <Image src="/4.png" alt="social media" width={15} className={styles.icon} height={15} />
      </div>
    </footer>
  );
}
