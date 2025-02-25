/* eslint-disable @typescript-eslint/no-explicit-any */
// Redux/Redux Toolkit
import { useContext } from "react";
import IProduct from "../../models/IProduct";
import { CartContext } from "../../CartContext";

function CartMain() {
    const { items, clearCart, removeFromCart } = useContext<any>(CartContext);

  return (
    <>
      <h3>Cart</h3>
      {items?.length > 0 && (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((p: IProduct) => (
                <tr key={p.id}>
                  <td>{p.productName}</td>
                  <td>{p.unitPrice}</td>
                  <td>
                    <i
                      className="bi bi-bag-dash-fill"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => removeFromCart(p)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <td colSpan={2}>
                  {items.reduce((a: number, c: IProduct) => a + c.unitPrice, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
          <button
            className="btn btn-secondary"
            onClick={() => clearCart()}
          >
            Clear cart
          </button>
        </>
      )}
      {items?.length === 0 && <p>Cart is empty!</p>}
    </>
  );
}

export default CartMain;
