import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'
import Cart from './Cart'

const Main = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Libreria Eden"/>}></Route>
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/carrito' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default Main