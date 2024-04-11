import { tv } from 'tailwind-variants';


export const title = tv({
  base: ['text-2xl', 'font-bold', 'mt-14', 'max-sm:text-xl']
})
export const container = tv({
  base: [
    'mt-8',
    'flex',
    'gap-5',
    'max-sm:flex-col-reverse',
    'max-sm:justify-reverse',
  ],
});

export const img = tv({
  base: ['rounded-lg', 'max-sm:w-full', 'max-sm:h-auto'],
});
