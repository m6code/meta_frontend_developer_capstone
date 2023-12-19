import star from '../assets/icons/star-icon.svg';

const RatingCard = ({rating, image, customerName, customerReview}) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img src={star} alt="Star icon" className="card-rating__star" />);
    }

    return (
        <article className="testimonials-card">
            <div className="card-rating">
                { stars.map((star, index) => star) }
            </div>
            <img src={image} className="testimonials-card-img" alt="Customer" />
            <div className="card-body">
                <p className='card-curstomer-name'>{customerName}</p>
                <p className='card-curstomer-review'>
                    {customerReview}
                </p>
            </div>
        </article>
    )
}

export default RatingCard;