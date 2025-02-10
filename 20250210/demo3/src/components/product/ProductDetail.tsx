import { useEffect, useMemo, useState } from "react";
import IProduct from "../../models/IProduct";
import ProductService from "../../services/ProductService";

type productDetailProps = {
  id: number;
  name: string;
  price: number;
  fn1?: (msg:string) => void;
};

function ProductDetail({ id }: {id:number}) {

// function ProductDetail({ id, name, price, fn1 }: productDetailProps) {
  //function ProductDetail({id, name, price}:{id:number, name:string, price:number}) {

  // console.log(name, price);
  // fn1?.('esta es una prueba');

  // console.log(props)
  // console.log(`${props.id}, ${props.name}, ${props.price}`)

  // const {id:productId, name, price} = props; // Destructuring
  // console.log(`${productId}, ${name}, ${price}`)

  const ps = useMemo(() => new ProductService(), []);
  const [product, setProduct] = useState<IProduct | null>();

  //const id = 1;
  useEffect(() => {
    console.log("After render component ...");

    (async () => {
      setProduct(await ps.get(id));
    })();

    return () => {
      console.log("Clean-up component ...");
    };
  }, [ps, id]);

  return (
    <>
      {product && (
        <>
          <h6>Product Details</h6>
          <dl>
            <dt>Id</dt>
            <dd>{product?.id}</dd>
            <dt>Name</dt>
            <dd>{product?.productName}</dd>
            <dt>Unit Price</dt>
            <dd>{product?.unitPrice}</dd>
            <dt>Quantity Per Unit</dt>
            <dd>{product?.quantityPerUnit}</dd>
            <dt>Category</dt>
            <dd>{product.category?.categoryName ?? "No category"}</dd>
            <dt>Supplier</dt>
            <dd>{product.supplier?.companyName ?? "No supplier"}</dd>
          </dl>
        </>
      )}
      {!product && (
        <p className="alert alert-info ">No product details to show!</p>
      )}
    </>
  );
}

export default ProductDetail;

// function suma(a:number,b:number) {
//   return a + b;
// }
// suma({},'2');
