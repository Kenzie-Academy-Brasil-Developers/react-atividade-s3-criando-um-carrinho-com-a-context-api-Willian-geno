import ProductList from "./componentes/product-list";
import {CartProvider} from "./providers/cart";
import {CatalogueProvider} from "./providers/catalogue";
import { Conteiner } from "./styled";

function App() {
  return (
    <Conteiner>
      <CatalogueProvider>
        <CartProvider>
            <ProductList type = "catalogue"/>
            <ProductList type = "cart"/>
        </CartProvider>
      </CatalogueProvider>
    </Conteiner>
  );
}

export default App;
