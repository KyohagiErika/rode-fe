import { get, post } from '../ApiCaller';
import authHeader from './HeaderAuthorization';

const roomApi = {
    getRoomByCode: async (code) => {
        const endpoint = `/rooms/get-one-by-code/${code}`;
        return await get(endpoint, {}, authHeader())
            .then((res) => {
                console.log(res);
                console.log(res.data.id);
                return res;
            })
            .catch((err) => {
                console.log('🚀 ~ file: roomApi.js:17 ~ getAll: ~ err:', err);
                return err;
            });
    },
};

export default roomApi;
