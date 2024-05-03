import React from 'react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: React.FC) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
