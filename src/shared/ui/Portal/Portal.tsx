import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    parent?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        parent = document.body,
    } = props;
    return createPortal(children, parent);
};
