// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";


export default function helloAPI(req: NextApiRequest, res: NextApiResponse) {
  const url = "https://github.com/users/hiroky1983/contributions";
  const token = process.env.NEXT_PUBLIC_TOKEN;

  res.status(200).json({ name: "hiroky" });

}

