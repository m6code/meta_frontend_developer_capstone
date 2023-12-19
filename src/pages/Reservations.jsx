import {navigationLinks, contactLinks, socialLinks} from '../components/LinksData.jsx';
import Navigation from '../components/Navigation.jsx';
import Hero from '../components/Hero.jsx';
import Logo from '../components/Logo.jsx';
import FooterNav from '../components/FooterNav.jsx';
import MiddleSection from '../components/MiddleSection.jsx';

import BookForm from '../components/BookFrom.jsx';
import {Footer} from "../components/Footer.jsx";
import {Header} from "../components/Header.jsx";
import {useEffect} from "react";


const Reservations = () => {

    useEffect(() => {
        document.title = "Reserve a Table | Little Lemon"
    }, []);

    return (
        <>
            <Header/>
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
            <Footer />
        </>
    )
}

export default Reservations;