"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const routes = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    title: "About",
    path: "/about",
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    path: "/dashboard",
  },
];

export default function Navbar() {
  const session = useSession();
  return (
    <nav className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Daily News
      </Link>
      <ul className={styles.links}>
        {routes.map((route) => (
          <li key={route.id}>
            <Link href={route.path} className={styles.link}>
              {route.title}
            </Link>
          </li>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.button} onClick={() => signOut()}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
}
