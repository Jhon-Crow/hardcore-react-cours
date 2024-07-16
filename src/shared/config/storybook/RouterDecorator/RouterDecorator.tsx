// eslint-disable-next-line jhon-crow-plugin/layer-imports
import '@/app/styles/index.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: React.FC) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
