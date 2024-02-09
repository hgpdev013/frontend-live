import * as Styles from "./styles";
import { productList } from "../../utils/productList";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  function handleAddToCart(id: number) {
    localStorage.setItem("cart", id);
  }

  const { id } = useParams();

  const selectedItem = productList.filter(
    (item) => item.ProductID === Number(id)
  );

  return (
    <Styles.Container>
      <img src={selectedItem[0].PictureURL} />
      <h1>{selectedItem[0].Name}</h1>
      <div>{selectedItem[0].RatingAvg}</div>
      <span>{selectedItem[0].Description}</span>
      <div>
        <div>
          <span>{selectedItem[0].Price}</span>
          <span>{selectedItem[0].RetailPrice}</span>
        </div>
        <div>
          {/* <span>{!selectedItem[0].A && "Out of Stock"}</span> */}
          <button onClick={() => handleAddToCart(selectedItem[0].ProductID)}>
            Add To Cart
          </button>
        </div>
      </div>
    </Styles.Container>
  );
}
