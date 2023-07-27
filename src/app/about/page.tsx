import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "@/components";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="illustration"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>Digital Storyteller</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, a enim vel praesentium
            molestiae earum aut perferendis vero totam corrupti ad repellat voluptate tempora alias
            labore eius porro dolorem illum autem cupiditate ex rem iure ea natus! Illo officiis
            cumque doloremque quibusdam id debitis impedit, nihil eius tempore dolore suscipit earum
            <br />
            <br />
            temporibus sint, aliquid voluptates minima. Quasi enim, deserunt tempore expedita
            eligendi amet explicabo quaerat necessitatibus nostrum corrupti earum unde laborum
            blanditiis eos dolores reprehenderit obcaecati, voluptate sint pariatur doloribus ipsam
            incidunt? Magnam doloremque, modi dolorem corrupti in quibusdam nemo voluptates
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, a enim vel praesentium
            molestiae earum aut perferendis vero totam corrupti ad repellat voluptate tempora alias
            labore eius porro dolorem illum autem cupiditate ex rem iure ea natus! Illo officiis
            cumque doloremque quibusdam id debitis impedit, nihil eius tempore dolore suscipit earum
            <br />
            <br />- Dynamic Websites <br />
            <br />- Fast and Secure
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}
