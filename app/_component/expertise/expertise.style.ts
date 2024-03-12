import {tv} from "tailwind-variants";

export default tv({
    slots: {
        container: [
            'w-full',
            'mt-20',
            'mb-10',
        ],
        stackWrapper: [
            'w-full',
            'flex',
            'max-sm:flex-col',
            'gap-4',
            'mt-5'
        ],
        skillStack: [
            'flex-1',
            'border',
            'border-primary',
            'p-4',
            'bg-white',
            'dark:bg-black',
            'shadow-primary',
            'rounded-xl'
        ],
        stackTitle: [
            'mb-5',
            'text-lg',
            'font-black'
        ],
        skillItem: [
            'flex',
            'text-left'
        ]
    },
    variants: {
        level: {
            experience: {
                skillStack: [ 'shadow-sm']
            },
            knowledgeable: {
                skillStack: ['shadow-md']
            },
            strong: {
                skillStack: ['shadow-lg', 'border-2']
            },
        }
    }
})