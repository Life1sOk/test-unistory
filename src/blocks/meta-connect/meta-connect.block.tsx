import { useEffect } from 'react';
// API usedAPP
import { useEthers } from '@usedapp/core';
// Redux toolkit
import { useAppDispatch } from '../../app-redux/hooks';
import { addCurrentAddress } from '../../app-redux/slices/participant.slice';
// Components
import Button from '../../components/button/button.component';
// Style
import { MetaConnectStyle, AccountLine } from './meta-connect.style';

const MetaConnect = () => {
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

export default MetaConnect;