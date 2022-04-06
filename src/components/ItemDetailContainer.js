import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
// import utiles from '../Utiles';
import{db} from '../Firebase'
import {useParams} from 'react-router-dom'
import { collection, where, query, getDocs } from 'firebase/firestore';

const ItemDetailContainer = (props) => {

    const [producto, setProducto] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const miCollection = collection(db, "utiles") 
        const filtroPorId = query(miCollection, where("id", "==", Number (id)))
            const lista = getDocs(filtroPorId)
            lista
            .then(respuesta => setProducto(respuesta.docs.map(doc=>doc.data())[0]))
            .catch((error) => {
                console.log("error");

            })

    });
    return (
        <div className='itemDetailContainer'>
        <ItemDetail producto={producto}/>
    </div>
    )
}

export default ItemDetailContainer