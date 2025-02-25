/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import IProduct from "../../models/IProduct";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

function ProductList({ data }: { data: Array<IProduct> }) {
  const navigate = useNavigate();
  const { addToCart } = useContext<any>(CartContext);

  return (
    <>
      {data && data.length > 0 && (
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
                      addToCart(p);
                      navigate("/cart");
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!data && <p>No data</p>}
    </>
  );
}

export default ProductList;
