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
  base: [
    'bg-white',
    'flex-1',
    'mx-14',
    'max-sm:mx-0',
    'p-4',
    'overflow-y-scroll',
    'relative',
    'flex',
    'flex-col',
    'h-[80dvh]',
    'max-sm:min-h-dvh',
    'rounded-lg',
    'dark:bg-black',
    'dark:border',
    'dark:border-gray-500',
  ],
});

export const projectTitle = tv({
  base: [
    'font-bold',
    'mt-3',
    'max-sm:mt-',
    'font-bold',
    'leading-7',
    'text-black',
    'sm:truncate',
    'text-4xl',
    'sm:tracking-tight',
    'dark:text-white',
  ],
});

export const titleIcon = tv({
  base: [
    'mt-2',
    'flex',
    'flex-col',
    'justify-center',
    'gap-2',
    'text-sm',
    'text-gray-500',
  ],
});

export const detailInfoContainer = tv({
  base: ['text-gray-300', 'flex-1', 'flex', 'flex-col',],
});

export const skillTags = tv({
  base: ['flex', 'gap-1', 'flex-wrap', 'my-2'],
});

export const footer = tv({
  base: ['flex', 'justify-end', 'gap-3', 'p-2'],
});

export const footerButton = tv({
  base: [
    'flex',
    'gap-2',
    'dark:invert',
    'text-black',
    'border',
    'border-black-400',
    'dark:border-2',
    'rounded-lg',
    'p-3',
    'hover:shadow-lg',
    'dark:shadow-gray-500',
    'max-sm:text-sm'
  ],
});
