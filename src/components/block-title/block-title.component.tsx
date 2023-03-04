import React from 'react';

import { BlockTitleSlyle } from './block-title.style';

const BlockTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <BlockTitleSlyle>{title}</BlockTitleSlyle>
    )
};

export default BlockTitle;