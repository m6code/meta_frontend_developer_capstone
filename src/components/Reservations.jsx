import {navigationLinks, contactLinks, socialLinks} from './LinksData';
import Navigation from './Navigation';
import Hero from './Hero';
import Logo from './Logo';
import FooterNav from './FooterNav.jsx';
import MiddleSection from './MiddleSection.jsx';

import BookForm from './BookFrom';


const Reservations = () => {
    return (
        <>
            <header className="header">
                <Navigation/>
                <Hero/>
            </header>
            <main className="main">
                <MiddleSection
                    sectionTitle={"Reservations"}
                    classHeader="midle-header__reservations"
                    classBody="midle-section__reservations"
                    ctoObjecto={null}
                >
                    <BookForm/>
                </MiddleSection>
            </main>
            <footer className="footer">
                <Logo horientation="v"/>
                <FooterNav linksData={navigationLinks.links} title={navigationLinks.title}/>
                <FooterNav linksData={contactLinks.links} title={contactLinks.title}/>
                <FooterNav linksData={socialLinks.links} title={socialLinks.title}/>
            </footer>
        </>
    )
}

export default Reservations;