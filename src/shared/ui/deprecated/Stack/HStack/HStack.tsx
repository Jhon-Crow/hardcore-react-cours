import React from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

export type HStackProps = Omit<FlexProps, 'direction'>;
/**
 * @deprecated
 */
export const HStack = (props: HStackProps) => (
    <Flex direction="row" {...props} />
);