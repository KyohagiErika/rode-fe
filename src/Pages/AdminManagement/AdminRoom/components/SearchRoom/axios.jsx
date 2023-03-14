import axios from 'axios';

import { get } from '../../../../../utils/ApiCaller';
import authHeader from '../../../../../utils/api/HeaderAuthorization';

export const api = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
});
export const getInfos = async () => {
    const response = await api.get('/posts');
    return response.data;
};

export const authApi = {
    getAllRoom: async () => {
        const endpoint = `/rooms/get-all`;
        // eslint-disable-next-line no-return-await

        return await get(endpoint, {}, authHeader())
            .then((res) => {
                // if (res.data.code !== 200) console.log(res.response);
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
};
