import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                red: '#FF2E00',
                'main-blue': '#1964FF',
                'main-light-blue': '#A5CBFF',
                'main-dark-blue': '#1F3F99',
                success: '#3AD994',
                info: '#32ACFF',
                warning: '#FFC832',
                error: '#FF5B69',
                pink: '#FF8CB6',
                indigo: '#6C6CFF',
                cyan: '#6DE9F5',
                lime: '#8EF36A',
                lemon: '#F6EF6F',
                orange: '#FE944C',
                gray: {
                    '100': '#F7F7F7',
                    '200': '#E4E4E4',
                    '300': '#CCCCCC',
                    '400': '#A6A6A6',
                    '500': '#7D7D7D',
                    '600': '#525252',
                    '700': '#242424',
                    '800': '#121212',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
} satisfies Config;
