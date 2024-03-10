import { tv } from 'tailwind-variants';

export const homeLayoutContainer = tv({
  base: [
    'w-dvw',
    'h-dvh',
    'flex',
    'flex-col',
    'bg-white',
    'dark:bg-black',
    'text-black',
    'dark:text-white',
    'px-64',
    'max-md:px-2',
  ],
});
export const homeContainer = tv({
  base: ['flex-1', 'mt-20'],
});

export default tv({
  slots: {
    container: ['flex-1', 'mt-20'],
    location: ['text-xl'],
    intro: ['mt-10', 'h-28', 'flex', 'gap-2', 'mb-6'],
    introLeft: ['h-full', 'text-2xl', 'font-black', 'basis-2/3'],
    introRight: ['mt-auto', 'text-xl', 'basis-1/3'],
    homeImage: [
      'object-cover',
      'w-full',
      'h-[720px]',
      'rounded-lg',
      'shadow-xl',
    ],
    source: ['text-xs', 'text-lightGray'],
  },
});
