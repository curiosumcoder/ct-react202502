import { SyntheticEvent, useState, useRef } from "react";
import IProduct from "../../models/IProduct";
import ProductService from "../../services/ProductService";

type productCreateProps = { onCreate?: () => void };

function ProductCreate({ onCreate }: productCreateProps) {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isValid, setIsValid] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const ps = new ProductService();
    await ps.save(product);
    onCreate?.();
  };

  const checkValidation = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      setIsValid(form.current?.checkValidity() ?? false);
      console.log(target.validity);
      if (!target.validity.valid) {
        target.classList.remove("invalid");
        target.classList.add("is-invalid");
      } else {
        target.classList.remove("is-invalid");
        target.classList.add("is-valid");

        // Si el input es válido se actualiza la propiedad en el objeto
        setProduct({ ...product, ...{ [target.name]: target.value } });
      }
    }
  };

  return (
    <>
      <h6>Product Create</h6>
      {/* {JSON.stringify(product)} */}
      <form onSubmit={(event) => handleSubmit(event)} ref={form}>
        <div className="mb-3">
          <label htmlFor="iName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="iName"
            placeholder="Name"
            required
            minLength={2}
            maxLength={32}
            name="productName"
            onChange={(event) => checkValidation(event)}
          />
          <span id="iNameValidation"></span>
          <label htmlFor="iUnitPrice" className="form-label">
            Unit Price
          </label>
          <input
            type="number"
            className="form-control"
            id="iUnitPrice"
            placeholder="Unit Price"
            required
            min={1}
            name="unitPrice"
            onChange={(event) => checkValidation(event)}
          />
          <label htmlFor="iQuantityPerUnit" className="form-label">
            Quantity Per Unit
          </label>
          <input
            type="text"
            className="form-control"
            id="iQuantityPerUnit"
            placeholder="Quantity Per Unit"
            required
            minLength={2}
            name="quantityPerUnit"
            onChange={(event) => checkValidation(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Save
        </button>
      </form>
    </>
  );
}

export default ProductCreate;
