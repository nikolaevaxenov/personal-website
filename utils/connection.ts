import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGODB_URI;

export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  const ProjectsSchema = new mongoose.Schema({
    title: String,
    description: String,
    descriptionEn: String,
    url: String,
    urlGithub: String,
    year: String,
    stack: String,
  });

  const FeedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedbackMessage: String,
    createdAt: Date,
  });

  const Project =
    mongoose.models.Project || mongoose.model("Project", ProjectsSchema);
  const Feedback =
    mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

  return { conn, Project, Feedback };
};
