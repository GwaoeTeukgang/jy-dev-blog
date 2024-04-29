import {PaginationReturnMap} from '@/model';
import client from '@/lib/client';

export const getCareers = async (): Promise<PaginationReturnMap<CareerInfo[]>> => {
    try {
        const response = await client(
            `/api/careers`,
            {
                method: 'GET',
            }
        );

        return response as unknown as PaginationReturnMap<CareerInfo[]>;

    } catch (e) {
        return Promise.reject(e);
    }
};
