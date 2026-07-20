import { ActionableWaysToAdvertise } from "./ActionableWaysToAdvertise";
import { DetectInactivityReact } from "./DetectInactivityReact";
import { MaintainableTools } from "./MaintainableTools";

export type KeptArticle = {
	slug: string;
	title: string;
	description: string;
	content: string;
	coverImage: string;
	date: string;
};

export const keptArticles: KeptArticle[] = [
	{
		slug: "how-to-detect-inactivity-and-auto-reset-a-react-app",
		title: "How to detect inactivity and auto-reset a React app",
		description:
			"A simple React pattern for resetting public kiosk and finance apps after a period of inactivity — so user data stays private if someone walks away.",
		content: DetectInactivityReact,
		coverImage: "/content/article-detect-inactivity.jpeg",
		date: "2021-12-21",
	},
	{
		slug: "100-actionable-ways-to-advertise-a-small-business",
		title: "100 actionable ways to advertise a small business",
		description:
			"A practical list of marketing and sales tactics for small businesses — from online presence to local outreach — compiled while planning Zeltta's own marketing.",
		content: ActionableWaysToAdvertise,
		coverImage: "/content/article-advertising.jpeg",
		date: "2021-04-22",
	},
	{
		slug: "is-your-developer-using-maintainable-tools",
		title: "Is your developer using maintainable tools?",
		description:
			"How to make sure your developer is using widely adopted tools — and avoid getting stuck with unmaintainable software nobody else can touch.",
		content: MaintainableTools,
		coverImage: "/content/article-maintainable-tools.jpeg",
		date: "2023-06-15",
	},
];

export const getKeptArticle = (slug: string) => {
	return keptArticles.find((article) => article.slug === slug);
};
