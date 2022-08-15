import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Landing from "../components/Landing/Landing";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Nikolaev-Axenov | Frontend Developer</title>
      </Head>

      <main className={styles.wrapper__main}>
        <Landing />
        <Projects />
        <ContactMe />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale as string, ["common"])),
    },
  };
};

export default Home;
