import * as React from 'react';
import './square.scss';

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