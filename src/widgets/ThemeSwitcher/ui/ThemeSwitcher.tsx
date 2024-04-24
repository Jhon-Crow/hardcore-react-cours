import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from'shared/assets/icons/theme-light.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div>
            {theme === Theme.DARK
                ?
                <DarkIcon/>
            :
                <LightIcon/>
            }

            <Button
                theme={ThemeButton.PRIMARY}
                className={classNames(cls.Button, {}, [className])}
                onClick={toggleTheme}>
                Toggle
            </Button>

       {/*<button className={classNames(cls.ThemeSwitcher, {}, [className])}*/}
       {/*        onClick={toggleTheme}*/}
       {/*>*/}

       {/*    Toggle*/}
       {/*</button>*/}
        </div>
    );
};