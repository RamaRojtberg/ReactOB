import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class';
import ComponentB from './componentB';

function ComponentA({ contact }) {
  return (
    <div>
      <h1>Name: { contact.name }</h1>
      <h1>Surname: { contact.surname }</h1>
      <h1>Email: { contact.email }</h1>
      <ComponentB estado={true}></ComponentB>
    </div>
  )
}

ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ComponentA;

