import { tv } from 'tailwind-variants';

export const imageContainer = tv({
  base: [
    'flex-1',
    'h-56',
    'max-sm:h-[calc(100dvh-6rem)]',
    'shadow-lg',
    'dark:shadow-gray-600',
    'relative',
    'rounded-lg',
    'overflow-hidden',
    'bg-black',
    'max-sm:snap-center',
    'mt-10',
    'max-sm:my-4',
  ],
});

export const projectInfo = tv({
  base: [
    'p-4',
    'absolute',
    'inset-0',
    'flex',
    'max-sm:flex-col',
    'justify-between',
    '[&_.left]:flex-1',
    '[&_.left]:flex',
    '[&_.left]:flex-col',
    '[&_.left]:justify-between',
    '[&_.right]:flex',
    '[&_.right]:flex-col',
    '[&_.right]:w-[30%]',
    'max-sm:[&_.right]:w-full',
  ],
});

export const projectName = tv({
  base: ['font-bold', 'text-4xl', 'text-white', 'z-20'],
});

export const projectDate = tv({
  base: ['text-white', 'z-20', 'text-sm', '-mt-2'],
});

export const projectSummary = tv({
  base: ['text-white', 'text-balance', 'z-20', 'text-xs', 'mt-2'],
});

export const image = tv({
  base: [
    'w-full',
    'h-full',
    'relative',
    'object-cover',
    'blur-sm',
    'z-10',
    'opacity-50',
    'scale-105',
    'hover:scale-125',
    'hover:blur-none',
    'transition-all',
  ],
});

export const iconContainer = tv({
  base: [
    'flex',
    'fixed',
    'relative',
    'z-10',
    'end-0',
    'invert',
    '-mb-1',
    'gap-2',
    'max-sm:mb-4',
    'z-20',
  ],
});

export const skillTag = tv({
  base: [
    'mt-auto',
    'mb-1',
    'z-20',
    'flex',
    'justify-end',
    'max-sm:justify-center',
    'flex-wrap',
    'gap-1',
    'text-nowrap',
  ],
});
