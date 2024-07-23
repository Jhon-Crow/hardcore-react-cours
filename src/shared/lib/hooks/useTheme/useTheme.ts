import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '@/shared/const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.NORMAL;
                break;
            case Theme.NORMAL:
                newTheme = Theme.YALLOW;
                break;
            case Theme.YALLOW:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.NORMAL;
                break;
        }
        setTheme?.(newTheme);
        document.body.className = newTheme;
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

        saveAction?.(newTheme);
    };

    return {
        theme: theme || Theme.NORMAL,
        toggleTheme,
    };
}