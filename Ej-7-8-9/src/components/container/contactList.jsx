import React, { useState } from 'react'
import { Contact } from '../../models/contactClass'
import ContactComponent from '../pure/contact';
import AddContact from '../pure/forms/addContact';


const ContactList = () => {

    // CREAR CONTACTOS CON LA CLASE
    const Ramiro = new Contact('Ramiro', 'Rojtberg', 'ramirorojtberg@gmail.com', true);
    const Juan = new Contact('Juan', 'Gomez', 'juangomez@gmail.com', false);

    const[contacts, setContact] = useState([Ramiro, Juan]);

    function addContact(newContact){
        const tempContact = [...contacts];
        tempContact.push(newContact);
        setContact(tempContact);
        console.log(contacts)
    }

    function removeContact(removedContact) {
        const tempContact = [...contacts];
        const index = contacts.indexOf(removedContact);
        tempContact.splice(index, 1);
        setContact(tempContact);
    }

  return (
    <div className='container p-3'>
      <h1>Contact List</h1>

      <table className='table table-striped'>

        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope='col'>Contected</th>
                <th>Delete</th>
            </tr>
        </thead>

        <tbody>

            {/* ITERAR */}

            {contacts.map( (contact, index) => (
                <ContactComponent key={index} contacts={contact} remove={removeContact}></ContactComponent>
            ) )}

            

        </tbody>

      </table>

        {/* FORMULARIO CREAR CONTACTO */}

        <AddContact add={addContact}></AddContact>

    </div>
  )

}

export default ContactList
