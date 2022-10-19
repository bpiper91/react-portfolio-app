import React, {useState} from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

function Contact() {
    // set form input states to empty strings and destructure object for clarity in form
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // set error message default state to empty string
    const [errorMessage, setErrorMessage] = useState('');
    
    // set success message default state to empty string
    const [successMessage, setSuccessMessage] = useState('');

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
                setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
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

        // // clear form after submission
        // setFormState({ ...formState, name: '', email: '', message: '' });
        // add feedback message
        setSuccessMessage('Form submitted. Thanks for your message!');
        // remove feedback message after 10 seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 10000)

    }

    return (
        <section>
            <h2>Contact Me</h2>
            <p>Note: Form is not yet fully functional</p>
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
                <button type="submit">Submit</button>
                {errorMessage && (
                    <div className='no-b'>
                        <span className="error-message">{errorMessage}</span>
                    </div>
                )}
                {successMessage && (
                    <div>
                        <span className="success-message">{successMessage}</span>
                    </div>
                )}
            </form>
        </section>
    )
};

export default Contact;