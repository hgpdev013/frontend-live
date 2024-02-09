import { ProductItem } from "../../components";
import { productList } from "../../utils/productList";
import * as Styles from "./styles";

export default function ListPage() {
  return (
    <Styles.Container>
      {productList.map(
        ({ Price, RetailPrice, ProductID, ThumbnailURL, Name }) => {
          return (
            <ProductItem
              key={ProductID}
              data={{
                id: ProductID,
                image: ThumbnailURL,
                retailPrice: RetailPrice,
                price: Price,
                title: Name,
              }}
            />
          );
        }
      )}
    </Styles.Container>
  );
}
