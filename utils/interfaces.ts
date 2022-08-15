export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

export interface IProject {
  _id?: string;
  title: string;
  description: string;
  descriptionEn?: string;
  url: string;
  urlGithub?: string;
  year: string;
  stack: string;
}

export interface IFeedback {
  _id?: string;
  name: string;
  email: string;
  feedbackMessage: string;
  createdAt: string;
}
