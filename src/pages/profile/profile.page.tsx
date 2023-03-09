import Profile from '../../blocks/profile/profile.block';
import Planet from '../../blocks/planet/planet.block';

import { ProfilePageStyle } from './profile.style';

const ProfilePage = () => {
    return (
        <ProfilePageStyle>
            <Profile />
            <Planet pointBox={false} top={-107} left={1113} ellipse={false} />
        </ProfilePageStyle>
    )
};

export default ProfilePage;