import React from "react";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../Firebase";

const Cart = () => {
  const { carrito, borrarProducto, totalProductos, totalPrecio } = useContext(contexto);

  const confirmar = () => {
    // clear()
    const orden = {
      buyer: {
        nombre: "Mara Vega",
        email: "maravega@gmail.com",
        telefono: "1123456789",
      },
      item: carrito,
      total: totalProductos,
      date: serverTimestamp(),
    };
    const ordenesCollection = collection(db, "ordenes");
    const pedido = addDoc(ordenesCollection, orden);

    pedido.then((res) => {
      console.log(res.id);
    });

    console.log(orden);
  };

  return (
    <>
      {carrito.length === 0 ? (
        <div>
          <div>Carrito</div>
          <Link id="link" to="/">
            <p>Carrito Vacio, Ir a Inicio</p>
          </Link>
        </div>
      ) : (
        <div>
          <p>Productos:{totalProductos}</p>

          {carrito.map((articulo) => (
            <div key={articulo.producto.id}>
              <p>{articulo.producto.nombre}</p>
              <img src={articulo.producto.img} alt="" />
              <p>{articulo.producto.precio} $</p>
              <p>Unidades seleccionadas: {articulo.cantidad}</p>
              <button onClick={() => borrarProducto(articulo.producto.id)}>
                Eliminar
              </button>
            </div>
          ))}

          <p>Total: {totalPrecio} $</p>
          <button onClick={confirmar}>Confirmar compra</button>
        </div>
      )}
    </>
  );
};

export default Cart;

  /* // {carrito&& carrito.length? <> */

//   {/* <div>Carrito</div> */}
//   {
//   carrito.map(articulo => (
//       <div key={articulo.producto.id}>
//         <p>{articulo.producto.nombre}</p>
//         <p>{articulo.producto.precio} $</p>
//         <p>Unidades seleccionadas: {articulo.producto.cantidad}</p>
//         <button onClick={()=> borrarProducto(articulo.producto.id)}>Eliminar</button>
//       </div>
//   ))
//   }
//   <p>Total: {calcularTotalProductos()} $</p>
//   <button onClick={confirmar}>Confirmar compra</button>
//   </>: <Link id="link" to="/">
//       <p>Carrito Vacio, Ir a Inicio</p>
//     </Link>}
