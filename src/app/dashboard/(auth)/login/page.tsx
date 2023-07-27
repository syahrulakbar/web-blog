"use client";

import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const session = useSession();
  const { status } = session;
  const router = useRouter();

  if (status === "loading") {
    return <p>loading...</p>;
  }
  if (status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="email" className={styles.input} required />
        <input type="password" placeholder="password" className={styles.input} required />
        <button className={styles.button}>Register</button>
      </form>
      <button onClick={() => signIn("google")}>Login With Google</button>
    </div>
  );
}
