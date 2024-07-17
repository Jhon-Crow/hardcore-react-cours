import React, { memo } from 'react';
import { Text, TextAlign } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <VStack justify="center" align="end">
            <img style={{ width: '100%' }} alt={block?.title} src={block?.src} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </VStack>
    );
});
