/* eslint-disable @typescript-eslint/no-explicit-any */
// Redux/Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../state/productSlice";
import IProduct from "../../models/IProduct";
import { useNavigate } from "react-router-dom";
import cartSlice from "../../state/cartSlice";

function ProductMain() {
  const navigate = useNavigate();

  // Redux/Redux Toolkit
  // Read from state on global store
  const { data, } = useSelector((store: any) => store.products);
  // Update state in global store
  // Update state in global store
  const { addToCart } = cartSlice.actions;
  // To execute actions on store
  const dispatch = useDispatch<any>();

  return (
    <>
      <h3>Product</h3>
      <input
        className="form-control"
        type="search"
        placeholder="Type here ..."
        onChange={(event) => dispatch(searchProducts(event.target.value))}
      />
      <br />
      {data.length > 0 && (
        <table className="table table-bordered table-striped">
          <thead>
          <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((p: IProduct) => (
              <tr key={p.id}>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
                <td>
                  <i
                    className="bi bi-bag-plus-fill"
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => {
                      dispatch(addToCart(p));
                      navigate("/cart");
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default ProductMain;
