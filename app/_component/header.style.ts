import {tv} from 'tailwind-variants';

export default tv({
    slots: {
        base: [
            'flex',
            'text-black',
            'dark:text-white',
            'justify-between',
            'px-20',
            'py-6',
            'text-xl',
            'header-text'
        ],
        navContainer: [
            'flex',
            'gap-6',
            'mr-10'
        ],
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
})