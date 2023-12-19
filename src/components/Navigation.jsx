import Logo from './Logo';
import Navbar from './Navbar';


const Navigation = (props) => {
    return (
        <div className="navigation">
            <Logo horientation="h" />
            <Navbar />
        </div>
    )
}

export default Navigation;