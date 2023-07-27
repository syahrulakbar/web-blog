import Image from "next/image";
import styles from "./page.module.css";

interface Blog {
  _id: number;
  title: string;
  desc: string;
  image: string;
  content: string;
  username: string;
}

// dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog: Blog = await getBlogById(params.id);
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "Blog Not Found",
    };
  }
  return {
    title: blog.title,
    description: blog.desc,
  };
}

async function getBlogById(id: string) {
  const res = await fetch(`${process.env.API_URL}/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return undefined;
  }
  const data = await res.json();
  return data;
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const blog: Blog = await getBlogById(params.id);
  if (!blog) {
    return <h1>Blog Not Found</h1>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.desc}>{blog.desc}</p>
          <div className={styles.author}>
            <Image
              src={"/1.png"}
              width={25}
              height={25}
              alt="user image"
              className={styles.avatar}
            />
            <span className={styles.username}>{blog.username}r</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={blog.image} fill={true} alt="detail blog image" className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
