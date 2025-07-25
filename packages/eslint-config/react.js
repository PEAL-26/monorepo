import base from './base.js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

const configs = tseslint.config(...base, {
  plugins: {
    'react-hooks': reactHooks,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
});

export default configs;
