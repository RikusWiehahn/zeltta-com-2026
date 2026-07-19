"use client";

import { useEffect } from "react";

// Gentle fade-up on scroll for elements with the "reveal" class;
// disabled automatically via CSS for reduced motion.
const RevealObserver = () => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.15 }
		);
		document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return null;
};

export default RevealObserver;
