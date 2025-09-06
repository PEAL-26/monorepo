import base from './eslint.config.js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import pluginQuery from '@tanstack/eslint-plugin-query';

const configs = tseslint.config(...base, {
  plugins: {
    'react-hooks': reactHooks,
    '@tanstack/query': pluginQuery,
  },
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    '@tanstack/query/exhaustive-deps': 'error',
  },
});

export default configs;
