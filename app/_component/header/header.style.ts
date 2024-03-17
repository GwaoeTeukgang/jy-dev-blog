import { tv } from 'tailwind-variants';

export const mobileNavStyle = tv({
  slots: {
    mobileNav: [
      'absolute',
      'top-10',
      'flex-col',
      'overflow-hidden',
      'right-4',
      'pt-2',
      'w-28',
    ],
    menuIcon: ['fill-black', 'dark:fill-white', 'w-4', 'h-4', 'ml-2'],
    mobileNavItem: [
      'bg-lightGray/75',
      'text-black',
      'float-end',
      'pt-2',
      'pb-1',
      'pl-8',
      'pr-3',
      'mb-1',
      'rounded-xl',
      'hover:bg-darkGray',
      'hover:text-white',
      'data-[active="true"]:bg-darkGray',
      'data-[active="true"]:text-white',
    ],
  },
  variants: {
    state: {
      open: {
        mobileNav: ['animate-draw-from-top'],
      },
      close: {
        mobileNav: ['hidden'],
      },
    },
  },
});
export default tv({
  slots: {
    headerContainer: [
      '-left-0',
      'flex',
      'text-black',
      'dark:text-white',
      'justify-between',
      'pt-4',
      'pb-2',
      'text-xl',
      'bg-white',
      'max-sm:bg-white/25',
      'dark:bg-black',
      'dark:max-sm:bg-black/25',
      'backdrop-blur-sm',
      'max-sm:text-sm',
      'max-sm:fixed',
      'max-sm:w-full',
      'max-sm:pr-4',
      'z-50',
    ],
    navContainer: ['flex', 'gap-6', 'mr-10', 'max-md:gab-0', 'max-md:mr-0'],
    navItem: [
      'rounded-lg',
      'relative',
      'cursor-pointer',
      'data-[active="true"]:before:absolute',
      'data-[active="true"]:before:inset-x-0',
      'data-[active="true"]:before:bottom-0',
      'data-[active="true"]:before:h-0.5',
      'data-[active="true"]:before:bg-black',
      'data-[active="true"]:before:dark:bg-white',
      'data-[active="true"]:before:animate-draw-from-left',
    ],
  },
});
