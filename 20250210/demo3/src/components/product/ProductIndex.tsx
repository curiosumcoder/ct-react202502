import { useEffect } from "react";
import useProductSearch from "../../hooks/useProductSearch";
import useInput, { IInput } from "../../hooks/useInput";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

function ProductIndex() {
  const [filterProps] = useInput("");
  const [{ data }, doSearch] = useProductSearch();

  useEffect(() => {
    doSearch((filterProps as IInput<string>).value);
  }, [filterProps,doSearch]);

  return (
    <>
      <h6>Product Index</h6>
      <Link to="create" className="btn btn-primary">
        Create
      </Link>
      <div className="mt-3 mb-3">
        <input type="search" {...filterProps} className="form-control" 
        placeholder="Type here ..." />
      </div>
      <ProductList products={data} />
    </>
  );
}

export default ProductIndex;