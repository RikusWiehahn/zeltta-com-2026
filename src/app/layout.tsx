import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-ibm-plex-mono",
});

const description =
	"Zeltta is the one-person Brisbane software studio of Rikus Wiehahn. From a sketch on a napkin to systems 100+ companies run on. A few projects a year.";

export const metadata: Metadata = {
	metadataBase: new URL("https://zeltta.com"),
	title: "Zeltta — Custom software studio, Brisbane | Rikus Wiehahn",
	description,
	icons: {
		icon: "/assets/logo-512.png",
		apple: "/assets/logo-512.png",
	},
	openGraph: {
		type: "website",
		url: "https://zeltta.com/",
		title: "Zeltta — Custom software studio, Brisbane | Rikus Wiehahn",
		description,
		images: ["/assets/logo-512.png"],
	},
	twitter: {
		card: "summary",
	},
};

export const viewport: Viewport = {
	themeColor: "#0c0a09",
};

const RootLayout = (props: { children: React.ReactNode }) => {
	return (
		<html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
			<body className="bg-ink font-sans text-stone-300 antialiased">
				{props.children}
				<Analytics />
				<Script id="openai-pixel" strategy="afterInteractive">
					{`!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"WvBWn5B3XyPy6ouDuBvKZF",debug:true});`}
				</Script>
			</body>
		</html>
	);
};

export default RootLayout;
