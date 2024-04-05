import { tv } from 'tailwind-variants';

export const indexNavBox = tv({
  base: [
    'fixed',
    'max-h-dvh',
    'max-w-[20%]',
    'right-10',
    'max-xl:right-0',
    'top-[30%]',
    'overflow-scroll',
    'p-2',
  ],
});

export const indexItem = tv({
  base: ['text-gary-300', 'select-none', 'cursor-pointer', 'mb'],
  variants: {
    level: {
      1: ['font-bold', 'text-xl'],
      2: ['font-bold', 'text-md'],
      3: ['font-bold', 'text-xs'],
    },
    selected: {
      true: ['text-black, dark:text-white'],
      false: [],
    },
  },
});
