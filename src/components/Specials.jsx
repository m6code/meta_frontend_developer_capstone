import GreekSalad from '../assets/images/greek_salad.jpg';
import Bruchetta from '../assets/images/bruchetta.jpg';
import Dessert from '../assets/images/lemon_dessert.jpg';

import MenuCard from './MenuCard';
import CtoButton from './CtoButton';
import MiddleSection from './MiddleSection.jsx';

const Specials = (props) => {
    return (
        <MiddleSection
            sectionTitle={"This weeks specials"} 
            classHeader="midle-header__specials"
            classBody="midle-section__specials " 
            cto={<CtoButton value={"Online Menu"}/>}
        >
            <MenuCard 
                image={GreekSalad}
                dish="Greek Salad"
                price="$12.95"
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            />

            <MenuCard
                image={Bruchetta}
                dish="Bruchetta"
                price="$5.99"
                description="Our Bruschetta is made from grilled bread that has been smeared with garlic anditate with salt and olive oil."
                />
                
            <MenuCard
                image={Dessert}
                dish="Lemon Dessert"
                price="$5.00"
                description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            />
        </MiddleSection>
    ) 
}


export default Specials;