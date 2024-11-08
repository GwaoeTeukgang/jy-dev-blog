'use client'
import Link from "next/link";

export default function Title() {
    return <section className={`w-dvw h-dvh content-center leading-tight  text-9xl font-black  justify-around font-SBAggroB z-50 
    bg-transparent max-sm:text-6xl max-sm:flex-col max-sm:justify-start max-sm:gap-4`}>
        <div className={' max-w-[1/2] max-sm:text-center'}>
            <h1 className={'text-white mix-blend-difference'}>WEB<br/> FRONTEND<br/> DEVELOPER</h1>
        </div>
        <div className={'relative max-w-[1/2] text-right text-white mix-blend-difference max-sm:text-center'}>
            <h1>LEE JIYOON</h1>
        </div>
        <Link href={'/'} onClick={() => localStorage.setItem("v1", "true")}
              className={'block w-dvw text-xs text-right underline'}>Junivers Dev V1 보러가기</Link>
    </section>
}