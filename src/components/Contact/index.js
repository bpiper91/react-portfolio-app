import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    // set form input states to empty strings and destructure object for clarity in form
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // set error message default state to empty string
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            // if the email input changed, validate the current email address
            const isValid = validateEmail(e.target.value);

            // set error message based on email validation
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            };
        } else {
            // if the name or message input changed, check length and set error message if 0
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            };
        };

        // if there's no error, update the form state
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        };
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        // add logic for taking messages
    }

    return (
        <section>
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label className='text-area-label' htmlFor="message">Message:</label>
                    <textarea name="message" rows="6" defaultValue={message} onBlur={handleChange} />
                </div>
                {/* may handle error message display a different way
                {errorMessage && (
                    <div>
                        <p className="error-message">{errorMessage}</p>
                    </div>
                )} */}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default Contact;