import ProductList from "./ProductList";
import useInput, { IInput } from "../hooks/useInput";
import withProductSearch from "./hoc/withProductSearch";

function ProductMain() {

  const [filterProps] = useInput("");

  const ProductsTable = withProductSearch(
    ProductList,
    (filterProps as IInput<string>).value
  );

  return (
    <>
        <h3>Product</h3>
        <input
          className="form-control"
          type="search"
          placeholder="Type here ..."
          {...filterProps}
        />
        <br />
        <ProductsTable />
    </>
  );
}

export default ProductMain;
