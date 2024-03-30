import {tv} from "tailwind-variants";


export const titleInput = tv({
    base: ['w-full', 'font-bold', 'text-3xl', 'border-b-2', 'flex-1', 'outline-none', 'p']
});

export const summaryInput = tv({
    extend: titleInput,
    base: ['font-normal', 'resize-none', 'text-xl']
})

export const tagInputBox = tv({
    base: ['w-full', 'border-b-2', 'flex-1',]
})