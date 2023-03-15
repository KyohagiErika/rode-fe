import { Outlet } from 'react-router-dom';

import AlertComponent from '../../components/Alert';
import SubmitEx from '../Algorithm/components/SubmitExample';

const Home = () => {
    return (
        <>
            this is home page
            {/* <AlertComponent /> */}
            <SubmitEx />
            <br />
            <Outlet />
        </>
    );
};

export default Home;
