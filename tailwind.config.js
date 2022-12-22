/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './public/safelist.txt',
    ],
    // JIT 모드를 유지한채로 Tailwind css 를 변수로 지정하고 싶으면 safelist 를 작성해야합니다.
    // safelist : [
    //     {
    //         pattern:
    //     }
    // ]
    theme: {
        extend: {},
    },
    plugins: [
        // 공식 플러그인 4가지. 원하는 플러그인을 devdependencies 에 설치하고 사용.
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/line-clamp'),
    ],
};
