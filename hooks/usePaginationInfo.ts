import {MetaPagination, Pagination} from "@/model";
import {useEffect, useState} from "react";

export default function usePaginationInfo<T>(data: T[], meta: MetaPagination) {
    const [list, setList] = useState<T[]>([]);
    const [pageInfo, setPageInfo] = useState<Pagination>({
        page: 0,
        pageCount: 0,
        pageSize: 0,
        total: 0
    });
    const [hasMorePost, setHasMorePost] = useState(true);

    useEffect(() => {
        setPagination(data, meta);
    }, [data, meta]);

    const setPagination = (data: T[], meta: MetaPagination) => {
        setList(data);
        setPageInfo(meta.pagination);
        if(list.length === meta.pagination.total) {
            setHasMorePost(false);
        }
    }


    return {list, pageInfo, setPagination, hasMorePost};
}