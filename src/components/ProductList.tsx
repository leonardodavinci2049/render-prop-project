import { ProductType } from "../utils/contants";
import ProductItem from "./ProductItem";

export interface ProductListProps {
  title: string;
  items: ProductType[];
}

const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="list">
        {items.map((product) => (
          <ProductItem
            key={product.productName}
            product={{
              productName: product.productName,
              price: product.price,
              description: product.description,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
