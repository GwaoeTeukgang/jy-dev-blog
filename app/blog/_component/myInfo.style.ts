import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    container: ['flex', 'flex-col', 'items-center'],
    backgroundImageWrapper: [
      'w-full',
      'h-80',
      'max-sm:h-24',
      'mt-12',
      'overflow-hidden',
      'rounded-lg',
      'shadow-lg',
      'dark:shadow-white',
      'outline',
      'outline-1',
      'outline-white',
      'bg-white',
    ],
    backgroundImage: ['w-full', 'h-full', 'object-cover', 'blur-sm'],
    userImage: [
      'size-28',
      'rounded-lg',
      'shadow-md',
      '-mt-12',
      'z-10',
      'bg-cover',
    ],
    userName: ['mt-4', 'text-lg', 'text-bold', 'font-bold'],
  },
});
