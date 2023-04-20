import React, {useState} from 'react';
import vector from '../assets/ContactVector.svg';
import '../styles/ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Contact us</h1>
          <span className="close"></span>
          <img src={vector} alt="Book Viewing Vector" />
        </div>
        <div className='address'>
            <p>Feel  free to contact us if you have any questions.<br/> Looking forward to hear from you. </p>

        </div>
        <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input placeholder='Enter your name' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input placeholder='Enter your email address' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="phone">Phone Number</label>
          <input placeholder='Enter your phone number' type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="occupation">Are you a...</label>
          <select id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Young Professional">Young Professional</option>
            <option value="Recent Graduate">Recent Graduate</option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea placeholder='Enter your message' id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
