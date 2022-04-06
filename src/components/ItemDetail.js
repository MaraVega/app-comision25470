import React from "react";
import ItemCount from "./ItemCount";
import { contexto } from "./CartContext";
import { useContext, useState } from "react";
import { Link} from 'react-router-dom'

function ItemDetail({ producto }) {
  const carritoContext = useContext(contexto);
  // console.log(carritoContext);
  

  function onAdd(cantidadElegida) {
    carritoContext.agregarProducto(producto, cantidadElegida)
    setConfCompra(false)

  }
  const [confCompra, setConfCompra] = useState(true)

  return (
    <div className="itemDetail">
      <h3>{producto.nombre}</h3>
      <p>{producto.precio}</p>
      <p>{producto.descripcion}</p>
      {/* <img src={producto.img} /> */}
      <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
      {confCompra ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} /> : <Link to='/carrito'><p>Ir al carrito</p></Link>}
      <p></p>
    </div>
  );
}

export default ItemDetail;
