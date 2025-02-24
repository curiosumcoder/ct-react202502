import IProduct from "../../models/IProduct";

function TableList({ items }: { items: [] }) {
  return (
    <>
      {items && items.length > 0 && (
        <table className="table table-bordered">
            <thead><tr><th>id</th><th>name</th><th>price</th></tr></thead>
          <tbody>
            {items.map((item: IProduct, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default TableList;
