import * as Styles from "./styles";
import { useNavigate } from "react-router-dom";

interface ProductItemProps {
  data: {
    id: number;
    image: string;
    title: string;
    price: number;
    retailPrice: number;
  };
}

export const ProductItem = ({ data }: ProductItemProps) => {
  // const router = useNavigate();
  return (
    <Styles.Container>
      <Styles.ImageContent>
        <img src={data.image} alt={`IMAGE ${data.title}`} />
        <div>
          <h2>{data.title}</h2>
          <div>
            <span>R${data.price.toFixed()}</span>
            <span>R${data.retailPrice.toFixed()}</span>
          </div>
        </div>
      </Styles.ImageContent>
      <button onClick={() => console.log(`/${data.id}`)}>View Details</button>
    </Styles.Container>
  );
};
