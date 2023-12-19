import Basket from '../assets/icons/basket.svg';

const MenuCard = ({image, dish, price ,description}) => {
    return (
        <article className="menu-card">
            <div className='card-image-container'>
                <img src={image} className='menu-card__img' alt="menu card" />
            </div>
            <section className="menu-card__caption">
                <div className="caption-header">
                    <h3 className="caption-title">{dish}</h3>
                    <p className="caption-price">{price}</p>
                </div>
                <div className="caption-body">
                    <p className="caption-description">
                        {description}
                    </p>
                </div>
                <div className="caption-footer">
                    <p className="caption-footer__text">
                        Order a delivery 
                    </p>
                    <img src={Basket} alt="delivery icon" className='delivery-icon' />
                </div>
            </section>
        </article>
    )
}

export default MenuCard;