
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
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #5D3891 
		"--color-primary-50": "231 225 239", // #e7e1ef
		"--color-primary-100": "223 215 233", // #dfd7e9
		"--color-primary-200": "215 205 228", // #d7cde4
		"--color-primary-300": "190 175 211", // #beafd3
		"--color-primary-400": "142 116 178", // #8e74b2
		"--color-primary-500": "93 56 145", // #5D3891
		"--color-primary-600": "84 50 131", // #543283
		"--color-primary-700": "70 42 109", // #462a6d
		"--color-primary-800": "56 34 87", // #382257
		"--color-primary-900": "46 27 71", // #2e1b47
		// secondary | #F99417 
		"--color-secondary-50": "254 239 220", // #feefdc
		"--color-secondary-100": "254 234 209", // #feead1
		"--color-secondary-200": "254 228 197", // #fee4c5
		"--color-secondary-300": "253 212 162", // #fdd4a2
		"--color-secondary-400": "251 180 93", // #fbb45d
		"--color-secondary-500": "249 148 23", // #F99417
		"--color-secondary-600": "224 133 21", // #e08515
		"--color-secondary-700": "187 111 17", // #bb6f11
		"--color-secondary-800": "149 89 14", // #95590e
		"--color-secondary-900": "122 73 11", // #7a490b
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
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #f50f32 
		"--color-warning-50": "254 219 224", // #fedbe0
		"--color-warning-100": "253 207 214", // #fdcfd6
		"--color-warning-200": "253 195 204", // #fdc3cc
		"--color-warning-300": "251 159 173", // #fb9fad
		"--color-warning-400": "248 87 112", // #f85770
		"--color-warning-500": "245 15 50", // #f50f32
		"--color-warning-600": "221 14 45", // #dd0e2d
		"--color-warning-700": "184 11 38", // #b80b26
		"--color-warning-800": "147 9 30", // #93091e
		"--color-warning-900": "120 7 25", // #780719
		// error | #e8d611 
		"--color-error-50": "252 249 219", // #fcf9db
		"--color-error-100": "250 247 207", // #faf7cf
		"--color-error-200": "249 245 196", // #f9f5c4
		"--color-error-300": "246 239 160", // #f6efa0
		"--color-error-400": "239 226 88", // #efe258
		"--color-error-500": "232 214 17", // #e8d611
		"--color-error-600": "209 193 15", // #d1c10f
		"--color-error-700": "174 161 13", // #aea10d
		"--color-error-800": "139 128 10", // #8b800a
		"--color-error-900": "114 105 8", // #726908
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