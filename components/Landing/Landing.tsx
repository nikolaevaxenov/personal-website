import styles from "./Landing.module.scss";
import { useTranslation } from "next-i18next";

function Landing() {
  const { t } = useTranslation("common");

  return (
    <section className={styles.landingWrapper}>
      <div className={styles.landingWrapper__name}>
        <h1>{t("landing.firstName")}</h1>
        <h1>{t("landing.lastName")}</h1>
      </div>

      <div>
        <p>Frontend Developer</p>
        <p>{t("landing.education")}</p>
        <p>
          JavaScript, TypeScript, React, Redux, Next.js, REST, GraphQL, tRPC,
          SQL
        </p>
      </div>
    </section>
  );
}

export default Landing;
