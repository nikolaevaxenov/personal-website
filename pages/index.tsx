import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Nikolaev-Axenov | Frontend Developer</title>
      </Head>

      <main className={styles.wrapper__main}>
        <p>🛠️</p>
        <p>Work in progress</p>
      </main>

      <footer className={styles.wrapper__footer}>
        <Link href="https://github.com/nikolaevaxenov/">
          <a target="_blank">
            © 2022 <u>Nikolaev-Axenov</u>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
