import * as React from 'react';
import { useState } from 'react';
import { ThemeType } from '../enums/ThemeType';
import { ThemeContext } from '../providers/themeProvider';
import useGetTheme from '../contexts/themeContext';

export default function Context() {
    const [theme, setTheme] = useState<ThemeType>(ThemeType.light);

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <MyComponent />
            </ThemeContext.Provider>
            <MyComponent />
        </>
    );
}

function MyComponent() {
    const theme = useGetTheme();

    return (
        <div>
            <p>Current: theme: {theme}</p>
        </div>
    );
}