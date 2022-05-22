// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_TOKEN,
});
// const token = process.env.NEXT_PUBLIC_TOKEN;

export default async function helloAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
  // const resp = await octokit.rest.repos.getContent({
  //   owner: "hiroky1983",
  //   repo: "biet-new",
  //   path: "README.md",
  // });
}
