import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import roomApi from '../../utils/api/roomApi';
import userRoomApi from '../../utils/api/userRoomApi';

const Home = () => {
    const [inputCode, setInputCode] = useState('');

    const navigate = useNavigate();

    const handlePostRoom = async () => {
        await roomApi
            .getRoomByCode(inputCode)
            .then((res) => {
                console.log(res);
                userRoomApi
                    .postJoinUserRoom({
                        roomId: res?.data.data.id,
                        code: inputCode,
                    })
                    .then((res) => {
                        if (res.data.status == 200) {
                            navigate('/arena_css');
                        } else if (res.data.status == 400) {
                            console.log('Fail ');
                        }
                    })
                    .catch((e) => console.log(e));
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="home">
            <div>
                <input
                    type="text"
                    placeholder="Code: 1234"
                    onChange={(e) => setInputCode(e.target.value)}
                />
            </div>
            <button onClick={handlePostRoom}>JOIN</button>
        </div>
    );
};

export default Home;
