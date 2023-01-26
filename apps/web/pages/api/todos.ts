import type { NextApiRequest, NextApiResponse } from "next";

type Todos = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todos>
) {
  res.status(200).json({});
}
