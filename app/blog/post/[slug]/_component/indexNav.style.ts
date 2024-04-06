import {tv} from 'tailwind-variants';

export const indexNavBox = tv({
    base: [
        'fixed',
        'max-h-dvh',
        'max-w-[20%]',
        'right-11',
        'max-xl:right-0',
        'top-[30%]',
        'overflow-scroll',
        'p-2',
        'border-l-4',
        'border-l-primary',
    ],
});

export const indexItem = tv({
    base: ['text-gray-300', 'select-none', 'cursor-pointer', 'mb'],
    variants: {
        level: {
            1: ['font-bold', 'text-2xl'],
            2: ['font-bold', 'text-lg'],
            3: ['font-bold', 'text-md'],
        },
        selected: {
            true: ['text-black, dark:text-white', 'underline', 'decoration-2', 'decoration-primary'],
            false: [],
        },
    },
});
