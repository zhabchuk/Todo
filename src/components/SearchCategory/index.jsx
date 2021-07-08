import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input } from '../Input';
import './style.scss'

export default function SearchCategory() {
    const [value, setValue] = useState('');
    const history = useHistory();
    const url = new URL(window.location.href);

    const handlerSetUrlValue = (e) => {
        const setUrlValue = url.searchParams.set('search' ,`${e.target.value}`);
        history.replace(url.search.replace(setUrlValue));
        setValue(e.target.value);
    };

    return <Input placeholder='Search category' value={value} onChange={handlerSetUrlValue} className='search__input'/>
};