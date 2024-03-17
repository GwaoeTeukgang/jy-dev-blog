import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    container: ['w-full', 'mt-20', 'mb-10'],
    stackWrapper: ['w-full', 'flex', 'max-sm:flex-col', 'gap-4', 'mt-5'],
    skillStack: [
      'flex-1',
      'border',
      'border-primary',
      'p-4',
      'bg-white',
      'dark:bg-black',
      'shadow-primary',
      'rounded-xl',
    ],
    stackTitle: ['mb-5', 'text-lg', 'font-black'],
    stack: ['flex', 'flex-col', 'gap-2', 'pt-4'],
    skillItem: ['flex', 'gap-2', 'items-center'],
  },
  variants: {
    level: {
      EXPERIENCE: {
        skillStack: ['shadow-sm'],
      },
      KNOWLEDGEABLE: {
        skillStack: ['shadow-md'],
      },
      STRONG: {
        skillStack: ['shadow-lg', 'border-2'],
      },
    },
  },
});
