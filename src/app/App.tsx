import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/index";
import {AppRouter} from "app/providers/router/index";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";



const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className={'content-page'}>
                <Sidebar/>
                <AppRouter/>
            </div>

        </div>
    );
};

export default App;