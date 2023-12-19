import { navigationLinks, contactLinks, socialLinks } from './LinksData';
import Navigation  from './Navigation';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Logo from './Logo';
import FooterNav from './FooterNav.jsx';
import {Footer} from "./Footer.jsx";
import {Header} from "./Header.jsx";
import {Main} from "./Main.jsx";

const Homepage = () => {
    return (
        <>
          <Header />
          <Main />
          <Footer />
        </>
    )
}

export default Homepage;