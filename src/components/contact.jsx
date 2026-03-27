{/*Learning  event Handling- Event handling is how your app responds to user actions:clicking button, typing in input, submitting form*/}

import React from 'react';
import { useState } from 'react';

function Contact() {
    const[name, setName] = useState("");
    const[message, setMessage] = useState("");
  return (
    <div>
        <h2>Contact Form</h2>
        <form className='bg-amber-300 mb-7 p-10'>
            <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} className='bg-blue-400' />
            <textarea placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)} className='bg-blue-400'></textarea>
            <button>Submit</button>
        </form>
    </div>
  );
}

export default Contact
