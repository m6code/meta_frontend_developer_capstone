const aboutData = {
    title: "Little Lemon",
    subtitle: "Chicago",
    description: `Little Lemmon is a renowned Mediterranean restaurant in Chicago, serving up 
                exquisite flavors inspired by the Mediterranean coast. With a rich 
                history dating back over two decades, we've delighted the palates of 
                countless patrons. Our commitment to excellence has earned us numerous 
                awards, making us a cherished culinary destination in the Windy City.`
}

const AboutContent = (props) => {
    return (
        <article className="about-content">
            <h2 className="section-title about-title">{aboutData.title}</h2>
            <h3 className="section-subtitle about-subtitle">{aboutData.subtitle}</h3>
            <p className="about-description">{aboutData.description}</p>
        </article>
    )
}

export default AboutContent;