import {useEffect} from "react";

const BookForm = () => {
    return (
        <form className="book-form">
            <label htmlFor="name" aria-required>Full Name <span className="must">*</span></label>
            <input id="name" name="name" type="text" placeholder="Full Name"/>

            <label htmlFor="date" aria-required>Date <span className="must">*</span></label>
            <input id="date" name="date" type="date"/>

            <label htmlFor="time" aria-required>Time <span className="must">*</span></label>
            <input id="time" name="time" type="time"/>

            <label htmlFor="guests" aria-required>Number of guests <span className="must">*</span></label>
            <input id="guests" name="guests" type="number" min="1" max="10"/>

            <label htmlFor="special-requirements">Special requirements</label>
            <textarea id="special-requirements" name="special-requirements"/>

            <button type="submit" className="cto-button book-form__button">Checkout</button>

        </form>
    )
}

export default BookForm;