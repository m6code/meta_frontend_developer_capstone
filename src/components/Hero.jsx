import HeroDescription from "./HeroDesciption";
import HeroFigure from "./HeroFigure";

const Hero = (props) => {
    return (
        <section className="hero">
            <HeroDescription />
            <HeroFigure />
        </section>
    )
}

export default Hero;