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
            'gap-4',
            'mt-5'
        ],
        skillStack: [
            'flex-1',
            'border',
            'p-4',
            'bg-white',
            'dark:bg-black',
            'shadow-white',
            'rounded-xl'
        ],
        stackTitle: [
            'mb-5',
            'text-lg',
            'font-black'
        ],
        skillItem: []
    },
    variants: {
        level: {
            experience: {
                skillStack: [ 'drop-shadow-md', 'border-0']
            },
            knowledgeable: {
                skillStack: ['drop-shadow-lg']
            },
            strong: {
                skillStack: ['drop-shadow-xl', 'border-2']
            },
        }
    }
})