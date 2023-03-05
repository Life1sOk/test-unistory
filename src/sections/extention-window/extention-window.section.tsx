import { useEffect, useState } from 'react';

import { ExtentinWindowStyle, ExtentionDescription, BlackBoxWrapper } from './extention-window.style';

import BlockTitle from '../../components/block-title/block-title.component';
import Button from '../../components/button/button.component';

const ExtentionWindow = () => {
    const [open, setOpen] = useState(true);

    const skipHandler = () => setOpen(false);

    return (
        <BlackBoxWrapper open={open}>
            <ExtentinWindowStyle>
                <BlockTitle title='METAMASK EXTENTION' />
                <ExtentionDescription>
                    To work with our application, you have to install the
                    <span className='marked'> Metamask browser extention</span>
                </ExtentionDescription>
                <Button label='SKIP THIS STEP' onClickHandler={skipHandler} />
            </ExtentinWindowStyle>
        </BlackBoxWrapper>
    )
};

export default ExtentionWindow;