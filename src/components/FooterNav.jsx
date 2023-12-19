const FooterNav = ({linksData, title}) => {
    return (
        <div className="vertical-nav" role="navigation">
            <h3 className="vertical-nav__title">{title}</h3>
            <ul className="vertical-nav__list">
                {
                    linksData.map(({link, text, eLink}) => (
                        <li 
                            key={text} 
                            className="vertical-nav__item"
                        >
                            <a href={link} className="vertical-nav__link" target={eLink? "_blank" : "_self"}>
                                {text}
                            </a>
                        </li>    
                    ))
                }
            </ul>
        </div>
    )
}

export default FooterNav;