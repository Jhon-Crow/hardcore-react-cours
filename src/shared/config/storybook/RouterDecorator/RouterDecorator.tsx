import 'app/styles/index.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// export const RouterDecorator = (story: () => React.FC) => (
//     <BrowserRouter>
//         {story()}
//     </BrowserRouter>
// );

export const RouterDecorator = (Story: React.FC) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
