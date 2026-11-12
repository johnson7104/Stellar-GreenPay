import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const postcssConfig = { plugins: { "@tailwindcss/postcss": {}, autoprefixer: {} } };
export default postcssConfig;
