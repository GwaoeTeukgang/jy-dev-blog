import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    blogInfo: [
      'flex',
      'w-full',
      'items-center',
      'justify-center',
      'gap-10',
      'text-lg',
      'mt-12',
      'border-b',
      'border-lightGray',
      'dark:border-darkGray',
    ],
    blogInfoItem: ['flex', 'flex-col', 'text-center', 'gap-2', 'mb-12'],
  },
});
