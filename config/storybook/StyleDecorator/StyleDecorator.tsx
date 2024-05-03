import 'app/styles/index.scss';
import React from 'react';

export const StyleDecorator = (Story: React.FC) => (
    <div className="app dark">
        <Story />
    </div>
);
