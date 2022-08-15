import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connection";
import { ResponseFuncs } from "../../../utils/interfaces";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Project } = await connect();

      res.json(await Project.find().catch(catcher));
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Feedback } = await connect();

      res.json(
        await Feedback.create({
          name: req.body.name,
          email: req.body.email,
          feedbackMessage: req.body.feedbackMessage,
          createdAt: new Date(),
        }).catch(catcher)
      );
    },
  };

  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response for This Request" });
};

export default handler;
