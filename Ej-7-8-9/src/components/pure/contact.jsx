import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contactClass'

const ContactComponent = ({contacts, remove}) => {

  return (
    <tr>
        <td>{contacts.name}</td>
        <td>{contacts.surname}</td>
        <td>{contacts.email}</td>
        <td>{contacts.conected ? (<i class="bi bi-person-check-fill"></i>) : (<i class="bi bi-person-x-fill"></i>)}</td>
        <td><button onClick={() => remove(contacts)} className='btn btn-danger' style={{fontSize: '10px'}}><i class="bi bi-x"></i></button></td>
    </tr>
  )

}

ContactComponent.propTypes = {
    contacts: PropTypes.instanceOf(Contact).isRequired
}

export default ContactComponent
