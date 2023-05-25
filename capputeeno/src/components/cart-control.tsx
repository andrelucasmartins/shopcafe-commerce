import { useLocalStorage } from "@/hooks/useLocalStorage";
import { styled } from "styled-components";
import { CartIcon } from "./cart-icon";

export const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  font-size: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--delete-color);
  color: white;

  position: absolute;
  right: -10px;
  top: 50%;
`;

const Container = styled.div`
  position: relative;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-items");

  return (
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
