/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'main-bg': 'var(--main-bg)',
				'bg-text': 'var(--bg-text)',
				'text-color': 'var(--text-color)',
				'accent-color': 'var(--accent-color)',
				'titlebar-bg': 'var(--titlebar-bg)',
				'sidebar-bg': 'var(--sidebar-bg)',
				'sidebar-hover-bg': 'var(--sidebar-hover-bg)',
				'explorer-bg': 'var(--explorer-bg)',
				'explorer-hover-bg': 'var(--explorer-hover-bg)',
				'explorer-border': 'var(--explorer-border)',
				'tabs-bg': 'var(--tabs-bg)',
				'tab-bg': 'var(--tab-bg)',
				'tab-active-bg': 'var(--tab-activate-bg)',
				'tab-border': 'var(--tab-border)',
				'bottombar-bg': 'var(--bottombar-bg)',
				'bottombar-border': 'var(--bottombar-border)',
				'button-bg': 'var(--button-bg)',
				'button-text': 'var(--button-text)',
				'bottombar-hover-bg': 'var(--bottombar-hover-bg)',
				'scrollbar-track-bg': 'var(--scrollbar-track-bg)',
				'scrollbar-thumb-bg': 'var(--scrollbar-thumb-bg)',
				'article-bg': 'var(--article-bg)',
			},
		},
	},
	plugins: [],
};
