import Image from "next/image";
import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getKeptArticle, keptArticles } from "@/content/articles";

export const generateStaticParams = async () => {
	return keptArticles.map((article) => ({ slug: article.slug }));
};

export const generateMetadata = async (props: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
	const params = await props.params;
	const article = getKeptArticle(params.slug);
	if (!article) {
		return {};
	}

	return {
		title: `${article.title} | Zeltta`,
		description: article.description,
		openGraph: {
			type: "article",
			url: `https://zeltta.com/article/${article.slug}`,
			title: `${article.title} | Zeltta`,
			description: article.description,
			images: [article.coverImage],
		},
	};
};

const remapImageSrc = (src: string | undefined) => {
	if (!src) {
		return src;
	}
	if (src.startsWith("/images/content/")) {
		return src.replace("/images/content/", "/content/");
	}
	return src;
};

const ArticlePage = async (props: { params: Promise<{ slug: string }> }) => {
	const params = await props.params;
	const article = getKeptArticle(params.slug);
	if (!article) {
		permanentRedirect("/");
	}

	return (
		<>
			<header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
					<a href="/" className="flex items-center gap-3">
						<Image src="/assets/icon-light.png" alt="" width={819} height={824} className="h-6 w-6" priority />
						<Image src="/assets/logo-text.png" alt="Zeltta" width={1459} height={703} className="h-6 w-auto" priority />
					</a>
					<a href="/#book" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:bg-stone-300">
						Book a 20-min chat
					</a>
				</div>
			</header>

			<main id="top">
				<section className="relative overflow-hidden border-b border-white/10">
					<div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl"></div>
					<div className="relative mx-auto max-w-3xl px-6 pb-14 pt-16 sm:pt-24">
						<p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">
							<a href="/" className="transition hover:text-stone-300">
								Zeltta
							</a>
							<span className="mx-2 text-stone-700">/</span>
							Article
						</p>
						<h1 className="mt-6 font-display text-4xl leading-[1.05] text-stone-100 sm:text-5xl">{article.title}</h1>
						<p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-400">{article.description}</p>
						<p className="mt-8 font-mono text-sm text-stone-500">
							{article.date}
							<span className="mx-2 text-stone-700">·</span>
							Rikus Wiehahn
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-3xl px-6 pt-10">
					<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
						<Image
							src={article.coverImage}
							alt=""
							width={1000}
							height={500}
							className="h-auto w-full object-cover"
							priority
						/>
					</div>
				</section>

				<article className="article-prose mx-auto max-w-3xl px-6 py-14 sm:py-16">
					<Markdown
						remarkPlugins={[remarkGfm]}
						components={{
							h1: () => null,
							img: (imgProps) => {
								const src = remapImageSrc(typeof imgProps.src === "string" ? imgProps.src : undefined);
								if (!src || src === article.coverImage) {
									return null;
								}
								return (
									// eslint-disable-next-line @next/next/no-img-element
									<img src={src} alt={imgProps.alt || ""} className="my-8 w-full rounded-xl border border-white/10" />
								);
							},
							pre: (preProps) => (
								<pre className="my-6 overflow-x-auto rounded-xl border border-white/10 bg-stone-950 p-4 font-mono text-[13px] leading-relaxed text-stone-300 sm:p-5 [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[13px] [&_code]:text-stone-300">
									{preProps.children}
								</pre>
							),
							code: (codeProps) => (
								<code className="rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.85em] text-stone-200">
									{codeProps.children}
								</code>
							),
						}}
					>
						{article.content}
					</Markdown>
				</article>

				<section className="border-t border-white/10">
					<div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="font-display text-2xl text-stone-100">Want something built?</p>
							<p className="mt-2 text-stone-400">A few projects a year. Almost always by referral.</p>
						</div>
						<a href="/#book" className="inline-block rounded-full bg-white px-7 py-3.5 text-center text-base font-semibold text-ink transition hover:bg-stone-300">
							Book a 20-min chat
						</a>
					</div>
				</section>
			</main>
		</>
	);
};

export default ArticlePage;
