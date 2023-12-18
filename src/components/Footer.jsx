export function Footer() {
    return (
        <footer className="footer">
            <img src="src/assets/logo_vertical.png" alt="Little Lemon Logo" height="126" width="96"/>
            <div className="footer-navigation">
                Navigation
                <ul className="li"><a href="#">Home</a></ul>
                <ul className="li"><a href="#">About</a></ul>
                <ul className="li"><a href="#">Menu</a></ul>
                <ul className="li"><a href="#">Reservations</a></ul>
                <ul className="li"><a href="#">Order Online</a></ul>
                <ul className="li"><a href="#">Login</a></ul>
            </div>
            <div className="footer-contact">
                Contact
                <ul>
                    <li>Address: No3 Amazon St. Saint Louis</li>
                    <li>Phone: 309404902909</li>
                    <li>Email: contact@littlelemon.com</li>
                </ul>
            </div>
            <div className="footer-social-links">
                Social Links
                <ul>
                    <li><a href="#">Facebook</a> </li>
                    <li><a href="#">Instagram</a> </li>
                    <li><a href="#">Tiktok</a> </li>
                    <li><a href="#">X (formerly Twitter)</a> </li>
                </ul>
            </div>
        </footer>
    )
}