import Link from "next/link";
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  url: string;
}
export default function Button({ text, url }: ButtonProps) {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}
