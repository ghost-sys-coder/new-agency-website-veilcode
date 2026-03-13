import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap{
    const baseUrl = `https://veilcode.studio`;

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/work`, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        {url: `${baseUrl}/about`, lastModified: new Date()},
        {url: `${baseUrl}/start`, lastModified: new Date()},
        { url: `${baseUrl}/blog`, lastModified: new Date() },
    ]
}