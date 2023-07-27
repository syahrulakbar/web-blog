import { Button } from "@/components";
import styles from "./page.module.css";
import Image from "next/image";

interface CategoryProps {
  category: string;
}

export default function Category({ params }: { params: CategoryProps }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat nesciunt,
            eligendi sit ullam reprehenderit error ex, dignissimos odit officiis molestias quibusdam
            provident? Ad a, velit rerum sunt accusamus eius repellendus sint possimus nemo, illo
            molestiae magni veritatis! Odit, expedita.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/illustration.png"} className={styles.img} fill={true} alt="cat image" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Innovative</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat nesciunt,
            eligendi sit ullam reprehenderit error ex, dignissimos odit officiis molestias quibusdam
            provident? Ad a, velit rerum sunt accusamus eius repellendus sint possimus nemo, illo
            molestiae magni veritatis! Odit, expedita.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/websites.jpg"} className={styles.img} fill={true} alt="cat image" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Fast</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat nesciunt,
            eligendi sit ullam reprehenderit error ex, dignissimos odit officiis molestias quibusdam
            provident? Ad a, velit rerum sunt accusamus eius repellendus sint possimus nemo, illo
            molestiae magni veritatis! Odit, expedita.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src={"/apps.jpg"} className={styles.img} fill={true} alt="cat image" />
        </div>
      </div>
    </div>
  );
}
