import { get, post } from '../ApiCaller';
import authHeader from './HeaderAuthorization';

const userRoomApi = {
    postJoinUserRoom: async (body) => {
        const endpoint = `/user-rooms/join`;
        return await post(endpoint, body, {}, authHeader())
            .then((res) => {
                console.log(res);
                return res;
            })
            .catch((err) => {
                console.log('🚀 ~ file: accountsApi.js:17 ~ getAll: ~ err:', err);
                return err;
            });
    },
};

export default userRoomApi;
