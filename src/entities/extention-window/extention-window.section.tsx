// Redux
import { useAppSelector, useAppDispatch } from '../../app-redux/hooks';
import { extentionChangeHandler } from '../../app-redux/slices/extention.slice';

import BlockTitle from '../../shared/block-title/block-title.component';
import Button from '../../shared/button/button.component';

import { ExtentinWindowStyle, ExtentionDescription, BlackBoxWrapper } from './extention-window.style';

const ExtentionWindow = () => {
    const dispatch = useAppDispatch();
    const open = useAppSelector((state) => state.extention.extentionReady);

    const skipHandler = () => dispatch(extentionChangeHandler(false));

    return (
        <BlackBoxWrapper open={open}>
            <ExtentinWindowStyle>
                <BlockTitle title='METAMASK EXTENTION' />
                <ExtentionDescription>
                    To work with our application, you have to install the
                    <a className='marked' href='https://metamask.io/'
                        target='_blank' rel="noopener noreferrer"
                    > Metamask browser extention
                    </a>
                </ExtentionDescription>
                <Button label='SKIP THIS STEP' onClickHandler={skipHandler} />
            </ExtentinWindowStyle>
        </BlackBoxWrapper>
    )
};

export default ExtentionWindow;