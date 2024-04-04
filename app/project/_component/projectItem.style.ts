import { tv } from 'tailwind-variants';

export const projectContainer = tv({
  base: ['pt-14', 'flex-1', 'h-64'],
});

export const imageContainer = tv({
  base: [
    'w-full',
    'h-48',
    'relative',
    'rounded-lg',
    'overflow-hidden',
    'shadow',
    'bg-black',
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
    '[&_.right]:flex',
    '[&_.right]:w-[30%]',
    'max-sm:[&_.right]:w-full',
  ],
});

export const projectName = tv({
  base: ['font-bold', 'text-6xl', 'text-white'],
});

export const projectSummary = tv({
  base: ['text-white', 'text-balance', 'mt-auto'],
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
    'hover:scale-125',
    'hover:blur-none',
    'transition-all',
  ],
});
