import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#C8EDFD',
                white: '#FFF',
                lightGray: '#D0D0D0',
                black: '#030303',
                darkGray: '#2C2C2C',
            },
            keyframes: {
                'draw-from-left': {
                    '0%': {
                        width: '0'
                    },
                    '100%': {
                        width: '100%'
                    },
                },
                'draw-from-top': {
                    '0%': {
                        height: '0'
                    },
                    '100%': {
                        height: '100%'
                    },
                },
            },
            animation: {
                'draw-from-left': 'draw-from-left 0.1s ease-in-out',
                'draw-from-top': 'draw-from-top 0.3s ease-in-out',
            },
            screens: {
                sm: '700px'
            }
        },
    },
    plugins: [],
};
export default config;
