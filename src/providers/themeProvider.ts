import { Context, createContext } from 'react';
import { ThemeType } from '../enums/ThemeType';

export const ThemeContext: Context<any> = createContext(ThemeType.system);