import { useParams } from 'react-router-dom';

import { useGetViewParticipantQuery } from '../../app-redux/api/participantsAPI';

import UserField from '../../components/user-field/user-field.component';

import { ProfileStyle, ProfileStyleTitle } from './profile.style';

const Profile = () => {
    let { id } = useParams();

    const { data } = useGetViewParticipantQuery(Number(id), { skip: id == null });

    return (
        <ProfileStyle>
            <ProfileStyleTitle>PERSONAL DATA</ProfileStyleTitle>
            <UserField label='NAME' text={data?.username} />
            <UserField label='EMAIL' text={data?.email} />
            <UserField label='WALLET' text={data?.address} />
        </ProfileStyle>
    )
};

export default Profile;