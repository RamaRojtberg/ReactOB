import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contactClass';

const AddContact = ({add}) => {

    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact (
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);

        nameRef.current.value = '';
        surnameRef.current.value = '';
        emailRef.current.value = '';
    }


  return (
    <form className='form-control row p-4' onSubmit={addContact}>
            <input ref={nameRef} type='text' className='mb-2' placeholder='Name'/>
            <input ref={surnameRef} type='text' className='mb-2' placeholder='Surname'/>
            <input ref={emailRef} type='text' className='mb-2' placeholder='Email'/>
            <button type='submit' className='btn btn-success' style={{fontSize: '10px'}}>Add contact</button>
    </form>
  )
}

AddContact.propTypes = {
    add: PropTypes.func.isRequired
}

export default AddContact
