import './square.scss';

import * as React from 'react';

export default function Square({ value, onSquareClick }: any) {
    return (
        <button
            className='square'
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}