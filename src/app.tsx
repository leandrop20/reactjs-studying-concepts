import './app.scss';

import * as React from 'react';
import { useState } from 'react';
import List from './list';
import Button from './button';
import SharingData from './sharingData';
import Game from './components/game';
import Reducer from './components/reducer';
import Context from './components/context';

export function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    
    return (
        <>
            <List />
            <Button />
            <Button />
            <br />
            <SharingData count={count} onClick={handleClick} />
            <SharingData count={count} onClick={handleClick} />
            <Game />
            <br/>
            <Reducer />
            <Context />
        </>
    );
}