import React, { useState } from 'react';

import { useCountdown } from '../../../hooks/useCountDown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
        </div>
    );
};

const ShowCounter = ({ minutes, seconds }) => {
    return (
        <div className="show-counter">
            <div className="countdown-link">
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={minutes <= 5} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </div>
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [expired, setExpired] = useState(false);

    const [minutes, seconds] = useCountdown(targetDate);

    if (minutes + seconds <= 0) {
        if (expired == false) {
            setExpired(true);
        }

        window.location = '/';
        return <ExpiredNotice />;
    } else {
        return <ShowCounter minutes={minutes} seconds={seconds} />;
    }
};

export default CountdownTimer;
