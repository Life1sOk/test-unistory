import { LogoStyle } from './logo.style';

const Logo: React.FC<{ label: string }> = ({ label }) => {
    return (
        <LogoStyle>{label}</LogoStyle>
    )
};

export default Logo;