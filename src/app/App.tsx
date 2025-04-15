import CompanyItem from "../components/CompanyItem";
import List from "../components/List";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import { companies, products } from "../utils/contants";
import withToggles from "../components/HOC";
// Certifique-se que ProductList aceita apenas produtos

// Ao usar o withToggles, especifique o tipo
export const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      <div className="col-2">
        <List
          tableName="Products"
          dataTable={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />
        <List
          tableName="Companies"
          dataTable={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div>

      <div className="col-2">
        <ProductList title="Products HOC" items={products} />
        <ProductListWithToggles title="Products HOC" items={products} />
      </div>

    </div>
  );
}
