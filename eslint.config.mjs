import nextConfig from 'eslint-config-next/core-web-vitals';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = [
    ...nextConfig,
    eslintConfigPrettier,
    {
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@next/next/no-img-element': 'off',
            'react/no-unescaped-entities': 'off',
            'react/jsx-key': 'off',
            // eslint-plugin-react-hooks 7.0+ 新增的规则，对于常见的 React 模式过于严格
            'react-hooks/set-state-in-effect': 'off',
            'react-hooks/refs': 'off',
        },
    },
    {
        ignores: ['public/js/**'],
    },
];

export default eslintConfig;

