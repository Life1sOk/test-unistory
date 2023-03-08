import { Outlet } from 'react-router-dom';

import { HeaderStyle } from './header.style';

import Logo from '../../shared/logo/logo.component';
// import MetaConnect from '../../blocks/meta-connect/meta-connect.block';
import Connect from '../../features/addWallet/connect.block';

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <Logo label='LOGO' />
                <Connect />
            </HeaderStyle>
            <Outlet />
        </>
    )
};

export default Header;