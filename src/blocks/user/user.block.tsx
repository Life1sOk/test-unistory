import UserField from '../../components/user-field/user-field.component';
import Button from '../../components/button/button.component';

import { useAppSelector } from '../../app-redux/hooks';

import { UserStyle, ButtonWrapper } from './user.style';

const User = () => {
    const { email, username } = useAppSelector((state) => state.user.current);

    return (
        <UserStyle>
            <UserField label='NAME' text={username} />
            <UserField label='EMAIL' text={email} />
            <ButtonWrapper>
                <Button label='List me to the table' inactive />
            </ButtonWrapper>
        </UserStyle>
    )
};

export default User;