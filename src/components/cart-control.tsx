import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background-color: var(--delete-color);
  color: white;
  padding: 0px 5px;
  margin-left: -10px;
  font-size: 10px
`

const Container = styled.div`
  position: relative;
`
export function CartControl() {
  const { value } = useLocalStorage('cart-items', [])
  return (
    <div>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </div>
  )
}