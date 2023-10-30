import { useContext } from 'react';
import { ThemeType } from '../enums/ThemeType';
import { ThemeContext } from '../providers/themeProvider';

export default function useGetTheme() {
    return useContext<ThemeType>(ThemeContext);
}