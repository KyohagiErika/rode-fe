import { useState, useEffect } from 'react';

import { TfiInfinite } from 'react-icons/tfi';

import More from './More';
import { authApi } from './SearchRoom/axios';

// import { authApi } from './SearchRoom/axios';
const InfinityIcon = () => {
    return <TfiInfinite />;
};
const icon = <InfinityIcon />;
const DateFormat = (props) => {
    var date = new Date(props);
    var hour = date.getUTCHours();
    var minute = date.getUTCMinutes();
    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    var newDate = day + '-' + month + '-' + year + ' ' + hour + ':' + minute;
    return newDate;
};

function RoomData() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        authApi
            .getAllRoom()
            .then((res) => {
                console.log(res);
                setRooms(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            {rooms.map((room) => (
                <tr key={room.id}>
                    <td>{room.code}</td>
                    <td>{room.type}</td>
                    <td>{DateFormat(room.openTime)}</td>
                    <td>{room?.isPrivate ? DateFormat(room.closeTime) : icon}</td>
                    <td>{room?.isPrivate ? room.duration : icon}</td>
                    <td>{room?.isPrivate ? 'Private' : 'Public'}</td>
                    <td>
                        <More />
                    </td>
                </tr>
            ))}
        </>
    );
}
export default RoomData;
