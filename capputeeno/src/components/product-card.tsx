import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  border-radius: 8px 8px 0px 0px;
  width: 16rem;

  img {
    border-radius: 4px 4px 0 0;

    width: 100%;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    margin: 8px 0;

    > div {
      width: 228px;
      height: 1px;
      margin: 8px 0px;

      /* Shapes / 02 */
      background: var(--shapes-2);
    }
  }
`;

export const ProductCard = ({ image, title, price }: ProductCardProps) => {
  const priceFormatter = formatPrice(price);
  return (
    <Card>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <div />
        <p>{priceFormatter}</p>
      </div>
    </Card>
  );
};
