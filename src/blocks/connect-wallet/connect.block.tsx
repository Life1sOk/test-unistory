import { useEffect } from 'react';

import { useEthers } from '@usedapp/core';

import { useAppDispatch } from '../../app-redux/hooks';
import { addCurrentAddress } from '../../app-redux/slices/participant.slice';

import Button from '../../components/button/button.component';

import { MetaConnectStyle, AccountLine } from './connect.style';

const Connect = () => {
    const dispatch = useAppDispatch();

    // Meta Mask connection;
    const { account, activateBrowserWallet } = useEthers();

    useEffect(() => {
        // Send 'address' account to the redux store;
        if (account) dispatch(addCurrentAddress(account));
    }, [account, dispatch]);

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