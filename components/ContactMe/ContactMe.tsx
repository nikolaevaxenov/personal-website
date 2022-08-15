import Link from "next/link";
import styles from "./ContactMe.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "next-i18next";

type FeedbackForm = {
  name: string;
  email: string;
  feedbackMessage: string;
};

function ContactMe() {
  const { t } = useTranslation("common");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackForm>();

  const feedbackMutation = useMutation(async (feedbackForm: FeedbackForm) => {
    await (
      await fetch(`/api/projects`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackForm),
      })
    ).json();
  });

  const onSubmit: SubmitHandler<FeedbackForm> = (data) => {
    feedbackMutation.mutate({
      name: data.name,
      email: data.email,
      feedbackMessage: data.feedbackMessage,
    });
  };

  return (
    <section className={styles.contactWrapper}>
      <h1>{t("contactMe.contactMe")}</h1>
      <div className={styles.contactWrapper__options}>
        <div className={styles.contactWrapper__links}>
          <Link href="https://github.com/nikolaevaxenov">
            <a target="_blank">GitHub</a>
          </Link>
          <Link href="https://twitter.com/nikolaevaxenov">
            <a target="_blank">Twitter</a>
          </Link>
          <Link href="https://vk.com/nikolaevaxenov">
            <a target="_blank">{t("contactMe.vk")}</a>
          </Link>
          <a href="mailto:nikolaevaxenov@gmail.com">Email</a>
        </div>
        <div className={styles.contactWrapper__feedbackForm}>
          {feedbackMutation.isLoading && (
            <div>
              <p>{t("contactMe.loading")}</p>
            </div>
          )}
          {feedbackMutation.isSuccess && (
            <div className={styles.contactWrapper__success}>
              <p>{t("contactMe.thanksForFeedback")}</p>
              <button
                onClick={() => {
                  feedbackMutation.reset();
                  reset();
                }}
              >
                {t("contactMe.retry")}
              </button>
            </div>
          )}
          {feedbackMutation.isIdle && (
            <>
              <p>{t("contactMe.sendFeedback")}</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">{t("contactMe.name")}</label>
                <input
                  type="text"
                  maxLength={50}
                  required
                  {...register("name", {
                    required: t("contactMe.requiredField"),
                  })}
                />

                <label htmlFor="email">{t("contactMe.email")}</label>
                <input
                  type="email"
                  maxLength={50}
                  required
                  {...register("email", {
                    required: t("contactMe.requiredField"),
                  })}
                />

                <label htmlFor="feedbackMessage">
                  {t("contactMe.message")}
                </label>
                <textarea
                  required
                  {...register("feedbackMessage", {
                    required: t("contactMe.requiredField"),
                  })}
                />

                <button type="submit">{t("contactMe.send")}</button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
