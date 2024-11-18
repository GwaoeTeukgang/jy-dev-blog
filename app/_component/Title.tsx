'use client'
import Link from "next/link";

export default function Title() {
    return <section className={`w-dvw h-dvh content-center leading-tight  text-9xl font-black font-SBAggroB z-50  snap-start
    flex flex-col justify-between
    bg-transparent max-sm:text-6xl max-sm:flex-col max-sm:gap-4`}>
        <div>
            <h1 className={'text-white mix-blend-difference scale-y-[200%] leading-none origin-top'}>WEB<br/> FRONTEND<br/> DEVELOPER
            </h1>
        </div>
        <div>
            <div
                className={'relative text-right text-white mix-blend-difference max-sm:text-center scale-y-[200%] origin-bottom'}>
                <h1>LEE JIYOON</h1>
            </div>
            <Link href={'/'} onClick={() => localStorage.setItem("v1", "true")}
                  className={'block w-dvw text-xs text-right underline'}>Junivers Dev V1 보러가기</Link>
        </div>
    </section>
}