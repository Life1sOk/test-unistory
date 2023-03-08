import React, { memo } from 'react';

import { BlockTitleSlyle } from './block-title.style';

const BlockTitle: React.FC<{ title: string }> = memo(({ title }) => {

    return (
        <BlockTitleSlyle>{title}</BlockTitleSlyle>
    )
});

export default BlockTitle;