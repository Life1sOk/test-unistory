import UserField from '../../components/user-field/user-field.component';
import Planet from '../../blocks/planet/planet.block';

import { PersonalMainStyle, PersonalBlock, PersonalBlockTitle } from './personal-main.style';

const PersonalMain = () => {
    return (
        <PersonalMainStyle>
            <PersonalBlock>
                <PersonalBlockTitle>PERSONAL DATA</PersonalBlockTitle>
                <UserField label='NAME' text='Rojer waters' />
                <UserField label='EMAIL' text='Charadeyouare@gmail.com' />
                <UserField label='WALLET' text='0xe02354bdbb79b935407488c4276ff7898802e574' />
            </PersonalBlock>
            <Planet pointBox={false} top={-107} left={1113} ellipse={false} />
        </PersonalMainStyle>
    )
};

export default PersonalMain;