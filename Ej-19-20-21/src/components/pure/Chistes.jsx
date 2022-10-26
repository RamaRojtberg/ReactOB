import React, { useState } from 'react'
import { getJoke } from '../../utils/config/axiosConfig'
import Button from '@mui/material/Button';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Chistes = () => {

    const [joke, setJoke] = useState('Initial joke')
    const [likes, setLikes] = useState(0)
    const [unlikes, setUnlikes] = useState(0)

    const generateJoke = async() => {
        await getJoke()
            .then((response) => {
                console.log(response.data.value);
                setJoke(response.data.value);
            })
    }

    const like = () => {
      setLikes(likes+1)
      generateJoke()
    }

    const unlike = () => {
      setUnlikes(unlikes+1)
      generateJoke()
    }

  return (
    <div>
      <h1>Elige un chiste de Chuck Norris</h1>
      <h2>{joke}</h2>
      <Button onClick={generateJoke} variant="contained" color="primary">
        Get a joke
      </Button>
      
      {
        joke !== 'Initial joke' ?
        (
          <div style={ {marginTop:"15px"} }>
            <Button variant="contained" color="success" style={ {marginRight: "15px"} } onClick={like}>
              <ThumbUpAltIcon fontSize="large"></ThumbUpAltIcon><p> Jokes liked: {likes}</p>
            </Button>
            <Button variant="contained" color="error" onClick={unlike}>
              <ThumbDownIcon fontSize="large"></ThumbDownIcon><p> Jokes unliked: {unlikes}</p>
            </Button>
          </div>
        )
        :
        null
      }
      

    </div>
  )
}

export default Chistes
