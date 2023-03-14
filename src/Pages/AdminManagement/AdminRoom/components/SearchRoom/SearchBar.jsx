import { useState, useEffect } from 'react';

import { Button, Form, InputGroup } from 'react-bootstrap';

import ListInfo from './ListInfo';
import { getInfos } from './axios';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => e.preventDefault();

    const [infos, setInfos] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        getInfos()
            .then((json) => {
                setInfos(json);
                return json;
            })
            .then((json) => {
                setSearchResults(json);
            });
    }, []);
    const handleChange = (e) => {
        setValue(e.target.value);
        if (!e.target.value) return setSearchResults(infos);
        const resultsArray = infos.filter((info) => info.body.includes(e.target.value));
        setSearchResults(resultsArray);
    };
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        console.log(searchTerm);
    };
    return (
        <div>
            <InputGroup className="border rounded-pill" onSubmit={handleSubmit}>
                <Button
                    className="rounded-pill dishover"
                    variant="none"
                    type="submit"
                    onClick={() => onSearch(value)}
                >
                    <i className="bi bi-search"></i>
                </Button>
                <input
                    className="border-0 rounded-pill dishover form-control rfs"
                    placeholder="Search room..."
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </InputGroup>
            <ListInfo searchResults={searchResults} value={value} onSearch={onSearch} />
        </div>
    );
};

export default SearchBar;
