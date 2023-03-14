import { useState, useEffect } from 'react';

import { Table } from 'react-bootstrap';

import More from './More';
import RoomData from './RoomData';
import { authApi } from './SearchRoom/axios';

function TableRoom() {
    // const [rooms, setRooms] = useState([]);
    // useEffect(() => {
    //     authApi
    //         .getAllRoom()
    //         .then((res) => {
    //             console.log(res);
    //             setRooms(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    return (
        <Table striped className="w-98 border-top">
            <thead>
                <tr>
                    <th>Room Code</th>
                    <th>Room Type</th>
                    <th>Open Time</th>
                    <th>Close Time</th>
                    <th>Duration</th>
                    <th>Visibility</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* {rooms.map((room) => (
                    <tr key={room.code}>
                        <td>{room.code}</td>
                        <td>{room.type}</td>
                        <td>{room.openTime}</td>
                        <td>{room.closeTime}</td>
                        <td>{room.duration}</td>
                        <td>{rooms?.isPrivate ? 'Private' : 'Public'}</td>
                        <td>
                            <More />
                        </td>
                    </tr>
                ))} */}
                <RoomData />
            </tbody>
        </Table>
    );
}
export default TableRoom;
