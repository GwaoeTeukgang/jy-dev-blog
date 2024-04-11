import { tv } from 'tailwind-variants';

export const indexNavBox = tv({
  base: [
    'fixed',
    'max-h-dvh',
    'w-60',
    'right-11',
    'max-xl:right-0',
    'top-[30%]',
    'overflow-scroll',
    'p-2',
    'border-l-4',
    'border-l-primary',
  ],
});

export const indexItem = tv({
  base: [
    'text-gray-300',
    'select-none',
    'cursor-pointer',
    'mb',
    'text-balance',
    'my-2',
  ],
  variants: {
    level: {
      1: ['font-black', 'text-2xl'],
      2: ['font-extrabold', 'text-lg'],
      3: ['font-bold'],
    },
    selected: {
      true: [
        'text-black, dark:text-white',
        'underline',
        'decoration-2',
        'decoration-primary',
      ],
      false: [],
    },
  },
});
