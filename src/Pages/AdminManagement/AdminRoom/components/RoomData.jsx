import { TfiInfinite } from 'react-icons/tfi';

const InfinityIcon = () => {
    return <TfiInfinite />;
};
const icon = <InfinityIcon />;
const RoomData = [
    {
        id: 0,
        room_code: 'A001_SE1000',
        room_type: 'Algorithm',
        open_time: icon,
        close_time: icon,
        duration: icon,
        visibility: 'Public',
    },
    {
        id: 1,
        room_code: 'CB01_SE100',
        room_type: 'CSS Battle',
        open_time: '03/02/2003 15:00',
        close_time: '03/02/2003 15:10',
        duration: '120 mins',
        visibility: 'Private',
    },
    {
        id: 2,
        room_code: 'A001_SE1000',
        room_type: 'Algorithm',
        open_time: icon,
        close_time: icon,
        duration: icon,
        visibility: 'Public',
    },
    {
        id: 3,
        room_code: 'CB01_SE100',
        room_type: 'CSS Battle',
        open_time: '03/02/2003 15:00',
        close_time: '03/02/2003 15:10',
        duration: '120 mins',
        visibility: 'Private',
    },
];
export default RoomData;
