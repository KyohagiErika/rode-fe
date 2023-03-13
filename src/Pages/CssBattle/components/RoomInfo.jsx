import ButtonStyled from '../../../components/Button';
import { Box, TextStyled } from '../styled';
import Colors from './Colors';
import CountdownTimer from './CountDown';
import InfoItem from './InfoItem';
import Scores from './Score';

import Stack from 'react-bootstrap/Stack';

const RoomInfo = () => {
    const LIST_INFO = [
        {
            title: 'Timers',
            body: <CountdownTimer targetDate={'2023-12-3'} />,
        },
        {
            title: 'Colors to use',
            body: <Colors />,
        },
        {
            title: 'Scores',
            body: <Scores />,
        },
    ];
    return (
        <>
            <Stack direction="horizontal" className="justify-content-between mb-3">
                <TextStyled>ROOM #001</TextStyled>
            </Stack>

            <Box>
                {LIST_INFO.map((item, id) => (
                    <InfoItem data={item} key={id} />
                ))}
                <ButtonStyled buttonType="borderNeon">Leaderboard</ButtonStyled>
            </Box>
        </>
    );
};

export default RoomInfo;
