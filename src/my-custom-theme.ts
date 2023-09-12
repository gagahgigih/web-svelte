
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
		"--theme-font-family-heading": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "0 0 0",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #316280 
		"--color-primary-50": "224 231 236", // #e0e7ec
		"--color-primary-100": "214 224 230", // #d6e0e6
		"--color-primary-200": "204 216 223", // #ccd8df
		"--color-primary-300": "173 192 204", // #adc0cc
		"--color-primary-400": "111 145 166", // #6f91a6
		"--color-primary-500": "49 98 128", // #316280
		"--color-primary-600": "44 88 115", // #2c5873
		"--color-primary-700": "37 74 96", // #254a60
		"--color-primary-800": "29 59 77", // #1d3b4d
		"--color-primary-900": "24 48 63", // #18303f
		// secondary | #FFC436 
		"--color-secondary-50": "255 246 225", // #fff6e1
		"--color-secondary-100": "255 243 215", // #fff3d7
		"--color-secondary-200": "255 240 205", // #fff0cd
		"--color-secondary-300": "255 231 175", // #ffe7af
		"--color-secondary-400": "255 214 114", // #ffd672
		"--color-secondary-500": "255 196 54", // #FFC436
		"--color-secondary-600": "230 176 49", // #e6b031
		"--color-secondary-700": "191 147 41", // #bf9329
		"--color-secondary-800": "153 118 32", // #997620
		"--color-secondary-900": "125 96 26", // #7d601a
		// tertiary | #E8E2E2 
		"--color-tertiary-50": "252 251 251", // #fcfbfb
		"--color-tertiary-100": "250 249 249", // #faf9f9
		"--color-tertiary-200": "249 248 248", // #f9f8f8
		"--color-tertiary-300": "246 243 243", // #f6f3f3
		"--color-tertiary-400": "239 235 235", // #efebeb
		"--color-tertiary-500": "232 226 226", // #E8E2E2
		"--color-tertiary-600": "209 203 203", // #d1cbcb
		"--color-tertiary-700": "174 170 170", // #aeaaaa
		"--color-tertiary-800": "139 136 136", // #8b8888
		"--color-tertiary-900": "114 111 111", // #726f6f
		// success | #F11A7B 
		"--color-success-50": "253 221 235", // #fdddeb
		"--color-success-100": "252 209 229", // #fcd1e5
		"--color-success-200": "252 198 222", // #fcc6de
		"--color-success-300": "249 163 202", // #f9a3ca
		"--color-success-400": "245 95 163", // #f55fa3
		"--color-success-500": "241 26 123", // #F11A7B
		"--color-success-600": "217 23 111", // #d9176f
		"--color-success-700": "181 20 92", // #b5145c
		"--color-success-800": "145 16 74", // #91104a
		"--color-success-900": "118 13 60", // #760d3c
		// warning | #FBA1B7 
		"--color-warning-50": "254 241 244", // #fef1f4
		"--color-warning-100": "254 236 241", // #feecf1
		"--color-warning-200": "254 232 237", // #fee8ed
		"--color-warning-300": "253 217 226", // #fdd9e2
		"--color-warning-400": "252 189 205", // #fcbdcd
		"--color-warning-500": "251 161 183", // #FBA1B7
		"--color-warning-600": "226 145 165", // #e291a5
		"--color-warning-700": "188 121 137", // #bc7989
		"--color-warning-800": "151 97 110", // #97616e
		"--color-warning-900": "123 79 90", // #7b4f5a
		// error | #DFDFDF 
		"--color-error-50": "250 250 250", // #fafafa
		"--color-error-100": "249 249 249", // #f9f9f9
		"--color-error-200": "247 247 247", // #f7f7f7
		"--color-error-300": "242 242 242", // #f2f2f2
		"--color-error-400": "233 233 233", // #e9e9e9
		"--color-error-500": "223 223 223", // #DFDFDF
		"--color-error-600": "201 201 201", // #c9c9c9
		"--color-error-700": "167 167 167", // #a7a7a7
		"--color-error-800": "134 134 134", // #868686
		"--color-error-900": "109 109 109", // #6d6d6d
		// surface | #F5F5F5 
		"--color-surface-50": "254 254 254", // #fefefe
		"--color-surface-100": "253 253 253", // #fdfdfd
		"--color-surface-200": "253 253 253", // #fdfdfd
		"--color-surface-300": "251 251 251", // #fbfbfb
		"--color-surface-400": "248 248 248", // #f8f8f8
		"--color-surface-500": "245 245 245", // #F5F5F5
		"--color-surface-600": "221 221 221", // #dddddd
		"--color-surface-700": "184 184 184", // #b8b8b8
		"--color-surface-800": "147 147 147", // #939393
		"--color-surface-900": "120 120 120", // #787878
		
	}
}