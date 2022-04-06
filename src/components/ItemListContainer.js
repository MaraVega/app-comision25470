import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
// import utiles from '../Utiles'
import { db } from '../Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([])
  const {categoria}=useParams();
  useEffect(() => {
    if(!categoria){
      const miCollection = collection(db, "utiles") 
      const lista = getDocs(miCollection)
      lista
        .then((respuesta) =>setProductos(respuesta.docs.map((doc) => doc.data())))
        .catch((error) => console.log("error"))
    }else{
      const miCollection = collection(db, "utiles") 
      const filtroPorCategoria = query(miCollection, where("categoria", "==", categoria))
      const lista = getDocs(filtroPorCategoria)
      lista
        .then((respuesta) =>setProductos(respuesta.docs.map((doc) => doc.data())))
        .catch((error) => console.log("error"))
    }
},[categoria]);
console.log(productos)
  return (
    <>
      <div className='saludo'>{props.greeting}</div>
      {/* <ItemCount initial={1} stock={5}/> */}
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer