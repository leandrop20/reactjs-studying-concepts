import * as React from 'react';

export default function SharingData({ count, onClick }: any) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}