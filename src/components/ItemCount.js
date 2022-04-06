import React from 'react'
import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const restarClick = () =>{
        if(contador > 1){
            setContador(contador-1)
        }
    }
    const sumarClick = () => {
        if(contador < stock){
            setContador(contador+1)
        }
    }
    const resetear =() => {
        setContador(initial)
    }
    function miOnAdd() {
        onAdd(contador)
        console.log("funcion de item count")
    }
    return ( 
        <>
            <p>Mi contador: {contador}</p>
            <div className='buttonContainer'>
                <button onClick={restarClick} disabled={contador===1}>-</button>
                <button onClick={sumarClick} disabled={contador===stock}>+</button>
            </div>
            <div className='buttonContainer'>
                <button onClick={miOnAdd}>confirmar</button>
                <button onClick={resetear} disabled={contador===initial}>descartar</button>
            </div>
        </>
    )
}

export default ItemCount   