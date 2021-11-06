import React from 'react'
import { GunDTO } from '../../dataTransferObject/DTOs'
import { useHistory } from 'react-router-dom';

type Props = {
  arma: GunDTO
}

function DisplayGun(props: Props) {
  const {arma} = props

  const history = useHistory()
  
  return (
    <div className="container">
      <h1> Ak-47 | The Emperess </h1>
      <div>
        
      </div>
      <img src={arma.gunImage} alt="Imagem da arma" />
    </div>
  )
}

export default DisplayGun
