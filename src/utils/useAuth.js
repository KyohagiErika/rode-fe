import { useState, useEffect, useCallback, useContext } from 'react';

import { UserContext } from '../Context/User.context';
import Localstorage from './Localstorage';
import authApi from './api/authApi';

const useAuth = () => {
    const { setCurrentUser, setCredential } = useContext(UserContext);
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const token = Localstorage.getToken();

    const checkTokenExpiration = useCallback(() => {
        if (token) {
            const decoded = Localstorage.getJWTUser();
            if (!decoded) {
                setUserRole(undefined);
            }
            if (decoded?.exp < Date.now() / 1000) {
                setUserRole(undefined);
                localStorage.removeItem('token');

                toastError('Phiên đăng nhập đã hết hạn! Vui lòng đăng nhập lại');
                return;
            }
        }
    }, [token]);

    useEffect(() => {
        // Get the JWT token from the cookie
        const token = Localstorage.getToken();
        const crea = Localstorage.getCredentialUser();
        // If there is no token, return
        if (!token) {
            setUserRole(undefined);
            return;
        }

        try {
            console.log('checking token');
            setIsLoading(true);
            setCredential(crea);
            // authApi.getInfoFromGG(credential).then((response) => {
            //     if (response.data.status === 200) {
            //         // console.log(response.data.data);
            //     }
            // });
            authApi.getUser().then((user) => {
                const formatUser = {
                    firstName: user?.data.fname,
                    lastName: user?.data.lname,
                    role: user?.data.role,
                    id: user?.data.id,
                };
                if (!user.data.role) {
                    setUserRole(undefined);
                } else {
                    setUserRole(user?.data.role);
                    setCurrentUser(formatUser);
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);
                }
            });
        } catch (err) {
            // If the token is invalid, return

            return;
        }
        const intervalId = setInterval(checkTokenExpiration, 5000);
        return () => clearInterval(intervalId);
    }, [checkTokenExpiration]);

    return { isLoading, userRole };
};
export default useAuth;
