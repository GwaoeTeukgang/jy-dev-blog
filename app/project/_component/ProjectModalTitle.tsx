import * as style from '@/app/project/_component/projectModal.style';


interface ModalTitleProps {
    title: string;
    period: string
    members: number;
}

export default function ProjectModalTitle({title, period, members}: ModalTitleProps) {
    return <div className={'mb-4'}>
        <h2 className={style.projectTitle()}>{title}</h2>
        <div className={style.titleIcon()}>
            <div className={'flex gap-1'}>
                <svg className="mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                          clipRule="evenodd"/>
                </svg>
                {period}
            </div>
            <div className={'flex gap-1'}>
                <svg className="-ml-1 mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400" viewBox="0 0 20 20"
                     fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <circle cx="12" cy="6" r="4" stroke="currentColor" stroke-width="1.5"></circle>
                        <path
                            d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                    </g>
                </svg>
                {members} 명
            </div>

        </div>
    </div>
}