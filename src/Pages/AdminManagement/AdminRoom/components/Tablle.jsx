import { Table } from 'react-bootstrap';

import More from './More';
import RoomData from './RoomData';

const TableRoom = () => {
    return (
        <Table striped>
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
                {RoomData.map((props) => {
                    return (
                        <tr key={props.id}>
                            <td>{props.room_code}</td>
                            <td>{props.room_type}</td>
                            <td>{props.open_time}</td>
                            <td>{props.close_time}</td>
                            <td>{props.duration}</td>
                            <td>{props.visibility}</td>
                            <td>
                                <More />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
export default TableRoom;
