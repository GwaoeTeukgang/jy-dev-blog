import * as style from '@/app/project/_component/projectModal.style';
import Image from 'next/image';

interface ModalTitleProps {
    title: string;
    period: string;
    members: number;
    contribution: string;
    iconUrl?: string | null;
}

export default function ProjectModalTitle({
                                              title,
                                              period,
                                              members,
                                              iconUrl,
                                              contribution,
                                          }: ModalTitleProps) {
    return (
        <div className={'mb-4'}>
            <div className={'flex items-center'}>
                {iconUrl && (
                    <Image
                        src={iconUrl}
                        alt={title}
                        width={40}
                        height={40}
                        className={'mr-4'}
                    />
                )}
                <h2 className={style.projectTitle()}>{title}</h2>
            </div>
            <div className={style.titleIcon()}>
                <div className={'flex gap-1'}>
                    <svg
                        className="mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {period}
                </div>
                <div className={'flex gap-1'}>
                    <svg
                        className="-ml-1 mr-1.5 h-6 w-6 flex-shrink-0 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle
                                cx="12"
                                cy="6"
                                r="4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            ></circle>
                            <path
                                d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>
                        </g>
                    </svg>
                    {members} 명
                </div>
                <div className={'flex gap-1'}>
                    <svg className={'size-6'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path opacity="0.4"
                                  d="M18.32 12.0002C20.92 12.0002 22 11.0002 21.04 7.72018C20.39 5.51018 18.49 3.61018 16.28 2.96018C13 2.00018 12 3.08018 12 5.68018V8.56018C12 11.0002 13 12.0002 15 12.0002H18.32Z"
                                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path
                                d="M20.0004 14.6998C19.0704 19.3298 14.6304 22.6898 9.58042 21.8698C5.79042 21.2598 2.74042 18.2098 2.12042 14.4198C1.31042 9.38977 4.65042 4.94977 9.26042 4.00977"
                                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                        </g>
                    </svg>
                    {contribution}
                </div>
            </div>
        </div>
    );
}
