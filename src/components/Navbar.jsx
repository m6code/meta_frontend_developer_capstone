import {Link } from 'react-router-dom';

const Navbar = (props) => {
    return  (
        <>
            <nav className="nav">
                <ul className='nav-list'>
                    <Link to='/' className='nav-item nav-link'>Home</Link>
                    <Link to='/' className='nav-item nav-link'>About</Link>
                    <Link to='/' className='nav-item nav-link'>Menu</Link>
                    <Link to='/reservations' className='nav-item nav-link'>Reservations</Link>
                    <Link to='/' className='nav-item nav-link'>Order Online</Link>
                    <Link to='/' className='nav-item nav-link'>Login</Link>
                </ul>
            </nav>
        </>
    );
    
}

export default Navbar;