import { useEffect } from "react";
import useInput, { IInput } from "../../hooks/useInput";
import useProductSearch from "../../hooks/useProductSearch";
import IProduct from "../../models/IProduct";

function HooksTest() {
  const [nameProps, ] = useInput("");

  const [{ data, isProcessing, isError }, doSearch] = useProductSearch();

  useEffect(() => {
    doSearch((nameProps as IInput<string>).value);
  });

  return (
    <>
      <hr />
      <h5>HooksTest</h5>
      <p>
        <input type="text" {...nameProps} className="form-control-sm" />
        <br />
        {(nameProps as IInput<string>).value}
      </p>
      <hr />
      {data && (
        <ul>
          {data.map((p: IProduct) => (
            <li key={p.id}>{p.productName}</li>
          ))}
        </ul>
      )}
      {isProcessing && (
        <div className="alert alert-secondary">Processing 👾...</div>
      )}
      {isError && (
        <div className="alert alert-warning">Something went wrong 😮...</div>
      )}
    </>
  );
}

export default HooksTest;
