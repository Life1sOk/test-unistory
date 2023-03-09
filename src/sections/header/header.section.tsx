import { Outlet } from 'react-router-dom';

import { HeaderStyle } from './header.style';

import Logo from '../../components/logo/logo.component';
import Connect from '../../blocks/connect-wallet/connect.block';

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