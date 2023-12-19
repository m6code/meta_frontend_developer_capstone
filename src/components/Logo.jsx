import logo_horizontal from '../assets/brand/logo_horizontal.svg';
import logo_vertical from '../assets/brand/logo_vertical.png';

const Logo = ({horientation}) => {
    return (
        (horientation) === 'h'
            ? <img src={logo_horizontal} className="logo-horizontal" alt="logo" />
            : <img src={logo_vertical} className="logo-vertical"  alt="logo" />
    )
}

export default Logo;