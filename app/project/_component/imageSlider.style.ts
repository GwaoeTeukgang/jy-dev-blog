import { tv } from 'tailwind-variants';

export const container = tv({
  base: ['w-[1080px]', 'overflow-scroll', 'mx-auto', 'gap-10', 'flex', 'no-scrollbar',],
});

export const imageFrame = tv({
  base: ['w-[1080px]', 'max-sm:w-full'],
});

export const moveButton = tv({
  base: ['size-8', 'max-sm:text-8xs', 'max-sm:size-4', 'font-extrabold', 'text-white', 'bg-black', 'rounded-full', 'flex', 'justify-center', 'items-center', 'cursor-pointer', 'select-none']
})