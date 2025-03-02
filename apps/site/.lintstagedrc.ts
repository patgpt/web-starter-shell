// .lintstagedrc.js

import { Configuration } from 'lint-staged'
import path from 'path'
 
const buildEslintCommand = (filenames: string[]) =>
  `next lint --fix --file ${filenames
    .map((f: string) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
export default {
  '*.{js,jsx,ts,tsx,mdx,json,yml,yaml,md}': [buildEslintCommand],
} satisfies Configuration