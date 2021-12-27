// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit, App } from "octokit";

const octokit = new Octokit();
const token = process.env.NEXT_PUBLIC_TOKEN;

export default async function helloAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const a = await octokit.request("GET /repos/{owner}/{repo}/contributors", {
    owner: "hiroky1983",
    repo: "biet-new",
  });
  console.log(a);

  res.status(200).json(a);
}
