import React from 'react';

const Info = ({ info, onSearch }) => {
    return (
        <div onClick={() => onSearch(info.body)} className="text-truncate info px-4 py-2">
            {info.body}
        </div>
    );
};

export default Info;
