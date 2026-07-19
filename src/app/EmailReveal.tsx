"use client";

import { useState } from "react";

// The address is assembled client-side on click, so it never appears in the
// server-rendered HTML for scraper bots to harvest.
const EmailReveal = (props: { label: string }) => {
	const [revealed, setRevealed] = useState<boolean>(false);

	if (revealed) {
		const address = ["hello", "zeltta.com"].join("@");
		return (
			<a href={`mailto:${address}`} className="transition hover:text-stone-200">
				{address}
			</a>
		);
	}

	return (
		<button
			type="button"
			onClick={() => setRevealed(true)}
			className="underline decoration-dotted underline-offset-4 transition hover:text-stone-200"
		>
			{props.label}
		</button>
	);
};

export default EmailReveal;
