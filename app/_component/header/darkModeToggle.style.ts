import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    container: ['flex', 'items-center'],
    base: [
      'block',
      'w-8',
      'max-sm:w-4',
      'h-4',
      'max-sm:h-2',
      'rounded-full',
      'bg-gray-300',
      'border-3 border-black',
      'relative',
    ],
    ball: [
      'w-1/2',
      'h-full',
      'bg-black',
      'rounded-full',
      'absolute',
      'outline outline-1 outline-white',
      'transition-transform',
      'cursor-pointer',
    ],
    input: ['hidden'],
  },
  variants: {
    mode: {
      light: {
        ball: 'translate-x-0',
      },
      dark: {
        ball: 'translate-x-full',
      },
    },
  },
});
