import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
  const {carrito, borrarProducto, calcularTotaProductos, clear}=  useContext(contexto)
  const confirmar=()=>{
    clear()
  }

  return (
    <>
    {carrito&& carrito.length? <>
      {/* <div>Carrito</div> */}
      {
      carrito.map(articulo => (
          <div key={articulo.producto.id}>
            <p>{articulo.producto.nombre}</p>
            <p>{articulo.producto.precio} $</p>
            <p>Unidades seleccionadas: {articulo.producto.cantidad}</p>
            <button onClick={()=> borrarProducto(articulo.producto.id)}>Eliminar</button>
          </div>
      ))
      }
      <p>Total: {calcularTotaProductos()} $</p>
      <button onClick={confirmar}>Confirmar compra</button>
      </>: <Link id="link" to="/"> 
          <p>Carrito Vacio, Ir a Inicio</p>
        </Link>}
    </>
  )
}

export default Cart