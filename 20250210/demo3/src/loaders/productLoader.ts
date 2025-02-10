import ProductService from '../services/ProductService';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function productLoader({ params }: { params: any}) {
  const {id} = params
  const ps = new ProductService();
  console.log(id)
  return await ps.get(params.id);
}
