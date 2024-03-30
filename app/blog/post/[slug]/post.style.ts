import { tv } from "tailwind-variants";

export default tv({
    slots: {
        title: ['text-4xl', 'mt-12', 'font-bold', 'text-center'],
        summary: ['text-2xl', 'mt-4', 'mb-2', 'text-center'],
        tagContainer: ['m-4', 'flex', 'justify-center', 'flex-wrap', 'gap-2'],
        content: ['mt-32',
            '[&_ul]:my-6',
            '[&_ol]:my-6',
            '[&_li]:my-1',
            '[&_li]:ml-4',
            '[&_p]:my-6',
            '[&_table]:my-8',
            '[&_table]:shadow-md',
            '[&_table]:rounded-md',
            '[&_table]:p-4',
            '[&_pre]:p-2',
            '[&_tbody>tr:not(:last-child)]:border-b',
            '[&_.tox-checklist>li]:flex',
            '[&_.tox-checklist>li]:gap-2',
            '[&_.tox-checklist>li]:before:content-[""]',
            '[&_.tox-checklist>li]:before:w-5',
            '[&_.tox-checklist>li]:before:h-5',
            '[&_.tox-checklist>li]:before:border-2',
            '[&_.tox-checklist>li]:before:border-black',
            '[&_.tox-checklist>li]:before:dark:border-white',
            '[&_.tox-checklist>li]:before:rounded-md',
            '[&_.tox-checklist>li]:before:block',
            '[&_.tox-checklist>li.tox-checklist--checked]:before:bg-primary',
            '[&_.tox-checklist>li.tox-checklist--checked]:before:bg-primary',
            '[&_.tox-checklist>li.tox-checklist--checked]:before:display',
            '[&_.tox-checklist>li.tox-checklist--checked]:before:flex',
            '[&_.tox-checklist>li.tox-checklist--checked]:before:justify-center',
            '[&_.tox-checklist>li.tox-checklist--checked]:before:content-["✔"]',
            '[&_.tox-checklist>li.tox-checklist--checked]:before:text-[15px]',
            '[&_.tox-checklist>li.tox-checklist--checked]:before:text-[15px]',

        ]
    }
})