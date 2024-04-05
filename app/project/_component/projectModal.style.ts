import { tv } from 'tailwind-variants';

export const overlay = tv({
  base: [
    'fixed',
    'inset-0',
    'bg-black/75',
    'z-50',
    'flex',
    'justify-center',
    'items-center',
  ],
});

export const container = tv({
  base: ['bg-white', 'flex-1', 'mx-14', 'max-sm:mx-0', 'p-4', 'h-[80dvh]', 'overflow-y-scroll', 'relative'],
});

export const projectTitle = tv({
  base: ['font-bold', 'mt-3', 'text-2xl','font-bold','leading-7','text-gray-900','sm:truncate','sm:text-xl','sm:tracking-tight'],
});

export const titleIcon = tv({
  base: ['mt-2','flex','items-center','text-sm','text-gray-500'],
});
