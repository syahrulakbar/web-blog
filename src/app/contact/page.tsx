import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{"Let's Keep in Touch"}</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact image"
            className={styles.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            name="message"
            id="message"
            placeholder="message"
            cols={30}
            rows={10}
            className={styles.textArea}
          />
          <Button url="/" text="Send" />
        </form>
      </div>
    </div>
  );
}
