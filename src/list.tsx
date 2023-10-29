import * as React from 'react';

export default function List() {
    const products = [
        { id: 1, title: 'Cabbage' },
        { id: 2, title: 'Garlic' },
        { id: 3, title: 'Apple' },
    ];
    const list = products.map(p => {
        return <li key={p.id}>{p.title}</li>;
    });

    return (
        <>
            <ul>{list}</ul>
        </>
    );
}