import { tv } from 'tailwind-variants';

export const container = tv({
  base: ['w-[1080px]', 'overflow-scroll', 'mx-auto', 'gap-10', 'flex', 'no-scrollbar'],
});

export const imageFrame = tv({
  base: ['w-[1080px]'],
});

export const moveButton = tv({
  base: ['w-8', 'h-8', 'font-bold', 'text-white', 'bg-black', 'rounded-full', 'flex', 'justify-center', 'items-center', 'cursor-pointer', 'select-none']
})