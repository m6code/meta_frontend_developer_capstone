const MiddleSection = ({ sectionTitle, cto, children, classBody, classHeader }) => {
    return (
        <section className="midle-section__container">
            <header className={`midle-section__header ${classHeader}`}>
                <h2 className="midle-section__title ">{ sectionTitle }</h2>
                { cto }
            </header>
            <section className={ classBody }>
                { children }
            </section>
        </section>
    ) 
}

export default MiddleSection;