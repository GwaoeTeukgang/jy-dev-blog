import { tv } from 'tailwind-variants';
import { base } from 'next/dist/build/webpack/config/blocks/base';

export const headerContainer = tv({
  base: [
    'flex',
    'text-black',
    'dark:text-white',
    'justify-between',
    'px-20',
    'py-6',
  ],
});


export const headerNavContainer = tv({
  base: [
      'flex',
      'gap-6',
      'mr-10'
  ]
})