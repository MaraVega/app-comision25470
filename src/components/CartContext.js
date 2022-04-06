import React, { useState, createContext} from "react";

export const contexto = createContext()
const { Provider } = contexto
        
const CartContext=({ children })=>{
        const [carrito, setCarrito] = useState([]);
        const calcularPrecioTotal = ()=>{
            let total = 0
            carrito.forEach(elemento => {
                total += elemento.producto.precio *elemento.cantidad
            });
            return total
        }
            
        const calcularTotaProductos = ()=>{
            let total = 0
            carrito.forEach(elemento => {
                total += elemento.cantidad
            });
            return total
        }

    const agregarProducto=(producto, cantidad)=> {
        const auxCart = [...carrito]
        const productoCarrito= carrito.some((elemento)=>{  
            return elemento.producto.id === producto.id
        })
        if(productoCarrito){
            const productoBuscado = auxCart.find((item)=>{
                return item.producto.id === producto.id
            })
            productoBuscado.cantidad += cantidad 
        }else{
            auxCart.push({ producto, cantidad });
        }
       
        setCarrito(auxCart)
    }
    const borrarProducto = (id) => {
        const auxCart = carrito.filter(elemento=>elemento.producto.id !==id);
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
        calcularTotaProductos,
        calcularPrecioTotal
    };
    return (
        <Provider value={ valorDelProvider }>
            {children}
        </Provider>
    );
}

export default CartContext;
