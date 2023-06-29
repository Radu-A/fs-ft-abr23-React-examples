import React from 'react'
import DestinationItem from '../DestinationList/DestinationItem/DestinationItem';
import data from './data';
import { useState } from 'react';

function DestinationList() {
  // Carga los datos de fichero
  const [destinations, setDestinations] = useState(data); 
  useState

  const paint = () => destinations.map((item,i) => <DestinationItem name={item.name} price={item.price} url={item.url} key={i} deleteItem={()=>deleteItem(i)}/>);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const url = e.target.url.value;

    const new_dest = {name, price, url};

    
    const confirmated = confirm(`Deseas crear nuevo destiono? ${name}, ${price}, ${url}`);

    confirmated ? setDestinations([...destinations, new_dest]) : alert('Operación anulada por user');
  }
  const deleteDestinations = ()=> {setDestinations([])}
  const reloadDestinations = ()=> {setDestinations(data)}
  const deleteItem = (i)=> {
    setDestinations(destinations.filter((item, j)=> i !== j))
  }
  
  return (
    <section>
        <h2>Mi lista de destinos</h2>
        <h3>Crear destino</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label><br />
            <input type="text" name="name" /><br />
            
            <label htmlFor="price">Precio</label><br />
            <input type="number" name="price" /><br />
            
            <label htmlFor="url">URL imagen</label><br />
            <input type="url" name="url"/><br />
        
            <button type="submit">Send</button>
        </form>

        <button onClick={deleteDestinations}>Borrar todo</button>
        <button onClick={reloadDestinations}>Recargar destinos</button>

        {paint()}
    </section>
  )
}

export default DestinationList