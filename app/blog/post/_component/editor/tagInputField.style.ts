import {tv} from "tailwind-variants";

export const container = tv({
    base: ['w-full', 'relative'],
    variants: {
        opened: {
            true: [],
            false: ['hidden'],
        }
    }
});

export const list = tv({
    base: ['absolute', 'w-full', 'top-0', 'h-40', 'shadow', 'rounded', 'z-20', 'overflow-scroll', 'bg-white', 'dark:bg-black', 'shadow-gray-500']
});

export const listItem = tv({
    base: ['py-2', 'px-4', 'border-t', 'hover:bg-gray-200', 'hover:dark:bg-gray-600'],
    variants: {
        selected: {
            true: ['bg-gray-300', 'dark:bg-gray-600'],
            false: [],
        }
    }
});

export const closeButton = tv({
    base: ['absolute', 'py-1', 'px-2', 'shadow', 'mt-2', 'rounded-lg', 'text-white', 'bg-primary', 'top-40', 'right-0', 'z-20']
})