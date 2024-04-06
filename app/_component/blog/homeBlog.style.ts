import {tv} from "tailwind-variants";

export const container = tv({
    base: ['min-h-64','flex', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'mt-6', 'max-sm:mt-2', 'mb-20', 'max-sm:flex-col']
})

export const postInfo = tv({
    base: ['w-4/5', 'max-sm:h-4/5','p-4', 'flex', 'flex-col', 'justify-between']
});