import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './src/my-custom-theme'
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			backgroundImage: {
				'home-pattern': "url('/bg/home.png')",
				'faq-pattern': "url('/bg/faq.png')",
				'gallery-pattern': "url('/bg/galleries.png')",
				'acc-pattern': "url('/bg/acces.png')",
			  }
		},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					myCustomTheme
				]
			}
		}),
	],
} satisfies Config;
