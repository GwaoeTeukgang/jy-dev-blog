import { tv } from 'tailwind-variants';

export const container = tv({
  base: ['mt-14', 'mb-32', 'p-2'],
});

export const listItemContainer = tv({
  base: ['border-l-8', 'border-primary', 'pl-8'],
});

export const itemContainer = tv({
  base: [
    'p-10',
    'my-4',
    'rounded-lg',
    'shadow-lg',
    'flex',
    'dark:shadow-gray-700',
    'max-sm:flex-col'
  ],
});
