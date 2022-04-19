import React, { useState, createContext, useEffect} from "react";

export const contexto = createContext()
const { Provider } = contexto
        
const CartContext=({ children })=>{
        
    const [carrito, setCarrito] = useState([]);
    const [totalProductos, setTotalProductos] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0);


    // const calcularPrecioTotal = ()=>{
    //     let total = 0
    //     carrito.forEach(elemento => {
    //         total += elemento.producto.precio *elemento.cantidad
    //     });
    //     return total
    // }
            
    // const calcularTotalProductos = ()=>{
    //     let total = 0
    //     carrito.forEach(elemento => {
    //         total += elemento.cantidad
    //     });
    //     return total
    // }

    const isInCart = (producto)=>{
        return carrito && carrito.some((elemento)=>elemento.producto.id === producto.id)
    }
    const agregarProducto=(producto, cantidad)=> {
        let auxCart = []
        // const productoCarrito= carrito.some((elemento)=>elemento.producto.id === producto.id)
        let productoEnCarrito = { producto, cantidad }

        
        if(isInCart(producto)){
            productoEnCarrito = carrito.find((item)=>{
                return item.producto.id === producto.id
            })

            productoEnCarrito.cantidad = productoEnCarrito.cantidad + cantidad 
            auxCart=[...carrito]
        }else{
            auxCart = [productoEnCarrito, ...carrito]
        }
       
        return setCarrito(auxCart)
    }

    useEffect(()=>{
        let total = 0
        carrito.map(elemento => {
            total+=elemento.cantidad
            return setTotalProductos(total)
        })
    },[carrito])
    useEffect(()=>{
        let total = 0
        carrito.map(elemento => {
            total+=elemento.producto.precio *elemento.cantidad
            return setTotalPrecio(total)
        })
    },[carrito])

    const borrarProducto = (id) => {
        const auxCart = carrito.filter(elemento =>elemento.producto.id !==id);
        setCarrito(auxCart);    
    };

    function clear() {
        setCarrito([]);
    }



    const valorDelProvider = {
        carrito,
        setCarrito,
        borrarProducto,
        agregarProducto,
        clear,
        // calcularTotalProductos,
        // calcularPrecioTotal,
        totalProductos,
        totalPrecio,
        cantidad,
        isInCart,
    };

    return (
        <Provider value={valorDelProvider}>
            {children}
        </Provider>
    );
}

export default CartContext;
