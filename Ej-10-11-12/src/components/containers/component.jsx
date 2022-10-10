import React from 'react'
import Element from '../pure/element'

const Component = () => {

    const componentStyle = {
        width: '500px',
        height: '500px',
        backgroundColor: 'rgb(100,200,100)'
    }

  return (
    <div style={componentStyle}>
      <Element></Element>
    </div>
  )
}

export default Component
