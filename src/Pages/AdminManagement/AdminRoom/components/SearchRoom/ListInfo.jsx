import React from 'react';

import Info from './Info';

const ListInfo = ({ searchResults, value, onSearch }) => {
    const results = searchResults
        .filter((info) => {
            const searchTerm = value.toLowerCase();
            return searchTerm && info.body.startsWith(searchTerm) && info.body !== searchTerm;
        })
        .slice(0, 5)
        .map((info) => <Info key={info.id} info={info} onSearch={onSearch}></Info>);
    const content = results?.length ? results : null;
    return content ? (
        <div className="rounded box-style mt-2 position-absolute max-width py-2">{content}</div>
    ) : null;
};

export default ListInfo;
