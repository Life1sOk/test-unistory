import Profile from '../../blocks/profile/profile.block';
import Planet from '../../blocks/planet/planet.block';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

import { useGetViewParticipantQuery } from '../../app-redux/api/participantsAPI';

import { ProfilePageStyle } from './profile.style';
import { SpinnerWrapper } from '../index.style';

const ProfilePage = () => {
    const { isLoading } = useGetViewParticipantQuery();

    return (
        <>
            {
                isLoading ?
                    <SpinnerWrapper>
                        <LoadingSpinner />
                    </SpinnerWrapper>
                    :
                    <ProfilePageStyle>
                        <Profile />
                        <Planet pointBox={false} top={46} left={1113} ellipse={false} />
                    </ProfilePageStyle>
            }
        </>
    )
};

export default ProfilePage;