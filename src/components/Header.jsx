import {Nav} from "./Nav.jsx";

export function Header() {
    return (
        <header className="header-container">
            <img src="src/assets/Logo.svg" alt="Little Lemon Logo"/>
            <Nav/>
        </header>
    )
}