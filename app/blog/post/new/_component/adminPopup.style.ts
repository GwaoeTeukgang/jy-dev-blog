import {tv} from "tailwind-variants";

export const overlay = tv({
    base: ['absolute', 'inset-0', 'z-50', 'bg-black', 'bg-opacity-80', 'flex', 'justify-center', 'items-center']
})

export const modalContainer = tv({
    base: ['z-100', 'w-80', 'h-58', 'bg-white', 'dark:bg-black', 'mt-[-20%]',
        'rounded-lg', 'shadow', 'dark:shadow-lightGray', 'p-10', 'flex', 'flex-col', 'items-center', 'justify-between']
})

export const title = tv({
    base: ['font-bold', 'text-lg', 'mb-4']
})

export const input = tv({
    base: ['border-2','rounded-lg', 'p-2', 'mb-1']
})

export const button = tv({
    base: ['rounded-lg', 'bg-primary', 'px-4', 'pt-2', 'font-bold', 'text-white']
})