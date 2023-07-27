import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

interface Blog {
  _id: number;
  title: string;
  desc: string;
  image: string;
  content: string;
  username: string;
}

async function getBlogs() {
  try {
    const res = await fetch(`${process.env.API_URL}/posts`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Blog() {
  const blogs: Blog[] = await getBlogs();
  return (
    <div className={styles.mainContainer}>
      {blogs?.map((blog) => (
        <Link key={blog._id} href={`/blog/${blog._id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={blog.image}
              width={400}
              height={250}
              className={styles.image}
              alt="cat image"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.desc}>{blog.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
