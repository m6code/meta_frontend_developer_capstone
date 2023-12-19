import Logo from "./Logo.jsx";
import FooterNav from "./FooterNav.jsx";
import {contactLinks, navigationLinks, socialLinks} from "./LinksData.jsx";

export function Footer() {
    return (
        <footer className="footer">
            <Logo horientation="v" />
            <FooterNav linksData={navigationLinks.links} title={navigationLinks.title} />
            <FooterNav linksData={contactLinks.links} title={contactLinks.title} />
            <FooterNav linksData={socialLinks.links} title={socialLinks.title} />
        </footer>
    )
}