import Project from "../Project/Project";
import styles from "./Projects.module.scss";
import { IProject } from "../../utils/interfaces";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "next-i18next";

function Projects() {
  const { t } = useTranslation("common");

  const { isLoading, data } = useQuery(["projects"], async () =>
    (await fetch(`/api/projects`, { method: "get" })).json()
  );

  return (
    <section className={styles.projectsWrapper}>
      <h1>{t("projects.projects")}</h1>
      <div className={styles.projectsWrapper__projects}>
        {isLoading ?? t("projects.loading")}
        {data && (
          <Swiper
            modules={[Navigation, Scrollbar]}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
            centerInsufficientSlides
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {data.map((project: IProject, index: number) => (
              <SwiperSlide key={index}>
                <Project
                  title={project.title}
                  description={project.description}
                  descriptionEn={project.descriptionEn}
                  url={project.url}
                  urlGithub={project.urlGithub}
                  year={project.year}
                  stack={project.stack}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Projects;
