import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import { useContext } from "react";
import {contexto} from "./CartContext" 

const CartWidget = () => {
  const{calcularTotaProductos}=useContext(contexto);

  return (
    <>
    {calcularTotaProductos()>0 ?<div className='cartWidget'>
      <Link to="/carrito">
        <FontAwesomeIcon icon={faShoppingCart}/>
      </Link>
      <p>{calcularTotaProductos()}</p>
    </div>:null}
    </>
        
  )
}

export default CartWidget