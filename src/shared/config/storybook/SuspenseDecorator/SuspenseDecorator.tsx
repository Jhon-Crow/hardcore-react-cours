import React, { Suspense } from 'react';

export const SuspenseDecorator = (Story: React.FC) => (
    <Suspense>
        <Story />
    </Suspense>
);
