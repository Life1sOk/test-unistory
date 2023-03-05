import { Outlet } from 'react-router-dom';

import { HeaderStyle } from './header.style';

import Logo from '../../components/logo/logo.component';
import MetaConnect from '../../blocks/meta-connect/meta-connect.block';

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <Logo label='LOGO' />
                <MetaConnect />
            </HeaderStyle>
            <Outlet />
        </>
    )
};

export default Header;