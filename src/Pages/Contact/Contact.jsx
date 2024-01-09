import Location from './Location';
import Address from './Address';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className='mt-24'>
            <ContactForm />
            <Location />
            <Address />
        </div>
    );
};

export default Contact;