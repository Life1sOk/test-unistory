import { HeaderStyle } from './header.style';

import Logo from '../../components/logo/logo.component';
import Button from '../../components/button/button.component';

const Header = () => {
    return (
        <HeaderStyle>
            <Logo label='LOGO' />
            <Button label='CONNECT METAMASK' onClickHandler={(e) => console.log('connect metamask')} />
        </HeaderStyle>
    )
};

export default Header;