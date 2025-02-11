import { Link } from "react-router";
import IProduct from "../../models/IProduct";

type productListProps = {
  products?: Array<IProduct>;
};

function ProductList({ products }: productListProps) {
  return (
    <>
      {products && products.length > 0 && (
        <>
          <h6>Product List</h6>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Category</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p: IProduct) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.productName}</td>
                  <td>{p.unitPrice}</td>
                  <td>{p.category?.categoryName ?? ""}</td>
                  <td>
                    <Link to={`detail/${p.id}`}>
                      <i
                        className="bi bi-caret-right"
                        style={{ color: "green", cursor: "pointer" }}
                      ></i>
                    </Link>
                  </td>
                  <td>
                    <i
                      className="bi bi-pencil-square"
                      style={{ color: "gray", cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {(!products || products.length === 0) && (
        <p className="alert alert-info">No data to show!</p>
      )}
    </>
  );
}

export default ProductList;
