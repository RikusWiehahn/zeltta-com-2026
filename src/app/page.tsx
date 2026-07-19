import Image from "next/image";
import EmailReveal from "./EmailReveal";
import RevealObserver from "./RevealObserver";

/*
	Google Calendar booking embed is live at #book.
	(Email is click-to-reveal via the EmailReveal component. Photo and case imagery are wired to /content.)
*/

const Page = () => {
	return (
		<>
			<RevealObserver />

			{/* ============ HEADER ============ */}
			<header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
					<a href="#top" className="flex items-center gap-3">
						<Image src="/assets/icon-light.png" alt="" width={819} height={824} className="h-6 w-6" priority />
						<Image src="/assets/logo-text.png" alt="Zeltta" width={1459} height={703} className="h-6 w-auto" priority />
					</a>
					<a href="#book" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition hover:bg-stone-300">Book a 20-min chat</a>
				</div>
			</header>

			<main id="top">

				{/* ============ HERO ============ */}
				<section className="relative overflow-hidden">
					<div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl"></div>
					<div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:pt-36">
						<p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Brisbane, Australia · Est. 2020</p>
						<h1 className="reveal mt-8 max-w-4xl font-display text-5xl leading-[1.02] text-stone-100 sm:text-7xl">
							From a sketch on a napkin to systems 100+ companies run&nbsp;on.
						</h1>
						<div className="reveal mt-10 flex flex-col gap-8 sm:flex-row sm:items-center">
							<Image src="/content/team-rikus-wiehahn-avatar.webp" alt="Rikus Wiehahn" width={764} height={764} className="h-20 w-20 flex-none rounded-full object-cover grayscale ring-1 ring-white/20" />
							<p className="max-w-xl text-lg leading-relaxed text-stone-400">
								Hi, I&rsquo;m Rikus. I&rsquo;m the strategist, the designer and the engineer. Zeltta is my one-person studio, and I take on a few projects a year, almost always by referral.
							</p>
						</div>
						<div className="reveal mt-12 flex flex-wrap items-center gap-5">
							<a href="#book" className="rounded-full bg-white px-7 py-3.5 text-base font-semibold text-ink transition hover:bg-stone-300">Book a 20-min chat</a>
							<a href="#work" className="font-mono text-sm text-stone-400 underline decoration-stone-700 underline-offset-8 transition hover:text-stone-200 hover:decoration-stone-400">See the work ↓</a>
						</div>

						<dl className="reveal mt-24 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
							<div>
								<dt className="font-display text-5xl text-stone-100">100+</dt>
								<dd className="mt-2 text-sm leading-relaxed text-stone-500">companies across New Zealand open software I built, every working day.</dd>
							</div>
							<div>
								<dt className="font-display text-5xl text-stone-100">1M+ plays</dt>
								<dd className="mt-2 text-sm leading-relaxed text-stone-500">across promotional games built directly for JB Hi-Fi campaigns.</dd>
							</div>
							<div>
								<dt className="font-display text-5xl text-stone-100">10 years</dt>
								<dd className="mt-2 text-sm leading-relaxed text-stone-500">shipping software end to end: web, iOS and Android.</dd>
							</div>
						</dl>

						<div className="reveal mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-10 border-t border-white/10 pt-12">
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-jb-hifi-white.png" alt="JB Hi-Fi" width={275} height={153} className="max-h-8 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-schick-white.png" alt="Schick Civil Construction" width={1283} height={255} className="max-h-6 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-star-safety-white.png" alt="Star Safety" width={720} height={450} className="max-h-11 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-autism-nz-white.png" alt="Autism New Zealand" width={575} height={187} className="max-h-8 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-game-kings-white.png" alt="Game Kings" width={599} height={173} className="max-h-7 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-okupu-white.png" alt="Ōkupu" width={735} height={190} className="max-h-7 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-waterboy-white.png" alt="The Waterboy" width={493} height={168} className="max-h-8 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-go-eco-white.png" alt="Go Eco" width={872} height={440} className="max-h-7 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-saferack-white.png" alt="Safe Rack" width={640} height={640} className="max-h-11 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-nourished-for-nil-white.png" alt="Nourished for Nil" width={587} height={160} className="max-h-7 w-auto opacity-45 transition hover:opacity-80" /></div>
							<div className="flex h-12 w-40 items-center justify-center"><Image src="/content/client-ingot-white.png" alt="Ingot" width={105} height={88} className="max-h-6 w-auto opacity-45 transition hover:opacity-80" /></div>
						</div>
					</div>
				</section>

				{/* ============ WHO I WORK WITH ============ */}
				<section className="border-t border-white/10">
					<div className="mx-auto max-w-6xl px-6 py-24">
						<p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-stone-500">01 — Who I work with</p>
						<div className="mt-12 grid gap-14 sm:grid-cols-2">
							<div className="reveal">
								<h3 className="font-display text-3xl text-stone-100">Digital agencies</h3>
								<p className="mt-4 text-base leading-relaxed text-stone-400">A senior product engineer who plugs into your team when the stakes are high. I build under your brand, for your client. Agencies like Ingot have leaned on me for years.</p>
								<figure className="mt-8 border-l border-stone-700 pl-5">
									<blockquote className="text-lg leading-relaxed text-stone-200">&ldquo;Zeltta are a huge asset for us. Timely, well-crafted apps and dev with good comms.&rdquo;</blockquote>
									<figcaption className="mt-4 flex items-center gap-3 text-sm">
										<Image src="/content/testimonial-dan.jpeg" alt="Dan Webster" width={100} height={100} className="h-9 w-9 rounded-full grayscale ring-1 ring-white/20" />
										<span><span className="font-semibold text-stone-200">Dan Webster</span> <span className="text-stone-500">· Founder &amp; Director, Ingot</span></span>
									</figcaption>
								</figure>
							</div>
							<div className="reveal">
								<h3 className="font-display text-3xl text-stone-100">Founders and owner-operators</h3>
								<p className="mt-4 text-base leading-relaxed text-stone-400">You bring the idea and the domain knowledge. I do the rest, from the first whiteboard session to the day your customers log in.</p>
								<figure className="mt-8 border-l border-stone-700 pl-5">
									<blockquote className="text-lg leading-relaxed text-stone-200">&ldquo;Rikus is trustworthy, dependable, and innovative. Thanks for all your help Rikus&rdquo;</blockquote>
									<figcaption className="mt-4 flex items-center gap-3 text-sm">
										<Image src="/content/testimonial-thomas.jpeg" alt="Thomas Nabbs" width={100} height={100} className="h-9 w-9 rounded-full grayscale ring-1 ring-white/20" />
										<span><span className="font-semibold text-stone-200">Thomas Nabbs</span> <span className="text-stone-500">· Founder/Director, The Waterboy</span></span>
									</figcaption>
								</figure>
							</div>
						</div>
					</div>
				</section>

				{/* ============ WORK ============ */}
				<section id="work" className="scroll-mt-24 border-t border-white/10">
					<div className="mx-auto max-w-6xl px-6 py-24">
						<p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-stone-500">02 — Selected work</p>
						<h2 className="reveal mt-6 max-w-2xl font-display text-5xl leading-tight text-stone-100 sm:text-6xl">Every one designed, built and delivered by me.</h2>

						{/* Featured: StarSafe */}
						<article className="reveal mt-20 grid items-center gap-10 lg:grid-cols-5">
							<a href="https://starsafe.app" className="group block lg:col-span-3">
								<Image src="/content/case-star-safe.jpeg" alt="StarSafe health and safety platform" width={2878} height={1514} className="w-full rounded-xl ring-1 ring-white/15 transition group-hover:ring-white/40" />
							</a>
							<div className="lg:col-span-2">
								<p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Star Safety · Web, iOS, Android</p>
								<h3 className="mt-3 font-display text-4xl text-stone-100">StarSafe</h3>
								<p className="mt-4 text-base leading-relaxed text-stone-400">Star Safety came to me after a previous vendor failed to deliver. I built the whole platform, and their construction clients now run their health and safety on it daily, from site inductions to job safety analysis forms.</p>
								<a href="https://starsafe.app" className="mt-5 inline-block font-mono text-sm text-stone-300 underline decoration-stone-700 underline-offset-8 transition hover:text-white hover:decoration-stone-400">starsafe.app ↗</a>
							</div>
						</article>

						{/* Featured: Ōkupu */}
						<article className="reveal mt-20 grid items-center gap-10 lg:grid-cols-5">
							<div className="order-2 lg:order-1 lg:col-span-2">
								<p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Ōkupu · Marketplace · Web, iOS, Android</p>
								<h3 className="mt-3 font-display text-4xl text-stone-100">The first Māori online translation service</h3>
								<p className="mt-4 text-base leading-relaxed text-stone-400">Customers place an order and fluent te reo Māori translators deliver it. I built the payments, automatic payouts, audio recording, and a white-label engine ready for other languages. 1,000+ translations completed.</p>
								<a href="https://okupu.co.nz" className="mt-5 inline-block font-mono text-sm text-stone-300 underline decoration-stone-700 underline-offset-8 transition hover:text-white hover:decoration-stone-400">okupu.co.nz ↗</a>
								<figure className="mt-7 border-l border-stone-700 pl-5">
									<blockquote className="text-sm leading-relaxed text-stone-400">&ldquo;E kaha ana taku whaikupu kia mahi ki tō Rikus taha me tō hinonga te whai ake nei.&rdquo;</blockquote>
									<p className="mt-2 text-sm italic leading-relaxed text-stone-500">&ldquo;I wholeheartedly recommend working alongside Rikus on your next venture.&rdquo;</p>
									<figcaption className="mt-3 flex items-center gap-2.5 text-sm">
										<Image src="/content/testimonial-aroha.jpeg" alt="Aroha Turner" width={400} height={400} className="h-8 w-8 rounded-full grayscale ring-1 ring-white/20" />
										<span><span className="font-semibold text-stone-200">Aroha Turner</span> <span className="text-stone-500">· Founder, Ōkupu</span></span>
									</figcaption>
								</figure>
							</div>
							<a href="https://okupu.co.nz" className="group order-1 block lg:order-2 lg:col-span-3">
								<Image src="/content/case-okupu.jpeg" alt="Ōkupu translation marketplace" width={2878} height={1528} className="w-full rounded-xl ring-1 ring-white/15 transition group-hover:ring-white/40" />
							</a>
						</article>

						{/* Grid: remaining four */}
						<div className="mt-24 grid gap-x-10 gap-y-16 sm:grid-cols-2">
							<article className="reveal">
								<Image src="/content/case-takaro.jpeg" alt="Tākaro te reo Māori vocabulary game" width={2870} height={1398} className="w-full rounded-xl ring-1 ring-white/15" />
								<p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Game Kings · Language games</p>
								<h3 className="mt-2 font-display text-3xl text-stone-100">Tākaro</h3>
								<p className="mt-3 text-base leading-relaxed text-stone-400">The digital companion to Game Kings&rsquo; Tākaro te reo Māori games: hundreds of words with native-speaker audio, searchable and organised by game edition.</p>
								<figure className="mt-5 border-l border-stone-700 pl-5">
									<blockquote className="text-sm text-stone-400">&ldquo;Top notch app development!&rdquo;</blockquote>
									<figcaption className="mt-2 flex items-center gap-2.5 text-sm">
										<Image src="/content/testimonial-eliot.jpeg" alt="Eliot Jessep" width={100} height={100} className="h-8 w-8 rounded-full grayscale ring-1 ring-white/20" />
										<span><span className="font-semibold text-stone-200">Eliot Jessep</span> <span className="text-stone-500">· Founder, Game Kings</span></span>
									</figcaption>
								</figure>
							</article>

							<article className="reveal">
								<Image src="/content/case-autism-nz.jpeg" alt="Autism Connect community platform" width={2880} height={1528} className="w-full rounded-xl ring-1 ring-white/15" />
								<p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Autism New Zealand · Community</p>
								<h3 className="mt-2 font-display text-3xl text-stone-100">Autism Connect</h3>
								<p className="mt-3 text-base leading-relaxed text-stone-400">A private chat and video platform where people with autism and their families connect with Autism NZ staff and each other: public and private rooms, group and one-to-one video.</p>
							</article>

							<article className="reveal">
								<Image src="/content/case-food-rescue.jpeg" alt="Kaivolution food rescue app" width={2876} height={1504} className="w-full rounded-xl ring-1 ring-white/15" />
								<p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Go Eco · Food rescue</p>
								<h3 className="mt-2 font-display text-3xl text-stone-100">Kaivolution</h3>
								<p className="mt-3 text-base leading-relaxed text-stone-400">Pickup-and-delivery tracking with impact dashboards. I rode along on the rescue runs first, then built the system around what the crews actually do; the impact reports now back their funding applications.</p>
							</article>

							<article className="reveal">
								<Image src="/content/case-nourished-for-nil.jpeg" alt="Nourished for Nil operations system" width={2874} height={1502} className="w-full rounded-xl ring-1 ring-white/15" />
								<p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Nourished for Nil · Repeat client</p>
								<h3 className="mt-2 font-display text-3xl text-stone-100">Two systems, years apart</h3>
								<p className="mt-3 text-base leading-relaxed text-stone-400">First an inventory system for their food rescue operation. Years later they came back for a second build to run their food banks and social supermarket. Repeat work is the reference I value most.</p>
							</article>
						</div>
					</div>
				</section>

				{/* ============ HOW I THINK ============ */}
				<section className="border-t border-white/10">
					<div className="mx-auto max-w-6xl px-6 py-24">
						<p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-stone-500">03 — How I think</p>
						<div className="mt-14 space-y-16">
							<div className="reveal grid gap-4 lg:grid-cols-5">
								<p className="font-display text-4xl leading-tight text-stone-100 lg:col-span-3">Boring technology ships.</p>
								<p className="text-base leading-relaxed text-stone-400 lg:col-span-2">I build on TypeScript, React, React Native, Node and Postgres, because in ten years any good engineer will still be able to maintain it. Your system should never be hostage to one person&rsquo;s favourite niche tools.</p>
							</div>
							<div className="reveal grid gap-4 lg:grid-cols-5">
								<p className="font-display text-4xl leading-tight text-stone-100 lg:col-span-3">The test is Tuesday morning.</p>
								<p className="text-base leading-relaxed text-stone-400 lg:col-span-2">Anything looks good in a walkthrough. The software I&rsquo;m proud of is the kind people open every working day for years without thinking about it.</p>
							</div>
							<div className="reveal grid gap-4 lg:grid-cols-5">
								<p className="font-display text-4xl leading-tight text-stone-100 lg:col-span-3">One accountable person beats a handoff chain.</p>
								<p className="text-base leading-relaxed text-stone-400 lg:col-span-2">The strategist, the designer and the developer are the same person. Whoever took your first call also deploys the code and answers the support email.</p>
							</div>
						</div>
					</div>
				</section>

				{/* ============ HOW I WORK ============ */}
				<section className="border-t border-white/10">
					<div className="mx-auto max-w-6xl px-6 py-24">
						<p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-stone-500">04 — How I work</p>
						<h2 className="reveal mt-6 max-w-3xl font-display text-5xl leading-tight text-stone-100 sm:text-6xl">One engineer. The whole job. You own everything.</h2>
						<div className="mt-14 grid gap-12 lg:grid-cols-3">
							<div className="reveal">
								<p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Step 1</p>
								<h3 className="mt-3 font-display text-2xl text-stone-100">The Scoping Sprint</h3>
								<p className="mt-3 text-base leading-relaxed text-stone-400">Every project starts with a short, paid sprint. You leave with a fixed quote and a build plan solid enough to hand to any developer.</p>
							</div>
							<div className="reveal">
								<p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Step 2</p>
								<h3 className="mt-3 font-display text-2xl text-stone-100">The build</h3>
								<p className="mt-3 text-base leading-relaxed text-stone-400">I do the work myself, from the first call to the final deploy. You see working software within weeks, and every decision is made by the person who has to live with it.</p>
							</div>
							<div className="reveal">
								<p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">Step 3</p>
								<h3 className="mt-3 font-display text-2xl text-stone-100">Yours from day one</h3>
								<p className="mt-3 text-base leading-relaxed text-stone-400">The code, the app, the domain and the data all live in accounts that belong to you. After launch I stay on to manage and improve the system, on retainer or as needed. If you ever want to take it elsewhere, everything is already yours.</p>
							</div>
						</div>
						<div className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-2">
							<p className="reveal self-center text-lg leading-relaxed text-stone-400">Projects typically start at $30k. If your budget or timeline doesn&rsquo;t fit that, I&rsquo;ll tell you on the first call and point you somewhere that does.</p>
							<p className="reveal self-center font-display text-5xl leading-tight text-stone-100 lg:text-right">If I take your project on, it&nbsp;ships.</p>
						</div>
					</div>
				</section>

				{/* ============ ABOUT ============ */}
				<section className="border-t border-white/10">
					<div className="mx-auto max-w-6xl px-6 py-24">
						<p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-stone-500">05 — About</p>
						<Image src="/content/team-rikus-wiehahn.webp" alt="Rikus Wiehahn" width={1024} height={1024} className="reveal mt-10 w-full max-w-sm" />
						<div className="reveal mt-10 max-w-3xl space-y-5 text-lg leading-relaxed text-stone-400">
							<p>I started Zeltta in New Zealand in 2020 so I could choose my clients and build the unusual, complex systems agencies can&rsquo;t deliver, where layers of managers and coordination distort the idea and drag the timeline. Working alone, with the whole picture in one head, I can.</p>
							<p>Most of the work on this page was built there, for founders and organisations that put the entire build in my hands. These days I run Zeltta from Brisbane, and I keep it small on purpose.</p>
						</div>
					</div>
				</section>

				{/* ============ FINAL CTA / BOOKING ============ */}
				<section id="book" className="scroll-mt-24 border-t border-white/10">
					<div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
						<div className="reveal text-center">
							<p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-500">06 — Start</p>
							<h2 className="mt-6 font-display text-5xl text-stone-100 sm:text-6xl">Book a 20-min chat</h2>
							<p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-stone-400">Tell me what you&rsquo;re building and where it&rsquo;s stuck. If I&rsquo;m the right fit, I&rsquo;ll say so. If I&rsquo;m not, I&rsquo;ll point you to someone who is.</p>
						</div>
						<div className="reveal mt-12 overflow-hidden rounded-2xl bg-white p-2">
							<iframe
								src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3PJy8MJfVFCrxboaP025XNdZOzZQKyuYYN0SuphGptF90u6ZpnF-_mIG-HlubpumRXzwAB32z5?gv=true"
								title="Book a 20-min chat"
								style={{ border: 0 }}
								width="100%"
								height={600}
							/>
						</div>
						<p className="reveal mt-8 text-center text-sm text-stone-500">Not the right time? <EmailReveal label="Show my email" /> and stay in touch.</p>
					</div>
				</section>

			</main>

			{/* ============ FOOTER ============ */}
			<footer className="border-t border-white/10">
				<div className="mx-auto max-w-6xl px-6 py-12">
					<div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
						<div>
							<Image src="/assets/logo-text.png" alt="Zeltta" width={1459} height={703} className="h-6 w-auto" />
							<p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-500">Custom software, designed, built and shipped by Rikus Wiehahn.</p>
						</div>
						<div className="space-y-2 font-mono text-sm text-stone-400">
							<p>Brisbane, Australia</p>
							<p><EmailReveal label="Show email" /></p>
							<p><a href="https://www.linkedin.com/in/rikusw/" className="transition hover:text-stone-200">LinkedIn</a></p>
							<p className="text-stone-600">ABN 89 848 562 991</p>
						</div>
					</div>
					<p className="mt-10 border-t border-white/10 pt-6 font-mono text-xs text-stone-600">© 2026 Zeltta · Trade business software: <a href="https://zeltta.com.au" className="transition hover:text-stone-300">zeltta.com.au</a></p>
				</div>
			</footer>
		</>
	);
};

export default Page;
