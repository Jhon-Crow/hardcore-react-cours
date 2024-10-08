import React from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

export type VStackProps = Omit<FlexProps, 'direction'>;
/**
 * @deprecated
 */
export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex {...props} direction="column" align={align} />;
};