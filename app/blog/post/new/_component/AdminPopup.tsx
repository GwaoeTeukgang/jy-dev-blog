'use client'

import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import * as style from "@/app/blog/post/new/_component/adminPopup.style";

const AdminPopup = ({onClear}: { onClear: (key: string) => boolean }) => {
    const [key, setKey] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const onClick = () => {
        setError(!onClear(key));
    }

    return <div className={style.overlay()}>
        <div className={style.modalContainer()}>
            <h2 className={style.title()}>어드민 키 입력</h2>
            <div className={'flex-1 mb-2'}>
                <input className={style.input()}
                       type={'password'}
                       value={key}
                       onChange={e => setKey(e.target.value)}/>
                <div className={`text-red-700 text-sm text-center opacity-${error ? 100 : 0 }`}>틀렸습니다.</div>
            </div>
            <button className={style.button()} onClick={onClick}>확인</button>
        </div>
    </div>
}

export default function ({setDisabled}: { setDisabled: (e: boolean) => void }) {
    const [open, setOpen] = useState<boolean>(false);
    const [container, setContainer] = useState<Element | null>(null);
    const [adminKey, setAdminKey] = useState<string>("");

    useEffect(() => {
        const key = localStorage.getItem("adminKey");
        if (document && (key!== process.env.NEXT_PUBLIC_ADMIN_KEY)) {
            setContainer(document.getElementById('portal-container') ?? null);
            setAdminKey(localStorage.getItem("adminKey") ?? '');
            setOpen(true);
            setDisabled(true);
        }
    }, []);

    const onClear = (key: string) => {
        if (key === process.env.NEXT_PUBLIC_ADMIN_KEY) {
            setOpen(false);
            setDisabled(false);
            setAdminKey(key);
            localStorage.setItem('adminKey', key);
            return true;
        }
        return false;
    }

    return <>
        {(open && container && adminKey !== process.env.NEXT_PUBLIC_ADMIN_KEY) && createPortal(
            <AdminPopup onClear={onClear}/>, container)}
    </>;
}