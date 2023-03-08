import { useAppSelector } from '../../app-redux/hooks';

import UserField from '../../components/user-field/user-field.component';

import { ProfileStyle, ProfileStyleTitle } from './profile.style';

const Profile = () => {
    const user = useAppSelector((state) => state.user.current);

    return (
        <ProfileStyle>
            <ProfileStyleTitle>PERSONAL DATA</ProfileStyleTitle>
            <UserField label='NAME' text={user.username} />
            <UserField label='EMAIL' text={user.email} />
            <UserField label='WALLET' text={user.address} />
        </ProfileStyle>
    )
};

export default Profile;