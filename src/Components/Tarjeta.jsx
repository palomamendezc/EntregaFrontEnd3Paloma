import React from 'react'

const Tarjeta = ({cumple}) => {
    const estilos = {backgroundColor: styles.background, color: styles.color}
  return (
    <div className='tarjeta' style={estilos}>
        <h3>Estas invitado a mi cumple de {cumple.name}</h3>
        <h4>Te espero el dia {cumple.date} a las 18hs</h4>
        <h2>No faltes!</h2>
        <h4>Para: {cumple.guest}</h4>
    </div>
  )
}

export default Tarjeta