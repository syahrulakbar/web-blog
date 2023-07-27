"use client";

import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const session = useSession();
  const { status } = session;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher,
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session?.data?.user?.name,
        }),
      });
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "unauthenticated") {
    router?.push("/dashboard/login");
  }
  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          <h2>Your Posts</h2>
          {data?.map((post: any) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image
                  src={post.image}
                  className={styles.img}
                  alt={post.title}
                  width={200}
                  height={100}
                />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <button onClick={() => handleDelete(post._id)} className={styles.delete}>
                X
              </button>
            </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h2>Add New Post</h2>
          <input type="text" placeholder="Title" className={styles.input} required />
          <input type="text" placeholder="Description" className={styles.input} required />
          <input type="text" placeholder="Image" className={styles.input} required />
          <textarea
            className={styles.textArea}
            cols={30}
            rows={10}
            placeholder="Content"
            required
          />
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    );
  }
}
