import IProduct from "../../models/IProduct";


type productListProps = {
  products?: Array<IProduct>;
  onSelect?: (p: IProduct) => void;
  onEdit?: (p: IProduct) => void;  
};

function ProductList({ products, onSelect, onEdit }: productListProps) {
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
                    <i
                      className="bi bi-caret-right"
                      style={{ color: "green", cursor: "pointer" }}
                      onClick={() => onSelect?.(p)}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bi bi-pencil-square"
                      style={{ color: "gray", cursor: "pointer" }}
                      onClick={() => onEdit?.(p)}
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
