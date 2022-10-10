import React, { useState } from 'react'

const Element = () => {

    const [color, setColor] = useState('rgb(100, 110, 200)');

    const [temp, setTemp] = useState(0);

    const getColor = () => Math.floor(Math.random() * 256);

    const generateColor = () => {
        const rgb = {
          r: getColor(),
          g: getColor(),
          b: getColor(),
        };
        setColor(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
      };

    function mouseOverEffect () {              
        setTemp(setInterval(generateColor, 500))
    }

    function stopEffect() {
        clearInterval(temp);
    }

    function doubleClickStop() {
        clearInterval(temp);
    }

  return (
    <div style={{ width: '255px', height: '255px', backgroundColor: color, margin: '0 auto' }} onMouseOver={mouseOverEffect} onMouseLeave={stopEffect} onDoubleClick={doubleClickStop}>
      
    </div>
  )
}

export default Element
