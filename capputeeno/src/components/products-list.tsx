import { useProducts } from "@/hooks/useProducts";
import styled from "styled-components";
import { ProductCard } from "./product-card";

const ListContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  grid-gap: 32px;

  margin-top: 24px;
`;

export const ProductsList = () => {
  const { data } = useProducts();

  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      ))}
    </ListContainer>
  );
};
