import { useState } from "react";
import IProduct from "./models/IProduct";

function App() {
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState<Array<IProduct>>();

  const search = async (filter: string) => {
    setFilter(filter);
    console.log("Searching for:", filter);

    const response = await fetch(
      `http://localhost:3000/products?productName_like=${filter}`
    );
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  return (
    <>
      <div className="container">
        <h1>App</h1>
        <input
          type="search"
          placeholder="Type here ..."
          className="form-control"
          value={filter}
          onChange={(e) => search(e.target.value)}
        />

        {products && products?.length > 0 && (
          <ul>
            {products.map((product: IProduct) => (
              <li>{product.productName}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
