import React from "react";
import CareerItem from "@/app/about/_component/CareerItem";
import * as style from './career.style';
import {getCareers} from "@/lib/api/career";
const getCareerList = async () => {
    try {
        const {data} = await getCareers();
        return data.data;
    } catch (e) {
        throw new Error('경력 정보를 불러오는데 실패했습니다.\n' + e);
    }
}
export default async function Career() {
    const data = await getCareerList();
    return <div className={style.container()}>
        <ul className={style.listItemContainer()}>
            {
                data.map((it, idx) =>
                    <li key={idx} className={style.itemContainer({inOffice: it.inOffice})}>
                        <CareerItem {...it}/>
                    </li>)
            }
        </ul>
    </div>
}