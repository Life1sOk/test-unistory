import { useEthers } from '@usedapp/core';

import Button from '../../components/button/button.component';

import { MetaConnectStyle, AccountLine } from './connect.style';

const Connect = () => {
    // Meta Mask connection;
    const { account, activateBrowserWallet } = useEthers();

    return (
        <MetaConnectStyle>
            {
                account ?
                    <AccountLine>{account}</AccountLine>
                    :
                    <Button
                        label='CONNECT METAMASK'
                        onClickHandler={() => activateBrowserWallet()}
                    />
            }
        </MetaConnectStyle>
    )
};

export default Connect;