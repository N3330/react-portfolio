import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { validateEmail } from '../utils/helpers';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  const [state, handleSubmit] = useForm("xknyyydk");

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;


  function refreshPage() {
    window.location.reload(false);
  }


  if (state.succeeded) {
    return (
      <div>
        <p>I'll get back to you asap!</p>
        <Button  variant="primary" onClick={refreshPage}>Submit New Form</Button>
      </div>
    );
}


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div>
      <p className="">Contact Me</p>
      <hr />
      <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId="exampleForm.ControlInput1" >
        
          <Form.Label>Name</Form.Label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        
        </Form.Group>.
        <div className="field">
          <label className="label" >Email Address</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label">Message</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="">{errorMessage}</p>
          </div>
        )}
        <Button variant="primary" data-testid='button' type ='submit'>Submit</Button>{' '}
      

      </Form>
    </div>
    
  );
}

export default Contact;