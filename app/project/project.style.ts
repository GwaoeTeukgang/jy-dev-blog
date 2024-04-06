import { tv } from 'tailwind-variants';

export const projectContainer = tv({
  base: ['mt-8'],
});

export const projectTitle = tv({
  base: ['font-bold', 'text-2xl', 'mt-14', 'max-sm:text-xl'],
});

export const itemContainer = tv({
  base: [
    'snap-mandatory',
    'snap-y',
    'overflow-scroll',
    'w-full',
    'h-[calc(100vh-6rem)]',
  ],
});
