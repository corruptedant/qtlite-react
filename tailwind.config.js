const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            slate: colors.slate,
            white: colors.white,
            red: colors.red,
            green: colors.green,
            gray: colors.gray,
            midnight: '#131516',
            gunmetal: '#2c3134',
            davys: '#474D50',
            keppel: {
                300: '#69c9b6',
                500: '#43b9a2',
            },
        },
    },
    plugins: [],
}
