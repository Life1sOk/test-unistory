import { UserFieldStyle, FieldLabel, FieldText } from './user-field.style';

interface IUserField {
    label: string,
    text?: string,
};

const UserField = ({ label, text }: IUserField) => {
    return (
        <UserFieldStyle>
            <FieldLabel>{label}</FieldLabel>
            <FieldText>{text}</FieldText>
        </UserFieldStyle>
    )
};

export default UserField;