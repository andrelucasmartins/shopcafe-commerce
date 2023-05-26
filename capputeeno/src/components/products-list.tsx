import { useProducts } from "@/hooks/useProducts";

interface ProductsListProps {}

export const ProductsList = (props: ProductsListProps) => {
  const { data } = useProducts();

  console.log(data);
  return <></>;
};
