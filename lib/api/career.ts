import { PaginationResponse } from '@/model';
import client from '@/lib/client';

export const getCareers = (): Promise<PaginationResponse<CareerInfo[]>> => {
  return client.get('/api/careers');
};
