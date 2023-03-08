import UserField from '../../shared/user-field/user-field.component';
import Button from '../../shared/button/button.component';

import { useAppSelector } from '../../app-redux/hooks';

import { UserStyle, ButtonWrapper } from './user.style';

const User = () => {
    const { email, username } = useAppSelector((state) => state.participant.current);

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