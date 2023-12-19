import Logo from "./Logo.jsx";
import FooterNav from "./FooterNav.jsx";
import {contactLinks, navigationLinks, socialLinks} from "./LinksData.jsx";

export function Footer() {
    return (
        <footer className="footer">
            <Logo horientation="v" />
            <FooterNav linksData={navigationLinks.links} title={navigationLinks.title} />
            {/*<FooterNav linksData={contactLinks.links} title={contactLinks.title} />*/}
            <div className="vertical-nav" role="navigation">
                <h3 className="vertical-nav__title">Contact</h3>
                <ul className="vertical-nav__list">
                    <li className="vertical-nav__item">Address: No3 Amazon St. Saint Louis</li>
                    <li className="vertical-nav__item">Phone: 309404902909</li>
                    <li className="vertical-nav__item">Email: contact@littlelemon.com</li>
                </ul>
            </div>
            <FooterNav linksData={socialLinks.links} title={socialLinks.title} />
            {/*<div className="vertical-nav" role="navigation">*/}
            {/*    <h3 className="vertical-nav__title">Social Links</h3>*/}
            {/*    <ul className="vertical-nav__list">*/}
            {/*        <li className="vertical-nav__item"><a href="#">Facebook</a> </li>*/}
            {/*        <li className="vertical-nav__item"><a href="#">Instagram</a> </li>*/}
            {/*        <li className="vertical-nav__item"><a href="#">Tiktok</a> </li>*/}
            {/*        <li className="vertical-nav__item"><a href="#">X (formerly Twitter)</a> </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </footer>
    )
}