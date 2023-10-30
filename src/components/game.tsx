import './game.scss';

import * as React from 'react';
import { useState } from 'react';
import Board from './board';

export default function Game() {
    const [history, setHistory] = useState<any[]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext: boolean = currentMove % 2 === 0;
    const currentSquares: any = history[currentMove];

    function handlePlay(nextSquares: any) {
        const nextHistory: any[] = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description: string;

        if (move  > 0) {
            description = `Go to move #${move}`;
        } else {
            description = `Go to game start`;
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}