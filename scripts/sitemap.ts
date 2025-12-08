import type { NextApiRequest, NextApiResponse } from "next";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

class PublicPage {
  HOME = "/";
  HOME_RU = "/ru";
  HOME_KY = "/ky";
  HOME_DE = "/de";
  HOME_EN = "/en";
}

const PAGE = new PublicPage();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const links: { url: string; changefreq?: string; priority?: number }[] = [
    { url: PAGE.HOME, changefreq: "daily", priority: 1.0 },
    { url: PAGE.HOME_RU, changefreq: "daily", priority: 1.0 },
    { url: PAGE.HOME_KY, changefreq: "daily", priority: 1.0 },
    { url: PAGE.HOME_EN, changefreq: "daily", priority: 1.0 },
    { url: PAGE.HOME_DE, changefreq: "daily", priority: 1.0 },
  ];

  const stream = new SitemapStream({
    hostname: "https://most-kyrgyzstan.vercel.app/",
  });

  try {
    const xml = await streamToPromise(Readable.from(links).pipe(stream));
    res.writeHead(200, { "Content-Type": "application/xml" });
    res.end(xml.toString());
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
