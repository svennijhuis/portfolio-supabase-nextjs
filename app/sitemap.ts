import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://svennijhuis.io",
      lastModified: new Date(),
    },
  ];
}
