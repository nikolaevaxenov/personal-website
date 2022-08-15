import Link from "next/link";
import { IProject } from "../../utils/interfaces";
import styles from "./Project.module.scss";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Project({
  title,
  description,
  descriptionEn,
  url,
  urlGithub,
  year,
  stack,
}: IProject) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <div className={styles.projectWrapper}>
      <h1>{title}</h1>
      <p>{locale === "ru" ? description : descriptionEn}</p>
      <div className={styles.projectWrapper__links}>
        {url && (
          <Link href={url}>
            <a target="_blank">{t("projects.project.goToUrl")}</a>
          </Link>
        )}
        {urlGithub && (
          <Link href={urlGithub}>
            <a target="_blank">{t("projects.project.goToGithub")}</a>
          </Link>
        )}
      </div>
      <div className={styles.projectWrapper__info}>
        <p>{year}</p>
        <p>{stack}</p>
      </div>
    </div>
  );
}

export default Project;
