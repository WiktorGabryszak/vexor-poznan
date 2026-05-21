module.exports = {
	content: ["./src/**/*.{astro,html,js,ts}"],
	theme: {
		extend: {
			colors: {
				primary: "#636EDF",
				"primary-hover": "#5963C8",
				brand: {
					text: "#484848",
					muted: "#888888",
					accent: "#000000",
					border: "#DFDEE5",
					bg: "#FFFFFF",
					"bg-light": "#F2F1F6",
				},
			},
			fontFamily: {
				sans: ['"Mona Sans"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
			},
			fontSize: {
				hero: ["clamp(42px,6vw,100px)", { lineHeight: "1.1", fontWeight: "500", letterSpacing: "-0.025em" }],
				h2: ["clamp(32px,4vw,56px)", { lineHeight: "1.15", fontWeight: "500", letterSpacing: "-0.015em" }],
				h5: ["clamp(21px,4vw,32px)", { lineHeight: "1.1875", fontWeight: "400", letterSpacing: "-1px" }],
				stat: ["clamp(36px,4vw,52px)", { lineHeight: "1", fontWeight: "800", letterSpacing: "-0.02em" }],
				"ghost-word": ["clamp(80px,18vw,260px)", { lineHeight: "1", fontWeight: "900", letterSpacing: "-0.04em" }],
			},
			borderRadius: {
				card: "20px",
				section: "24px",
			},
			animation: {
				float: "float 5s ease-in-out infinite",
				"float-2": "float 6s ease-in-out 1s infinite",
				"float-3": "float-shape3 5s ease-in-out 2s infinite",
				"float-4": "float 4s ease-in-out infinite",
				"rotate-cta": "rotateCTA 12s linear infinite",
				reveal: "reveal 0.55s cubic-bezier(0.16,1,0.3,1) forwards",
			},
			keyframes: {
				float: {
					"0%,100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-15px)" },
				},
				"float-shape3": {
					"0%,100%": { transform: "translateY(-50%)" },
					"50%": { transform: "translateY(calc(-50% - 15px))" },
				},
				rotateCTA: {
					to: { transform: "rotate(360deg)" },
				},
				reveal: {
					from: { opacity: "0", transform: "translateY(24px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
			},
			backgroundImage: {
				"hero-gradient": `
          radial-gradient(ellipse 80% 60% at 20% 70%, rgba(192,0,96,.5) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 20%, rgba(42,0,120,.5) 0%, transparent 60%),
          linear-gradient(135deg,#0D0B3B 0%,#1E0A5E 50%,#0A0A2E 100%)
        `,
				"portfolio-image": `url('/h1_bg-3.png')`,
				"hero-image": "url('/h6_bg-1.jpg')",
				"hero-dots": "url('/h6_net')",
				"portfolio-top": `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(160,160,255,.15) 0%, transparent 60%),
          #FFFFFF
        `,
				"team-card": `
          linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.55)),
          linear-gradient(135deg, #2a2a3a 0%, #1a1a2a 100%)
        `,
				"testi-card": `
          linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.2)),
          linear-gradient(135deg,#3a3a4a,#1a1a2a)
        `,
				"placeholder-img": `
          repeating-linear-gradient(45deg, rgba(255,255,255,.08) 0px, rgba(255,255,255,.08) 1px, transparent 1px, transparent 20px),
          linear-gradient(135deg, #C8C8E0 0%, #9898C0 100%)
        `,
				"shape-1": "url('/h6_deco-1.png')",
				"shape-2": "url('/h6_deco-2.png')",
				"shape-3": "linear-gradient(135deg,#4060FF,#A040FF,#FF4080)",
				"shape-4": "linear-gradient(135deg,#4060FF,#2030CC)",
			},
		},
	},
	plugins: [],
};
