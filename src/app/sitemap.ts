import type { MetadataRoute } from "next";
import { keptArticles } from "@/content/articles";

const siteUrl = "https://zeltta.com";

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		...keptArticles.map((article) => ({
			url: `${siteUrl}/article/${article.slug}`,
			lastModified: new Date(article.date),
			changeFrequency: "yearly" as const,
			priority: 0.6,
		})),
	];
};

export default sitemap;
