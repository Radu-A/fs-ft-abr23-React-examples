import React from 'react'
import "./DestinationItem.css";

//function DestinationItem(props) {
  function DestinationItem({name,price,url, deleteItem}) {
  return (
    // <article>Tu destino es:{props.name} y precio:{props.price}</article>
    <article>
      <h3>{name}</h3>
      <p> Precio:{price} </p>
      <img className="img-destination" src={url} alt={name}/> 
      <br />
      <button onClick={deleteItem}>Borrar</button>
    </article> 
      )
}

export default DestinationItem