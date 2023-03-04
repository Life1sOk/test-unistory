import { ExtentinWindowStyle, ExtentionDescription, BlackBoxWrapper } from './extention-window.style';

import BlockTitle from '../../components/block-title/block-title.component';
import Button from '../../components/button/button.component';


const ExtentionWindow = () => {
    return (
        <BlackBoxWrapper>
            <ExtentinWindowStyle>
                <BlockTitle title='METAMASK EXTENTION' />
                <ExtentionDescription>
                    To work with our application, you have to install the
                    <span className='marked'> Metamask browser extention</span>
                </ExtentionDescription>
                <Button label='SKIP THIS STEP' onClickHandler={(e) => console.log('checl')} />
            </ExtentinWindowStyle>
        </BlackBoxWrapper>
    )
};

export default ExtentionWindow;