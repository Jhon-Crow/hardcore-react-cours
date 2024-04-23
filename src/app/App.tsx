import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/index";
import {AboutPage} from "pages/AboutPage/index";
import {MainPage} from "pages/MainPage/index";
import {AppRouter} from "app/providers/router/index";
import {Navbar} from "widgets/Navbar";



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>

            <AppRouter/>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default App;